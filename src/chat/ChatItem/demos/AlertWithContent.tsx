import { Highlighter } from '@bentwnghk/ui';
import { ChatItem, ChatItemProps } from '@bentwnghk/ui/chat';
import { StoryBook, useControls, useCreateStore } from '@bentwnghk/ui/storybook';

import { avatar } from './data';

const demoError = {
  details: {
    exception:
      'Validation filter failedId-f5aab7304f6c754804f70000Id-f5aab7304f6c754804f70000Id-f5aab7304f6c754804f70000Id-f5aab7304f6c754804f70000Id-f5aab7304f6c754804f70000Id-f5aab7304f6c754804f70000',
    msgId:
      'Id-f5aab7304f6c754804f70000Id-f5aab7304f6c754804f70000Id-f5aab7304f6c754804f70000Id-f5aab7304f6c754804f70000Id-f5aab7304f6c754804f70000',
  },
  reasons: [
    {
      language: 'en',
      message: 'Validation filter failed',
    },
  ],
};
export default () => {
  const store = useCreateStore();
  const control = useControls(
    {
      content: {
        value: 'some content',
      },
      description: '',
      message: 'Error',
      type: {
        options: ['success', 'info', 'warning', 'error'],
        value: 'error',
      },
    },
    { store },
  ) as ChatItemProps['error'] & { content: string };

  return (
    <StoryBook levaStore={store}>
      <ChatItem
        avatar={avatar}
        error={control}
        errorMessage={
          <Highlighter actionIconSize={'small'} language={'json'} variant={'borderless'}>
            {JSON.stringify(demoError, null, 2)}
          </Highlighter>
        }
        message={control.content}
      />
    </StoryBook>
  );
};
