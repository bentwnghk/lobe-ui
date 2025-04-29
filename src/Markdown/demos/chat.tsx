import { Markdown, MarkdownProps } from '@bentwnghk/ui';
import { StoryBook, useControls, useCreateStore } from '@bentwnghk/ui/storybook';

import { content } from './data';

export default () => {
  const store = useCreateStore();
  const { children, ...rest } = useControls(
    {
      children: {
        rows: true,
        value: content,
      },
      fullFeaturedCodeBlock: true,
    },
    { store },
  ) as MarkdownProps;

  return (
    <StoryBook levaStore={store}>
      <Markdown variant={'chat'} {...rest}>
        {children}
      </Markdown>
    </StoryBook>
  );
};
