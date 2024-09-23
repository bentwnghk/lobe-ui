import { Typography } from '@bentwnghk/ui';
import { Tab, Tabs } from '@bentwnghk/ui/mdx';

export default () => (
  <Typography>
    <Tabs items={['pnpm', 'npm', 'yarn']}>
      <Tab>pnpm: Fast, disk space efficient package manager.</Tab>
      <Tab>npm is a package manager for the JavaScript programming language.</Tab>
      <Tab>Yarn is a software packaging system.</Tab>
    </Tabs>
  </Typography>
);
