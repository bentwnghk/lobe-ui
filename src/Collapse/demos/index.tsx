import { ActionIcon, Collapse, CollapseProps } from '@bentwnghk/ui';
import { StoryBook, useControls, useCreateStore } from '@bentwnghk/ui/storybook';
import { SettingsIcon } from 'lucide-react';

const items: CollapseProps['items'] = [
  {
    children: 111,
    extra: (
      <ActionIcon
        icon={SettingsIcon}
        // If you want to prevent the event from bubbling up,
        // you can use the stopPropagation method.
        onClick={(e) => e.stopPropagation()}
        size={{ blockSize: 24, fontSize: 16 }}
      />
    ),
    key: '1',
    label: 'This is panel header 1',
  },
  {
    children: 222,

    key: '2',
    label: 'This is panel header 2',
  },
  {
    children: 333,
    key: '3',
    label: 'This is panel header 3',
  },
];

export default () => {
  const store = useCreateStore();

  const control: CollapseProps | any = useControls(
    {
      accordion: false,
      gap: {
        step: 1,
        value: 0,
      },
      variant: {
        options: ['default', 'block', 'ghost', 'pure'],
        value: 'default',
      },
    },
    { store },
  );

  return (
    <StoryBook levaStore={store}>
      <Collapse items={items} {...control} />
    </StoryBook>
  );
};
