'use client';

import { IconAvatar, type IconAvatarProps } from '@bentwnghk/icons';
import { memo } from 'react';

import { COLOR_PRIMARY, TITLE } from '../style';
import Mono from './Mono';

export type AvatarProps = Omit<IconAvatarProps, 'Icon'>;

const Avatar = memo<AvatarProps>(({ background, ...rest }) => {
  return (
    <IconAvatar
      Icon={Mono}
      aria-label={TITLE}
      background={background || COLOR_PRIMARY}
      color={'#000'}
      {...rest}
    />
  );
});

export default Avatar;
