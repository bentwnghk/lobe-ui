import { type ActionIconProps, Avatar } from '@bentwnghk/ui';
import { StoryBook, useControls, useCreateStore } from '@bentwnghk/ui/storybook';

import { useCdnFn } from '@/ConfigProvider';

export default () => {
  const genCdnUrl = useCdnFn();
  const store = useCreateStore();
  const control: ActionIconProps | any = useControls(
    {
      animation: false,
      avatar: genCdnUrl({
        path: 'assets/logo-3d.webp',
        pkg: '@lobehub/assets-logo',
        version: 'latest',
      }),
      background: '#FEE064',
      shape: {
        options: ['circle', 'square'],
        value: 'circle',
      },
      size: {
        max: 128,
        min: 16,
        step: 1,
        value: 40,
      },
      title: 'cm',
    },
    { store },
  );

  return (
    <StoryBook levaStore={store}>
      <Avatar {...control} />
    </StoryBook>
  );
};
