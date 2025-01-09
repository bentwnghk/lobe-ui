'use client';

import { type IconType, useFillIds } from '@bentwnghk/icons';
import { forwardRef } from 'react';

import { TITLE } from '../style';

const Icon: IconType = forwardRef(({ size = '1em', style, ...rest }, ref) => {
  const [a, b, c, d, e, f] = useFillIds(TITLE, 6);
  return (
    <svg
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
        d="M17.075 16.907l-.687-2.563.397-.106.872 3.256-10.782-2.957 7.868-7.918.872 3.255-.397.106-.687-2.565-6.868 6.912 9.412 2.58z"
        fill="#fff"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M5.158 11.802l.43 1.604-2.013 2.012 2.749.736.43 1.604-5.956-1.596 4.36-4.36z"
        fill={a.fill}
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M17.725 6.753l-1.603-.43-.737-2.748-2.012 2.012-1.603-.43 4.36-4.36 1.595 5.956z"
        fill={b.fill}
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M15.864 20.224l1.174-1.174 2.749.736-.736-2.748 1.173-1.174 1.596 5.955-5.956-1.595z"
        fill={c.fill}
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M10.98 20.955l-.355-3.638 2.48.664-2.126 2.974z"
        fill={d.fill}
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M6.93 7.183l1.512 3.328 1.816-1.816L6.93 7.183z"
        fill={e.fill}
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M20.89 10.91l-3.64-.355.666 2.48 2.973-2.126z"
        fill={f.fill}
        fillRule="evenodd"
      />
      <path
        d="M15.632 10.853A.959.959 0 1015.136 9a.959.959 0 00.496 1.852zM16.87 15.216a.958.958 0 10-.495-1.851.958.958 0 00.496 1.851zM17.614 18.126a.958.958 0 10-.496-1.852.958.958 0 00.496 1.852zM7.544 15.358a.958.958 0 10-.497-1.852.958.958 0 00.497 1.852zM14.89 7.943a.958.958 0 10-.495-1.852.958.958 0 00.496 1.852z"
        fill="#fff"
      />
      <path
        clipRule="evenodd"
        d="M15.786 9.031s-.29-.083-.38-.22c-.07-.107-.197-.51-.222-.585-.1-.307.219-.598.219-.598l-1.211.348s.411-.126.585.36c.027.074.078.41.1.617.027.148-.161.35-.161.35l1.07-.272zM17.531 16.257s-.225-.016-.285-.206c-.035-.132-.048-.175-.086-.322a1.664 1.664 0 01-.064-.239c-.08-.365.127-.505.127-.505l-.938.224s.277.024.41.374c.029.074.058.195.074.275.034.13.036.14.072.267.06.21-.07.305-.07.305l.76-.173z"
        fill="#fff"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M8.288 14.249s-.183-.156.153-.612c.189-.256.458-.532.75-.846.532-.572 1.188-1.225 1.84-1.882.55-.555 1.1-1.11 1.6-1.591.417-.401.794-.757 1.103-1.025.061-.053.126-.092.176-.143.3-.3.633-.177.633-.177l-.88-.841s.066.375-.15.624c-.046.054-.088.116-.14.177-.267.312-.62.69-1.018 1.11a96.727 96.727 0 01-1.581 1.61c-.653.656-1.302 1.316-1.871 1.853-.311.293-.589.56-.841.754-.37.284-.773.21-.773.21l1 .779z"
        fill="#fff"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M7.854 15.168s.107-.183.689-.09c.314.05.69.134 1.106.233.76.18 1.653.427 2.546.668.755.204 1.494.42 2.16.617.555.164 1.544.422 1.613.442.452.13.424.327.424.327l.225-.799s-.161.198-.533.078a54.605 54.605 0 00-1.613-.436c-.674-.167-1.428-.373-2.181-.578-.893-.243-1.788-.481-2.535-.71-.41-.126-.782-.227-1.073-.358-.583-.264-.422-.61-.422-.61l-.406 1.216z"
        fill="#fff"
        fillRule="evenodd"
      />
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={a.id}
          x1="1.162"
          x2="23.167"
          y1="14.432"
          y2="14.432"
        >
          <stop stopColor="#FF8F00" />
          <stop offset="1" stopColor="#FE00FF" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={b.id}
          x1="1.148"
          x2="23.153"
          y1="14.432"
          y2="14.432"
        >
          <stop stopColor="#FF8F00" />
          <stop offset="1" stopColor="#FE00FF" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={c.id}
          x1="1.206"
          x2="23.211"
          y1="14.432"
          y2="14.432"
        >
          <stop stopColor="#FF8F00" />
          <stop offset="1" stopColor="#FE00FF" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={d.id}
          x1="1.205"
          x2="23.21"
          y1="14.432"
          y2="14.432"
        >
          <stop stopColor="#FF8F00" />
          <stop offset="1" stopColor="#FE00FF" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={e.id}
          x1="1.164"
          x2="23.169"
          y1="14.432"
          y2="14.432"
        >
          <stop stopColor="#FF8F00" />
          <stop offset="1" stopColor="#FE00FF" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={f.id}
          x1="1.167"
          x2="23.172"
          y1="14.432"
          y2="14.432"
        >
          <stop stopColor="#FF8F00" />
          <stop offset="1" stopColor="#FE00FF" />
        </linearGradient>
      </defs>
    </svg>
  );
});

export default Icon;
