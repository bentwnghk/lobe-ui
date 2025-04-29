import { Icon } from '@bentwnghk/ui';
import { TabBar, type TabBarItemType } from '@bentwnghk/ui/mobile';
import { MessageCircle } from 'lucide-react';

const items: TabBarItemType[] = [
  {
    icon: <Icon icon={MessageCircle} />,
    key: 'tab1',
    title: 'Tab1',
  },
  {
    icon: <Icon icon={MessageCircle} />,
    key: 'tab2',
    title: 'Tab2',
  },
  {
    icon: <Icon icon={MessageCircle} />,
    key: 'tab3',
    title: 'Tab3',
  },
];

export default () => {
  return <TabBar items={items} style={{ width: '100%' }} />;
};
