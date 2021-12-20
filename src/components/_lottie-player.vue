<template>
  <div :style="{ width: width, height: height }"></div>
</template>

<script>
import lottie from 'lottie-web';
export default {
  props: {
    loop: {
      default: false,
    },
    path: {
      default: '',
    },
    autoplay: {
      default: true,
    },
    animationData: {
      type: Object,
    },
    renderer: {
      default: 'svg',
    },
    rendererSettings: {
      type: Object,
      default: () => ({
        progressiveLoad: false,
      }),
    },
    width: {
      type: String,
      default: '',
    },
    height: {
      type: String,
      default: '',
    },
    nameEmoji: {
      type: String,
      default: '',
    },
    isHover: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      animationItem: {},
    };
  },
  mounted() {
    const config = {
      path: this.path,
      container: this.$el,
      loop: this.loop,
      autoplay: this.autoplay,
      animationData: this.animationData,
      rendererSettings: this.rendererSettings,
      renderer: this.renderer,
    };
    this.animationItem = lottie.loadAnimation(config);
    this.animationItem.addEventListener('DOMLoaded', (e) => {
      this.$emit('DOMLoaded', e);
    });
    this.animationItem.addEventListener('complete', (e) => {
      this.$emit('complete', e);
    });
    this.animationItem.addEventListener('loopComplete', (e) => {
      this.$emit('loopComplete', e);
    });
    this.animationItem.addEventListener('enterFrame', (e) => {
      this.$emit('enterFrame', e);
    });
    this.animationItem.addEventListener('segmentStart', (e) => {
      this.$emit('segmentStart', e);
    });
    this.animationItem.addEventListener('destroy', (e) => {
      this.$emit('destroy', e);
    });
    this.animationItem.addEventListener('data_ready', (e) => {
      this.$emit('data_ready', e);
    });
    this.animationItem.addEventListener('error', (e) => {
      this.$emit('error', e);
    });
    this.animationItem.addEventListener('data_failed', (e) => {
      this.$emit('data_failed', e);
    });
    this.animationItem.addEventListener('loaded_images', (e) => {
      this.$emit('loaded_images', e);
    });
    this.$el.addEventListener('mouseenter', () => {
      if (this.isHover) {
        this.animationItem.loop = true;
        this.animationItem.play();
      }
    });
    this.$el.addEventListener('mouseleave', () => {
      if (this.isHover) {
        this.animationItem.loop = false;
        this.animationItem.play();
      }
    });
  },
  beforeDestroy() {
    this.animationItem.destroy();
    this.$el.removeEventListener('mouseenter', null);
    this.$el.removeEventListener('mouseleave', null);
  },
};
</script>

<style></style>
