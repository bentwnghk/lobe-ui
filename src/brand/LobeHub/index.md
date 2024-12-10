---
nav: Brand
group: Combine
title: LobeHub
apiHeader:
  pkg: '@bentwnghk/ui/brand'
  docUrl: 'https://github.com/bentwnghk/lobe-ui/tree/master/src/brand/LobeHub/index.md'
  sourceUrl: 'https://github.com/bentwnghk/lobe-ui/tree/master/src/brand/LobeHub/index.tsx'
---

## Example

```tsx
import { LobeHub } from '@bentwnghk/ui/brand';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <LobeHub size={64} />
    <LobeHub size={64} type={'mono'} />
    <LobeHub size={64} type={'flat'} />
    <LobeHub size={64} type={'text'} />
    <LobeHub size={64} type={'combine'} />
    <LobeHub size={64} extra={'Discover'} />
    <LobeHub size={64} type={'combine'} extra={'Discover'} />
  </Flexbox>
);
```
