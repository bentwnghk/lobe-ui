import { ActionIcon } from '@bentwnghk/ui';
import { ChatInputActionBar, TokenTag } from '@bentwnghk/ui/chat';
import { MobileChatInputArea, MobileChatSendButton } from '@bentwnghk/ui/mobile';
import { Eraser, Languages } from 'lucide-react';
import { Flexbox } from 'react-layout-kit';

export default () => {
  return (
    <Flexbox style={{ height: 400, position: 'relative' }}>
      <div style={{ flex: 1 }} />
      <MobileChatInputArea
        textAreaRightAddons={<MobileChatSendButton />}
        topAddons={
          <ChatInputActionBar
            leftAddons={
              <>
                <ActionIcon icon={Languages} />
                <ActionIcon icon={Eraser} />
                <TokenTag maxValue={5000} value={1000} />
              </>
            }
          />
        }
      />
    </Flexbox>
  );
};
