import { Node, mergeAttributes } from '@tiptap/core';
import { VueNodeViewRenderer } from '@tiptap/vue-2';
import Component from '@/components/Editor/extensions/Spoiler2/SpoilerComponent';

export default Node.create({
  name: 'spoiler',
  content: 'block*',
  group: 'block',
  defining: true,

  addAttributes() {
    return {
      open: {
        default: false,
      }
    };
  },
  parseHTML() {
    return [
      { tag: 'spoiler' },
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ['spoiler', mergeAttributes(HTMLAttributes)];
  },
  addNodeView() {
    return VueNodeViewRenderer(Component);
  },
  addCommands() {
    return {
      toggleSpoiler: () => ({ commands }) => commands.wrapIn('spoiler'),
    };
  }
});
