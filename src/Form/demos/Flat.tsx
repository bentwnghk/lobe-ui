import { Form, type FormProps } from '@bentwnghk/ui';
import { StoryBook, useControls, useCreateStore } from '@bentwnghk/ui/storybook';
import { Select, Switch } from 'antd';

const setting = {
  i18n: 'en',
  liteAnimation: false,
  sidebarExpand: true,
  sidebarFixedMode: 'float',
  sidebarWidth: 300,
};

const items: FormProps['items'] = [
  {
    children: (
      <Select
        options={[
          {
            label: 'English',
            value: 'en',
          },
          {
            label: '简体中文',
            value: 'zh_CN',
          },
        ]}
      />
    ),
    desc: 'Editor language',
    label: 'Language',
    name: 'i18n',
  },
  {
    children: <Switch />,
    desc: 'Reduce the blur effect and background flow color, which can improve smoothness and save CPU usage',
    label: 'Reduce Animation',
    minWidth: undefined,
    name: 'liteAnimation',
    valuePropName: 'checked',
  },
];

export default () => {
  const store = useCreateStore();

  const { variant }: any = useControls(
    {
      variant: {
        options: ['default', 'block', 'ghost', 'pure'],
        value: 'default',
      },
    },
    { store },
  );

  return (
    <StoryBook levaStore={store}>
      <Form
        initialValues={setting}
        itemMinWidth={'max(30%,240px)'}
        items={items}
        itemsType={'flat'}
        onFinish={console.table}
        variant={variant}
      />
    </StoryBook>
  );
};
