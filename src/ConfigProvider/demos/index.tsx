import { ConfigProvider } from '@bentwnghk/ui';
import { LobeHub } from '@bentwnghk/ui/brand';

export default () => {
  return (
    <ConfigProvider config={{ proxy: 'unpkg' }}>
      <LobeHub />
    </ConfigProvider>
  );
};
