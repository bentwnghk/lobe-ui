import { LogoSpline, LogoThreeProps } from '@bentwnghk/ui/brand';
import { StoryBook, useControls, useCreateStore } from '@bentwnghk/ui/storybook';

export default () => {
  const store = useCreateStore();
  const control = useControls(
    {
      height: {
        max: 640,
        min: 24,
        step: 1,
        value: 400,
      },
      width: {
        max: 640,
        min: 24,
        step: 1,
        value: 640,
      },
    },
    { store },
  ) as LogoThreeProps;

  return (
    <StoryBook levaStore={store}>
      <LogoSpline {...control} />
    </StoryBook>
  );
};
