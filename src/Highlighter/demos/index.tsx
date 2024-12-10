import { Highlighter, HighlighterProps } from '@bentwnghk/ui';
import { StoryBook, useControls, useCreateStore } from '@bentwnghk/ui/storybook';

import { code } from './data';

export default () => {
  const store = useCreateStore();
  const options: HighlighterProps | any = useControls(
    {
      children: {
        rows: true,
        value: code,
      },
      copyable: true,
      language: 'tsx',
      showLanguage: true,
      type: {
        options: ['ghost', 'block', 'pure'],
        value: 'block',
      },
      wrap: false,
    },
    { store },
  );

  return (
    <StoryBook levaStore={store}>
      <Highlighter {...options} style={{ ...options.style, width: '100%' }} />
    </StoryBook>
  );
};
