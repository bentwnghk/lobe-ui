import { memo } from 'react';

import { DivProps, SvgProps } from '@/types';

const LogoHighContrast = memo<SvgProps & DivProps & { size?: number }>(
  ({ size = '1em', style, ...rest }) => (
    <svg
      fill="currentColor"
      fillRule="evenodd"
      height={size}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 320 320"
      width={size}
      {...rest}
    >
      <title>Mr.🆖 AI</title>
      <path d="M25.401 140.14c3.71-5.453 8.81-9.628 15.313-12.838A23.89 23.89 0 0055 132.015a23.91 23.91 0 0016.053-6.159 48.924 48.924 0 0010.603-.294 56.54 56.54 0 006.809 6.555c-8.655 1.087-18.202 2.821-29.05 5.494-11.996 2.956-17.707 7.005-20.785 11.53-3.227 4.743-4.63 11.518-4.63 22.374 0 70.838 55.45 121.5 126 121.5 70.564 0 125.889-49.642 126-120.286-.751-13.724-2.613-20.518-5.764-24.763-3.023-4.073-8.262-7.153-19.898-10.42-9.615-2.7-20.317-4.252-31.506-5.103a48.977 48.977 0 006.306-6.763c2.995-1.106 6.948-.684 12.998.332l.321.054c2.498.421 5.641.95 8.543.95 5.214 0 10.234-.927 14.879-2.626 8.925 3.124 16.138 7.213 21.205 14.041 6.227 8.389 8.147 19.524 8.905 33.656l.011.214v.214c0 80.552-63.518 136.5-142 136.5-78.567 0-142-57.028-142-137.5 0-11.644 1.368-22.506 7.401-31.375z" />
      <path d="M195.5 145.016a50.53 50.53 0 0018.014-3.295C238.551 143.519 255 146.556 255 150c0 4.335-26.066 8.026-62.517 9.413-.201-5.525-.323-10.211-.316-14.505 1.102.071 2.214.108 3.333.108zM125 145.016a58.278 58.278 0 01-19.063-3.182C81.773 143.646 66 146.628 66 150c0 4.295 25.591 7.958 61.52 9.374.238-5.823.186-10.311-.246-14.402a59.24 59.24 0 01-2.274.044zM122.87 228c9.79-4.353 16.63-14.277 16.63-25.823 0-15.562-12.424-28.177-27.75-28.177S84 186.615 84 202.177c0 10.646 5.815 19.913 14.396 24.705 2.902-.349 5.839-.554 8.729-.554 5.259 0 10.673.678 15.745 1.672zM236 202.177c0 10.646-5.815 19.913-14.396 24.705-2.902-.349-5.839-.554-8.729-.554-5.259 0-10.673.678-15.745 1.672-9.79-4.353-16.63-14.277-16.63-25.823 0-15.562 12.424-28.177 27.75-28.177S236 186.615 236 202.177zM127 248.787S133.923 245 160 245c26.077 0 33 3.787 33 3.787S189.769 278 160 278s-33-29.213-33-29.213z" />
      <path
        clipRule="evenodd"
        d="M173 19.016c-6.188 0-10.711-2.238-15.68-4.697-6.295-3.114-13.305-6.583-25.32-6.303-20.261 0-30.93 9.751-40.896 18.86-1.54 1.408-3.064 2.8-4.604 4.14-1.958 1.702-11.5 7-16 9-19.683 8.748-34.5 21.5-34.5 40.5 0 3.789.584 7.447 1.672 10.895A23.93 23.93 0 0155 84.016c13.255 0 24 10.745 24 24 0 3.552-.772 6.925-2.157 9.959a40.472 40.472 0 008.042-1.174c8.866 12.225 23.528 20.215 40.115 20.215 3.041 0 6.018-.269 8.906-.783 1.675 7.287 2.007 14.011 1.594 23.782h49c-.359-9.741-.486-17.161-.085-24.451a42.76 42.76 0 0011.085 1.452c14.294 0 26.9-7.006 34.364-17.668 6.059-3.498 13.291-2.284 19.597-1.225 2.746.461 5.317.893 7.539.893 18.778 0 34-14.551 34-32.5 0-8.333-3.281-15.934-8.675-21.686-4.31 5.012-10.697 8.186-17.825 8.186-12.979 0-23.5-10.522-23.5-23.5 0-12.98-30.137-31.5-45-31.5-5.31 0-10.313.325-14.617.604-3.249.21-6.099.396-8.383.396zM234.307 82.5c1.181 3.012-2.694 4.293-4.517 1.62l-.021-.03-.032-.047-.031-.043c-7.483-10.536-20.012-17.444-34.206-17.444a42.498 42.498 0 00-16.163 3.166c-6.41 2.63-14.55 1.24-19.499-3.61-8.882-8.704-21.21-14.096-34.838-14.096-17.152 0-32.245 8.542-41 21.478-1.966 2.365-5.65 1.323-4.535-1.543.06-.155.12-.305.182-.451C86.968 54.2 104.516 42.016 125 42.016c13.628 0 25.956 5.392 34.838 14.097 4.949 4.85 13.089 6.24 19.499 3.609a42.498 42.498 0 0116.163-3.166c17.73 0 32.863 10.778 38.807 25.944z"
      />
      <path d="M83 20.516a9.5 9.5 0 11-19 0 9.5 9.5 0 0119 0zM264.5 65.016c8.56 0 15.5-6.94 15.5-15.5 0-8.56-6.94-15.5-15.5-15.5-8.56 0-15.5 6.94-15.5 15.5 0 8.56 6.94 15.5 15.5 15.5zM55 124.016c8.837 0 16-7.164 16-16 0-8.837-7.163-16-16-16s-16 7.163-16 16c0 8.836 7.163 16 16 16z" />
    </svg>
  ),
);

export default LogoHighContrast;
