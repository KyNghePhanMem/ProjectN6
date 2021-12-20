<template>
  <v-card
    flat
    height="100%"
    style="background-position-y: bottom; overflow: hidden auto"
    class="white d-flex justify-center align-center"
  >
    <div class="text-center" style="margin-top: -200px">
      <p class="mb-0 text-uppercase" style="font-size: 26px">
        <strong>
          HELLO
          <span class="warning--text"> {{ displayName }}</span>
          <span>!</span>
        </strong>
      </p>
      <h1 style="font-size: 50px; line-height: 60px" class="text-uppercase">
        Welcome Back To IT-Support app
      </h1>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: {
  },
  setup() {

  },
  computed: {
    displayName() {
      return "[UserName]"; 
    },
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