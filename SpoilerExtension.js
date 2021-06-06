import { Node, mergeAttributes } from '@tiptap/core';
import { VueNodeViewRenderer } from '@tiptap/vue-2';
import Component from '@/components/Editor/extensions/Spoiler/SpoilerComponent';

export default Node.create({
  name: 'editor-spoiler',
  group: 'block',
  content: 'block+',

  addAttributes() {
    return {
      open: {
        default: false,
      }
    };
  },
  parseHTML() {
    return [
      { tag: 'editor-spoiler' },
    ];
  },
  renderHTML({ HTMLAttributes: attributes }) {
    return ['editor-spoiler', mergeAttributes(attributes)];
  },
  addNodeView() {
    return VueNodeViewRenderer(Component);
  },
  addCommands() {
    return {
      toggleSpoiler: () => ({ commands }) => commands.wrapIn('editor-spoiler'),
    };
  }
});
