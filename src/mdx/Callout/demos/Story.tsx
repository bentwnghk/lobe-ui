import { Typography } from '@bentwnghk/ui';
import { Callout } from '@bentwnghk/ui/mdx';
import { StoryBook, useControls, useCreateStore } from '@bentwnghk/ui/storybook';

export default () => {
  const store = useCreateStore();
  const { content, type }: any = useControls(
    {
      content: 'A callout is a short piece of text intended to attract attention.',
      type: {
        options: ['tip', 'error', 'important', 'info', 'warning'],
        value: 'info',
      },
    },
    { store },
  );

  return (
    <StoryBook levaStore={store}>
      <Typography>
        <Callout type={type}>{content}</Callout>
      </Typography>
    </StoryBook>
  );
};
