import { ConfigProvider, Logo } from '@bentwnghk/ui';

export default () => {
  return (
    <ConfigProvider config={{ proxy: 'unpkg' }}>
      <Logo />
    </ConfigProvider>
  );
};
