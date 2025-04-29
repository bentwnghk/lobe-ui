import { Markdown, MarkdownProps } from '@bentwnghk/ui';
import { StoryBook, useControls, useCreateStore } from '@bentwnghk/ui/storybook';

import { content2 } from './data';

export default () => {
  const store = useCreateStore();
  const options = useControls(
    {
      children: {
        rows: true,
        value: content2,
      },
      fullFeaturedCodeBlock: false,
    },
    { store },
  ) as MarkdownProps;

  return (
    <StoryBook levaStore={store}>
      <Markdown
        {...options}
        componentProps={{
          a: {
            rel: '',
            target: '_self',
          },
          img: {
            style: {
              border: '5px solid green',
              borderRadius: '20px',
            },
          },
        }}
      />
    </StoryBook>
  );
};
