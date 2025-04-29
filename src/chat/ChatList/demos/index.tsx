import { ChatActionsBar, ChatList, ChatListProps } from '@bentwnghk/ui/chat';
import { StoryBook, useControls, useCreateStore } from '@bentwnghk/ui/storybook';

import { data } from './data';

export default () => {
  const store = useCreateStore();
  const control = useControls(
    {
      showTitle: false,
      variant: {
        options: ['bubble', 'docs'],
        value: 'bubble',
      },
    },
    { store },
  ) as ChatListProps;

  return (
    <StoryBook levaStore={store}>
      <ChatList
        {...control}
        data={data}
        renderActions={{
          default: ChatActionsBar,
        }}
        renderMessages={{
          default: ({ id, editableContent }) => <div id={id}>{editableContent}</div>,
        }}
        style={{ width: '100%' }}
      />
    </StoryBook>
  );
};
