import { memo } from 'react';

import { SvgProps } from '@/types';

const LogoText = memo<SvgProps | any>(({ ...rest }) => (
  <svg
    fill="currentColor"
    fillRule="evenodd"
    viewBox="0 0 940 320"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path d="M4.79 82.91L4.79 12.89L14.75 12.89L24.95 70.36L35.16 12.89L45.17 12.89L45.17 82.91L38.38 82.91L38.38 28.56L28.66 82.91L21.29 82.91L11.96 28.56L11.96 82.91L4.79 82.91ZM64.60 35.40L72.22 35.40L72.22 45.41Q80.86 36.28 90.72 33.50L90.72 33.50L90.72 42.19Q79.39 44.92 72.22 54.49L72.22 54.49L72.22 82.91L64.60 82.91L64.60 35.40ZM109.18 88.38L109.18 75L122.56 75L122.56 88.38L109.18 88.38ZM205.81 82.91L205.81 12.89L216.11 12.89L236.38 69.29L236.38 12.89L243.99 12.89L243.99 82.91L234.57 82.91L213.82 25.29L213.82 82.91L205.81 82.91ZM295.31 82.91L288.92 82.91L288.92 73.49Q283.35 84.91 274.07 84.91L274.07 84.91Q265.04 84.91 259.77 75.59L259.77 75.59Q254.59 66.26 254.59 48.00L254.59 48.00Q254.59 30.86 260.01 20.80L260.01 20.80Q265.38 10.89 275.39 10.89L275.39 10.89Q291.46 10.89 294.63 32.91L294.63 32.91L286.43 32.91Q284.18 18.41 275.39 18.41L275.39 18.41Q263.18 18.41 263.18 47.80L263.18 47.80Q263.18 77.39 275 77.39L275 77.39Q285.74 77.39 288.04 56.79L288.04 56.79L277.49 56.79L277.49 49.61L295.31 49.61L295.31 82.91Z" />
  </svg>
));

export default LogoText;
