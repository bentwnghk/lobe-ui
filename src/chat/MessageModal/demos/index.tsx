import { Button } from '@bentwnghk/ui';
import { MessageModal } from '@bentwnghk/ui/chat';
import { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        open
      </Button>
      <MessageModal onOpenChange={setOpen} open={open} value={'editable text'} />
    </>
  );
};
