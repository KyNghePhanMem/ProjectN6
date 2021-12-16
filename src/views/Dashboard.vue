<template>
  <svg-icon
    overflow="unset"
    content-class="icon-home"
    width="45px"
    height="45px"
    style="enable-background: new 0 0 24 24"
    :path="icons.iconHome"
  />  
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { iconHome, iconTicket, iconAdmin } from "@/plugins/icons";

export default defineComponent({
  // components: {
  //   HelloWorld,
  // },
  setup() {
    return {
      icons: {
        iconHome,
        iconTicket,
        iconAdmin,
      },
      translate: "", //translate(-80.758 -280.158)
    };
  },
});
</script>
<style lang="scss">
.icon-home {
  fill: #208dec;
}
.icon-ticket {
  fill: #293b49;
}
.icon-admin {
  fill: #293b49;
}
</style>