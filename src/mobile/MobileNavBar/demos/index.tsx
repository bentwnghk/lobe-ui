/**
 * iframe: true
 */
import { ActionIcon, Tag } from '@bentwnghk/ui';
import { MobileNavBar, MobileNavBarTitle } from '@bentwnghk/ui/mobile';
import { MessageCircle } from 'lucide-react';

export default () => {
  return (
    <>
      <MobileNavBar
        center={<MobileNavBarTitle desc={'desc'} title={'Title'} />}
        left={<ActionIcon icon={MessageCircle} />}
        right={
          <>
            <ActionIcon icon={MessageCircle} />
            <ActionIcon icon={MessageCircle} />
          </>
        }
      />
      <MobileNavBar
        center={
          <MobileNavBarTitle desc={'desc'} tag={<Tag size={'small'}>gpt</Tag>} title={'Title'} />
        }
      />{' '}
      <MobileNavBar
        center={<MobileNavBarTitle tag={<Tag size={'small'}>gpt</Tag>} title={'Title'} />}
      />
      <MobileNavBar center={<MobileNavBarTitle title={'Title'} />} showBackButton />
    </>
  );
};
