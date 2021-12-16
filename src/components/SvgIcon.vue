<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    role="img"
    aria-hidden="true"
    class="csp-icon__svg"
    :class="contentClass"
    :style="style"
  >
    <path :d="path" />
  </svg>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "SvgIcon",
  props: {
    path: {
      type: String,
      default: "",
    },
    transform: {
      type: String,
      default: "",
    },
    overflow: {
      type: String,
      default: "hidden",
    },
    width: {
      type: String,
      default: "16px",
    },
    height: {
      type: String,
      default: "16px",
    },
    contentClass: {
      type: String,
      default: "text-neutrals",
    },
  },
  setup(props) {
    const style = computed(() => {
      return {
        overflow: props.overflow,
        width: props.width,
        height: props.height,
      };
    });

    return { style };
  },
});
</script>
<style>
.csp-icon__svg {
  width: 24px;
  height: 24px;
}
/*.csp-icon__svg path {
  fill: currentColor;
}*/
</style>
