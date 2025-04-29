import { InputOPT, InputOPTProps } from '@bentwnghk/ui';
import { StoryBook, useControls, useCreateStore } from '@bentwnghk/ui/storybook';

export default () => {
  const store = useCreateStore();
  const controls = useControls(
    {
      shadow: false,
      variant: {
        options: ['outlined', 'borderless', 'filled'],
        value: 'filled',
      },
    },
    { store },
  ) as InputOPTProps;

  return (
    <StoryBook levaStore={store}>
      <InputOPT {...controls} />
    </StoryBook>
  );
};
