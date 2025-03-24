import { Hotkey, type HotkeyProps } from '@bentwnghk/ui';
import { StoryBook, useControls, useCreateStore } from '@bentwnghk/ui/storybook';

export default () => {
  const store = useCreateStore();
  const control: HotkeyProps | any = useControls(
    {
      compact: false,
      inverseTheme: false,
      keys: 'mod+k',
    },
    { store },
  );

  return (
    <StoryBook levaStore={store}>
      <Hotkey {...control} />
    </StoryBook>
  );
};
