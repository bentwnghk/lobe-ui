import { Markdown, MarkdownProps } from '@bentwnghk/ui';
import { StoryBook, useControls, useCreateStore } from '@bentwnghk/ui/storybook';

import { content } from '@/Markdown/demos/data';

export default () => {
  const store = useCreateStore();
  const options: MarkdownProps | any = useControls(
    {
      children: {
        rows: true,
        value: content,
      },
      variant: {
        options: ['normal', 'chat'],
        value: 'chat',
      },
    },
    { store },
  );

  return (
    <StoryBook levaStore={store}>
      <Markdown {...options} />
    </StoryBook>
  );
};
