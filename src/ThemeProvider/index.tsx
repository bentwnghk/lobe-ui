'use client';

import { App } from 'antd';
import {
  ThemeProvider as AntdThemeProvider,
  ThemeProviderProps as AntdThemeProviderProps,
  CustomStylishParams,
  CustomTokenParams,
  GetAntdTheme,
} from 'antd-style';
import { merge } from 'lodash-es';
import { CSSProperties, memo, useCallback, useMemo } from 'react';

import { useCdnFn } from '@/ConfigProvider';
import FontLoader from '@/FontLoader';
import { NeutralColors, PrimaryColors, lobeCustomStylish, lobeCustomToken } from '@/styles';
import { createLobeAntdTheme } from '@/styles/theme/antdTheme';
import { LobeCustomToken } from '@/types/customToken';

import GlobalStyle from './GlobalStyle';

export interface ThemeProviderProps extends AntdThemeProviderProps<any> {
  className?: string;
  /**
   * @description Webfont loader css strings
   */
  customFonts?: string[];

  customStylish?: (theme: CustomStylishParams) => { [key: string]: any };
  customTheme?: {
    neutralColor?: NeutralColors;
    primaryColor?: PrimaryColors;
  };
  /**
   * @description Custom extra token
   */
  customToken?: (theme: CustomTokenParams) => { [key: string]: any };
  enableCustomFonts?: boolean;
  enableGlobalStyle?: boolean;
  style?: CSSProperties;
}

const ThemeProvider = memo<ThemeProviderProps>(
  ({
    children,
    customStylish,
    customToken,
    enableCustomFonts = true,
    enableGlobalStyle = true,
    customFonts,
    customTheme = {},
    className,
    style,
    theme: antdTheme,
    ...rest
  }) => {
    const genCdnUrl = useCdnFn();

    const webfontUrls = useMemo(
      () =>
        customFonts || [
          genCdnUrl({ path: 'css/index.css', pkg: '@lobehub/webfont-mono' }),
          genCdnUrl({
            path: 'css/index.css',
            pkg: '@lobehub/webfont-harmony-sans',
          }),
          genCdnUrl({
            path: 'css/index.css',
            pkg: '@lobehub/webfont-harmony-sans-sc',
          }),
          genCdnUrl({ path: 'dist/katex.min.css', pkg: 'katex' }),
        ],
      [customFonts, genCdnUrl],
    );

    const stylish = useCallback(
      (theme: CustomStylishParams) => ({ ...lobeCustomStylish(theme), ...customStylish?.(theme) }),
      [customStylish],
    );

    const token = useCallback(
      (theme: CustomTokenParams) => ({ ...lobeCustomToken(theme), ...customToken?.(theme) }),
      [customToken],
    );

    const theme = useCallback<GetAntdTheme>(
      (appearance) => {
        const lobeTheme = createLobeAntdTheme({
          appearance,
          neutralColor: customTheme.neutralColor,
          primaryColor: customTheme.primaryColor,
        });
        return merge(lobeTheme, antdTheme);
      },
      [customTheme.primaryColor, customTheme.neutralColor, antdTheme],
    );

    return (
      <>
        {enableCustomFonts &&
          webfontUrls?.length > 0 &&
          webfontUrls.map((webfont) => <FontLoader key={webfont} url={webfont} />)}
        <AntdThemeProvider<LobeCustomToken>
          customStylish={stylish}
          customToken={token}
          theme={theme}
          {...rest}
        >
          {enableGlobalStyle && <GlobalStyle />}
          <App className={className} style={{ minHeight: 'inherit', width: 'inherit', ...style }}>
            {children}
          </App>
        </AntdThemeProvider>
      </>
    );
  },
);

ThemeProvider.displayName = 'LobeThemeProvider';

export default ThemeProvider;
