import { Markdown, MarkdownProps } from '@bentwnghk/ui';
import { StoryBook, useControls, useCreateStore } from '@bentwnghk/ui/storybook';

import { code } from './data';

export default () => {
  const store = useCreateStore();
  const options: MarkdownProps | any = useControls(
    {
      allowHtml: true,
      children: {
        rows: true,
        value: code,
      },
      fullFeaturedCodeBlock: true,
    },
    { store },
  );

  return (
    <StoryBook levaStore={store}>
      <Markdown
        componentProps={{
          highlight: {
            enableTransformer: true,
          },
        }}
        {...options}
      />
    </StoryBook>
  );
};
