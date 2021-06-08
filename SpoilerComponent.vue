<template>
  <node-view-wrapper>
    <button @click="toggle">Spoiler</button>
    <div
      v-show="open">
      <node-view-content class="tw-p-4"></node-view-content>
    </div>
  </node-view-wrapper>
</template>

<script>
import { NodeViewWrapper, nodeViewProps, NodeViewContent } from '@tiptap/vue-2';

export default {
  name: 'Spoiler',
  props: nodeViewProps,
  components: {
    NodeViewWrapper,
    NodeViewContent,
  },
  data() {
    return {
      open: false,
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    }
  }
};
</script>
