import { GradientButton, GradientButtonProps } from '@bentwnghk/ui/awesome';
import { StoryBook, useControls, useCreateStore } from '@bentwnghk/ui/storybook';

export default () => {
  const store = useCreateStore();
  const control: GradientButtonProps | any = useControls(
    {
      children: 'Get a Demo',
      glow: true,
      size: {
        options: ['large', 'normal', 'small'],
        value: 'large',
      },
    },
    { store },
  );

  return (
    <StoryBook levaStore={store}>
      <GradientButton {...control} />
    </StoryBook>
  );
};
