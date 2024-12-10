import { EditableMessage } from '@bentwnghk/ui/chat';
import { StoryBook, useControls, useCreateStore } from '@bentwnghk/ui/storybook';
import { button } from 'leva';
import { useState } from 'react';

import { content } from '../../../Markdown/demos/data';

export default () => {
  const [openModal, setOpenModal] = useState(false);
  const [editing, setEdit] = useState(false);
  const store = useCreateStore();

  useControls(
    {
      editing: button(() => {
        setEdit(true);
      }),
      openModal: button(() => {
        setOpenModal(true);
      }),
    },
    { store },
  );

  return (
    <StoryBook levaStore={store}>
      <EditableMessage
        editing={editing}
        onEditingChange={setEdit}
        onOpenChange={setOpenModal}
        openModal={openModal}
        value={content}
      />
    </StoryBook>
  );
};
