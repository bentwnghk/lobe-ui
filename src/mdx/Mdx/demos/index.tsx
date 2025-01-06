import { Mdx, MdxProps } from '@bentwnghk/ui/mdx';
import { StoryBook, useControls, useCreateStore } from '@bentwnghk/ui/storybook';

import { content } from './data';

export default () => {
  const store = useCreateStore();
  const options: MdxProps | any = useControls(
    {
      children: {
        rows: true,
        value: content,
      },
      // fontSize: 16,
      // fullFeaturedCodeBlock: true,
      // headerMultiple: 1,
      // lineHeight: 1.8,
      // marginMultiple: 1.5,
    },
    { store },
  );

  return (
    <StoryBook levaStore={store}>
      <Mdx {...options} />
    </StoryBook>
  );
};
