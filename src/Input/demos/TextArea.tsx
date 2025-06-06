import { TextArea, TextAreaProps } from '@bentwnghk/ui';
import { StoryBook, useControls, useCreateStore } from '@bentwnghk/ui/storybook';

export default () => {
  const store = useCreateStore();
  const controls = useControls(
    {
      placeholder: 'Type keywords...',
      resize: false,
      shadow: false,
      variant: {
        options: ['outlined', 'borderless', 'filled'],
        value: 'filled',
      },
    },
    { store },
  ) as TextAreaProps;

  return (
    <StoryBook levaStore={store}>
      <TextArea {...controls} />
    </StoryBook>
  );
};
