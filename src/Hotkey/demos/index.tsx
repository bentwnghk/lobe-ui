import { Hotkey, type HotkeyProps } from '@bentwnghk/ui';
import { StoryBook, useControls, useCreateStore } from '@bentwnghk/ui/storybook';

export default () => {
  const store = useCreateStore();
  const control: HotkeyProps | any = useControls(
    {
      compact: false,
      inverseTheme: false,
      keys: 'mod+k',
      variant: {
        options: ['pure', 'default'],
        value: 'default',
      },
    },
    { store },
  );

  return (
    <StoryBook levaStore={store}>
      <Hotkey {...control} />
    </StoryBook>
  );
};
