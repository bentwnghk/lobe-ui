'use client';

import type { IconType } from '@bentwnghk/icons';
import { forwardRef } from 'react';

import { TITLE } from '../style';

const Icon: IconType = forwardRef(({ size = '1em', style, ...rest }, ref) => {
  return (
    <svg
      fill="currentColor"
      fillRule="evenodd"
      height={size}
      ref={ref}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path
        clipRule="evenodd"
        d="M2 3.748c0-.69 0-1.035.134-1.312.118-.245.307-.452.546-.597.27-.165.63-.214 1.35-.312L14.298.13c.932-.127 1.398-.19 1.76-.056.318.117.583.335.751.617.191.32.191.767.191 1.66v19.296c0 .893 0 1.34-.191 1.66-.168.282-.433.5-.75.617-.363.134-.83.07-1.761-.056L4.03 22.473c-.72-.098-1.08-.147-1.35-.311a1.427 1.427 0 01-.546-.598C2 21.287 2 20.942 2 20.253V3.748zm11 6.506c0-.21 0-.315.035-.398a.394.394 0 01.143-.175c.071-.047.164-.057.351-.076l.837-.085c.22-.022.33-.033.415.008.074.036.136.099.175.179.044.09.044.214.044.462v3.662c0 .248 0 .371-.044.462a.382.382 0 01-.175.18c-.085.04-.195.03-.415.007l-.837-.085c-.187-.02-.28-.029-.35-.075a.394.394 0 01-.144-.176C13 14.061 13 13.956 13 13.746v-3.492zM19.822 2.5H18.5V22h1.322c.762 0 1.144 0 1.435-.149.256-.13.464-.34.595-.596.148-.292.148-.674.148-1.439V4.684c0-.764 0-1.147-.148-1.439a1.363 1.363 0 00-.595-.596c-.291-.149-.673-.149-1.435-.149z"
      />
    </svg>
  );
});

export default Icon;
