---
nav: Brand
group: Combine
title: LobeChat
apiHeader:
  pkg: '@bentwnghk/ui/brand'
  docUrl: 'https://github.com/bentwnghk/lobe-ui/tree/master/src/brand/LobeChat/index.md'
  sourceUrl: 'https://github.com/bentwnghk/lobe-ui/tree/master/src/brand/LobeChat/index.tsx'
---

## Example

```tsx
import { LobeChat } from '@bentwnghk/ui/brand';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <LobeChat size={64} />
    <LobeChat size={64} type={'mono'} />
    <LobeChat size={64} type={'flat'} />
    <LobeChat size={64} type={'text'} />
    <LobeChat size={64} type={'combine'} />
    <LobeChat size={64} extra={'Discover'} />
    <LobeChat size={64} type={'combine'} extra={'Discover'} />
  </Flexbox>
);
```
