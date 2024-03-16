import { Typography } from '@bentwnghk/ui';
import { FileTree } from '@bentwnghk/ui/mdx';

export default () => (
  <Typography>
    <FileTree>
      <FileTree.Folder defaultOpen name="pages">
        <FileTree.File name="_meta.json" />
        <FileTree.File name="contact.md" />
        <FileTree.File name="index.mdx" />
        <FileTree.Folder name="about">
          <FileTree.File name="_meta.json" />
          <FileTree.File name="legal.md" />
          <FileTree.File name="index.mdx" />
        </FileTree.Folder>
      </FileTree.Folder>
    </FileTree>
  </Typography>
);
