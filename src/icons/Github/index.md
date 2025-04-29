---
nav: Components
group: Auth Icons
title: Github
apiHeader:
  pkg: '@bentwnghk/ui/icons'
  docUrl: 'https://github.com/lobehub/lobe-ui/tree/master/src/icons/Github/index.md'
  sourceUrl: 'https://github.com/lobehub/lobe-icons/tree/master/src/Github/index.ts'
---

## Icons

```tsx
import { Github } from '@bentwnghk/ui/icons';
import { Flexbox } from 'react-layout-kit';

export default () => <Github size={64} />;
```

## Avatars

```tsx
import { Github } from '@bentwnghk/ui/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Github.Avatar size={64} />
    <Github.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```
