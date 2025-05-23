import type { ActionIconGroupProps } from '@bentwnghk/ui';
import type { MetaData } from '@bentwnghk/ui/chat';
import { Copy, Edit, RotateCw, Trash } from 'lucide-react';

export const avatar: MetaData = {
  avatar: '😎',
  backgroundColor: '#E8DA5A',
  title: 'Advertiser',
};

export const items: ActionIconGroupProps['items'] = [
  {
    icon: Edit,
    key: 'edit',
    label: 'Edit',
  },
];

export const dropdownMenu: ActionIconGroupProps['menu'] = {
  items: [
    {
      icon: Copy,
      key: 'copy',
      label: 'Copy',
    },
    {
      icon: RotateCw,
      key: 'regenerate',
      label: 'Regenerate',
    },
    {
      type: 'divider',
    },
    {
      icon: Trash,
      key: 'delete',
      label: 'Delete',
    },
  ],
};
