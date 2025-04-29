import { EditableText } from '@bentwnghk/ui';
import { useState } from 'react';

export default () => {
  const [value, setValue] = useState('editable text');

  return (
    <EditableText
      onChange={(v) => {
        console.log('changed', v);
        setValue(v);
      }}
      value={value}
    />
  );
};
