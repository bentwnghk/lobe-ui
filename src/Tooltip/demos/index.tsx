import { Tooltip, TooltipProps } from '@bentwnghk/ui';
import { StoryBook, useControls, useCreateStore } from '@bentwnghk/ui/storybook';
import { Button } from 'antd';

export default () => {
  const store = useCreateStore();
  const control: TooltipProps | any = useControls(
    {
      arrow: false,
      title: 'Example tooltip',
    },
    { store },
  );

  return (
    <StoryBook levaStore={store}>
      <Tooltip {...control}>
        <Button type="primary">Tooltip</Button>
      </Tooltip>
    </StoryBook>
  );
};
