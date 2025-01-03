import { FC } from 'react';

import { DivProps, SvgProps } from '@/types';

const LobeChatText: FC<SvgProps & DivProps & { size?: number }> = ({
  size = '1em',
  style,
  ...rest
}) => (
  <svg
    fill="currentColor"
    fillRule="evenodd"
    height={size}
    style={{ flex: 'none', lineHeight: 1, ...style }}
    viewBox="0 0 980 320"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <title>LobeChat</title>
    <path d="M696.999 135.08c-.455.472-.895.949-1.32 1.434V77h-34.98v162.8h35.42v-69.52c0-2.933.514-5.573 1.54-7.92a18.279 18.279 0 014.4-6.16c2.054-1.907 4.4-3.3 7.04-4.18 2.64-1.027 5.5-1.54 8.58-1.54 3.96-.147 7.26.513 9.9 1.98 2.64 1.467 4.62 3.74 5.94 6.82 1.32 3.08 1.98 6.967 1.98 11.66v68.86h35.42v-71.5c0-10.413-1.54-19.14-4.62-26.18-2.933-7.187-7.406-12.54-13.42-16.06-6.013-3.667-13.42-5.5-22.22-5.5-6.453 0-12.613 1.32-18.48 3.96-5.866 2.64-10.926 6.16-15.18 10.56zM15 240.035V87.172h39.24V205.75h66.192v34.285H15z"></path>
    <path d="M183.731 242c-11.759 0-22.196-2.621-31.313-7.862-9.116-5.241-16.317-12.447-21.601-21.619-5.153-9.317-7.729-19.945-7.729-31.883 0-11.937 2.576-22.492 7.729-31.664 5.164-8.963 12.159-15.98 20.982-21.05l.619-.351c9.117-5.241 19.554-7.861 31.313-7.861s22.196 2.62 31.313 7.861c9.248 5.096 16.449 12.229 21.601 21.401 5.153 9.172 7.729 19.727 7.729 31.664 0 11.938-2.576 22.566-7.729 31.883-5.152 9.172-12.353 16.378-21.601 21.619-9.117 5.241-19.554 7.862-31.313 7.862zm0-32.975c4.36 0 8.191-1.092 11.494-3.275 3.436-2.184 6.144-5.387 8.126-9.609 1.982-4.367 2.973-9.536 2.973-15.505 0-5.968-.991-10.991-2.973-15.067-1.906-4.06-4.483-7.177-7.733-9.352l-.393-.257c-3.303-2.184-7.134-3.276-11.494-3.276-4.228 0-8.059 1.092-11.495 3.276-3.303 2.184-6.011 5.387-8.125 9.609-1.982 4.076-2.973 9.099-2.973 15.067 0 5.969.991 11.138 2.973 15.505 2.114 4.222 4.822 7.425 8.125 9.609 3.436 2.183 7.267 3.275 11.495 3.275zM295.508 78l-.001 54.042a34.071 34.071 0 016.541-5.781c6.474-4.367 14.269-6.551 23.385-6.551 9.777 0 18.629 2.475 26.557 7.424 7.872 4.835 14.105 11.684 18.7 20.546l.325.637c4.756 9.026 7.135 19.799 7.135 32.319 0 12.666-2.379 23.585-7.135 32.757-4.624 9.026-10.966 16.087-19.025 21.182-7.928 4.95-16.78 7.425-26.557 7.425-9.644 0-17.704-2.184-24.178-6.551-2.825-1.946-5.336-4.355-7.532-7.226l.001 11.812h-35.87V78h37.654zm21.998 74.684c-4.228 0-8.059 1.092-11.494 3.276-3.303 2.184-6.012 5.387-8.126 9.609-1.982 4.076-2.972 9.099-2.972 15.067 0 5.969.99 11.138 2.972 15.505 2.114 4.222 4.823 7.425 8.126 9.609 3.435 2.183 7.266 3.275 11.494 3.275s7.994-1.092 11.297-3.275c3.435-2.184 6.143-5.387 8.125-9.609 2.114-4.367 3.171-9.536 3.171-15.505 0-5.968-1.057-10.991-3.171-15.067-1.906-4.06-4.483-7.177-7.732-9.352l-.393-.257c-3.303-2.184-7.069-3.276-11.297-3.276zM422.841 191.337l.084.337a27.857 27.857 0 002.057 5.559c2.246 4.222 5.417 7.498 9.513 9.827 4.096 2.184 8.984 3.276 14.665 3.276 5.285 0 9.777-.801 13.477-2.403 3.579-1.632 7.1-4.025 10.564-7.182l.732-.679 19.818 22.711c-5.153 6.26-11.494 11.064-19.025 14.413-7.531 3.203-16.449 4.804-26.755 4.804-12.683 0-23.782-2.621-33.294-7.862-9.381-5.386-16.713-12.665-21.998-21.837-5.153-9.317-7.729-19.872-7.729-31.665 0-11.792 2.51-22.274 7.53-31.446 5.036-9.105 11.902-16.195 20.596-21.268l.61-.351c8.984-5.241 19.091-7.861 30.322-7.861 10.311 0 19.743 2.286 28.294 6.859l.64.347c8.72 4.659 15.656 11.574 20.809 20.746 5.153 9.172 7.729 20.309 7.729 33.411 0 1.294-.052 2.761-.156 4.4l-.042.623-.17 2.353c-.075 1.01-.151 1.973-.227 2.888h-78.044zm21.365-42.147c-4.492 0-8.456 1.092-11.891 3.276-3.303 2.184-5.879 5.314-7.729 9.39a26.04 26.04 0 00-1.117 2.79 30.164 30.164 0 00-1.121 4.499l-.058.354h43.96l-.015-.106c-.401-2.638-1.122-5.055-2.163-7.252l-.246-.503c-1.776-3.774-4.282-6.742-7.519-8.906l-.409-.266c-3.303-2.184-7.2-3.276-11.692-3.276zM846.763 155.12c3.373 2.786 5.06 7.186 5.06 13.2v2.64h-17.38c-8.654 0-16.28.806-22.88 2.42-6.454 1.466-11.88 3.74-16.28 6.82-4.254 2.933-7.48 6.673-9.68 11.22-2.2 4.546-3.3 9.826-3.3 15.84 0 7.04 1.686 13.2 5.06 18.48 3.52 5.133 8.213 9.166 14.08 12.1 6.013 2.933 12.686 4.4 20.02 4.4 5.573 0 10.853-1.1 15.84-3.3 5.133-2.2 9.826-5.207 14.08-9.02l.44-.385v10.505h34.1V161.5c0-9.24-1.98-16.867-5.94-22.88-3.96-6.014-9.534-10.487-16.72-13.42-7.187-2.934-15.694-4.4-25.52-4.4-10.707 0-20.607 2.053-29.7 6.16-9.094 4.106-17.16 9.753-24.2 16.94l21.12 20.46c4.106-4.84 8.36-8.287 12.76-10.34 4.546-2.2 9.68-3.3 15.4-3.3 5.866 0 10.413 1.466 13.64 4.4zm5.06 52.071V193.18h-16.5c-3.08 0-5.794.293-8.14.88-2.347.44-4.327 1.246-5.94 2.42-1.614 1.026-2.86 2.273-3.74 3.74-.734 1.466-1.1 3.226-1.1 5.28 0 2.2.586 4.106 1.76 5.72 1.173 1.613 2.713 2.86 4.62 3.74 2.053.88 4.4 1.32 7.04 1.32 3.813 0 7.406-.587 10.78-1.76 3.52-1.32 6.6-3.154 9.24-5.5a29.32 29.32 0 001.98-1.829z"></path>
    <path d="M592.64 242c-11.587 0-22.293-1.907-32.12-5.72-9.68-3.96-18.113-9.46-25.3-16.5-7.04-7.187-12.54-15.62-16.5-25.3-3.813-9.827-5.72-20.534-5.72-32.12 0-11.44 1.98-22 5.94-31.68 4.107-9.68 9.827-18.114 17.16-25.3 7.333-7.187 15.913-12.76 25.74-16.72 9.973-3.96 20.753-5.94 32.34-5.94 7.333 0 14.52.953 21.56 2.86 7.04 1.906 13.567 4.766 19.58 8.58 6.16 3.666 11.44 8.14 15.84 13.42l-23.1 26.18c-4.547-4.987-9.68-8.874-15.4-11.66-5.573-2.787-11.807-4.18-18.7-4.18-5.867 0-11.44 1.026-16.72 3.08-5.133 2.053-9.607 5.06-13.42 9.02-3.813 3.96-6.82 8.653-9.02 14.08-2.2 5.426-3.3 11.586-3.3 18.48 0 6.746 1.027 12.906 3.08 18.48 2.2 5.426 5.28 10.12 9.24 14.08 4.107 3.813 8.947 6.746 14.52 8.8 5.72 2.053 12.027 3.08 18.92 3.08 4.547 0 8.873-.587 12.98-1.76a48.746 48.746 0 0011.88-5.5c3.667-2.347 6.82-4.987 9.46-7.92l18.26 29.04c-3.52 3.96-8.36 7.553-14.52 10.78-6.013 3.226-12.76 5.793-20.24 7.7a95.814 95.814 0 01-22.44 2.64zM942.281 202.6v-48.59h27.14V123.4h-27.14V92.8h-33.58v30.6h-16.79v30.61h16.79v48.36c0 26.526 13.263 39.79 39.79 39.79 9.66 0 17.327-1.227 23-3.68v-27.83c-4.753 3.066-10.197 4.6-16.33 4.6-3.833 0-6.977-1.074-9.43-3.22-2.3-2.147-3.45-5.29-3.45-9.43z"></path>
  </svg>
);

export default LobeChatText;
