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
      <path d="M12.04 17.99c-3.312-.001-6.044-2.719-6.02-6.025.025-3.47 2.905-6.036 6.073-6.003 3.13.032 5.968 2.485 5.977 6.02.009 3.409-2.727 6.002-6.03 6.008zm1.567-8.38c.002-.767-.447-1.372-1.153-1.555a1.572 1.572 0 00-1.766.745c-.365.647-.268 1.384.311 1.9.284.252.308.491.22.828-.264 1.013-.501 2.034-.752 3.052-.092.376.008.697.299.944.609.515 1.718.565 2.377.118.472-.321.591-.579.464-1.132-.242-1.056-.498-2.11-.762-3.161-.06-.237-.037-.395.172-.56.375-.292.615-.675.59-1.179z" />
      <path d="M11.995 20.95c-4.258.137-8.345-3.09-8.918-7.86C2.703 9.98 3.654 7.307 6 5.198c.538-.485 1.192-.85 1.82-1.224.488-.29.899-.165 1.15.265.259.444.134.847-.348 1.169-.449.3-.92.577-1.333.923-1.53 1.283-2.384 2.938-2.567 4.923-.167 1.815.234 3.506 1.32 4.978 1.42 1.926 3.35 2.961 5.753 3.05 2.141.081 3.982-.679 5.459-2.198.6-.618 1.017-1.42 1.488-2.156.262-.41.613-.617 1.01-.496.503.153.766.599.521 1.11-.34.711-.71 1.432-1.198 2.045-1.565 1.971-3.651 3.046-6.14 3.356a.858.858 0 01-.108.007h-.832z" />
      <path d="M0 12.325C.04 9.042.96 6.549 2.744 4.38 4.546 2.19 6.851.806 9.637.27c.57-.11 1.175-.056 1.763-.054.31.001.471.207.526.5.06.33-.091.748-.378.869a3.297 3.297 0 01-.834.2c-1.945.258-3.703.966-5.214 2.22-2.138 1.773-3.437 4.026-3.746 6.81-.3 2.72.41 5.173 2.018 7.372.248.34.549.638.808.97.379.486.352.863-.064 1.235-.35.313-.78.272-1.177-.133a11.342 11.342 0 01-3.02-5.576C.114 13.76.061 12.805 0 12.325z" />
      <path d="M13.268 23.77c-.12 0-.241.006-.362-.002-.452-.031-.758-.296-.802-.687-.047-.422.221-.788.679-.889.317-.07.641-.102.961-.16 3.216-.58 5.648-2.272 7.27-5.12a9.973 9.973 0 001.317-4.754 9.52 9.52 0 00-.65-3.748c-.074-.188-.114-.432-.062-.62.099-.35.337-.611.74-.642.375-.03.697.141.84.554.23.67.453 1.35.582 2.045.469 2.509.193 4.941-.907 7.255-.894 1.883-2.186 3.447-3.893 4.658-1.518 1.077-3.187 1.784-5.032 2.062-.226.034-.454.047-.68.07l-.001-.023z" />
      <path d="M20.84 10.15c0 .494-.248.806-.674.882-.41.074-.752-.143-.915-.585-.216-.585-.388-1.192-.651-1.755-.694-1.48-1.812-2.557-3.27-3.287-.119-.059-.24-.115-.354-.18-.442-.248-.61-.709-.42-1.131.198-.441.632-.643 1.116-.403.653.324 1.307.677 1.886 1.117 1.625 1.235 2.67 2.877 3.203 4.845.028.105.05.212.068.318.01.07.009.143.01.179z" />
    </svg>
  );
});

export default Icon;
