<template>
  <node-view-wrapper>
    <div
      contenteditable="false"
      @click="toggle"
      class="spoiler tw-select-none tw-cursor-pointer tw-transition-all tw-items-center tw-flex tw-justify-between tw-bg-white tw-px-6 tw-py-5 tw-font-semibold">
    <span class="tw-leading-relaxed tw-flex-grow">
      Cпойлер
    </span>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M19 9L12 16L5 9"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"/>
      </svg>
    </div>
    <div
      v-show="open"
      class="tw-bg-gray-50 tw-overflow-hidden">
      <node-view-content class="tw-p-4"></node-view-content>
    </div>
  </node-view-wrapper>
</template>

<script>
import { NodeViewWrapper, nodeViewProps, NodeViewContent } from '@tiptap/vue-2';

export default {
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
  watch: {
    open(newValue) {
      this.updateAttributes({
        open: newValue,
      });
    },
  },
  methods: {
    toggle() {
      this.open = !this.open;
    }
  }
};
</script>

<style scoped>

</style>
