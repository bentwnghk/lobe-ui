import { LogoThree, LogoThreeProps } from '@bentwnghk/ui';
import { StoryBook, useControls, useCreateStore } from '@bentwnghk/ui/storybook';

export default () => {
  const store = useCreateStore();
  const control: LogoThreeProps | any = useControls(
    {
      size: {
        max: 640,
        min: 24,
        step: 1,
        value: 200,
      },
    },
    { store },
  );

  return (
    <StoryBook levaStore={store}>
      <LogoThree {...control} />
    </StoryBook>
  );
};
