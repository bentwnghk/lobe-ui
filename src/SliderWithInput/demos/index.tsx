import { SliderWithInput } from '@bentwnghk/ui';
import { useState } from 'react';

export default () => {
  const [value, setValue] = useState(0);
  return <SliderWithInput onChange={setValue} style={{ width: 300 }} value={value} />;
};
