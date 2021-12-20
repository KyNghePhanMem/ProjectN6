<template>
  <v-container fluid class="fill-height flex-column justify-center white">
    <LottiePlayer :animationData="jsonData" loop class="mb-20px"></LottiePlayer>
    <h1 style="font-size: 40px; line-height: 1" class="mb-20px mt-40px">
      Oops, something went wrong
    </h1>
    <p class="mb-50px" style="line-height: 1; font-size: 20px">
      Server Error 500. We apologise and are fixing the problem. Please try
      again at later stage.
    </p>
    <v-btn
      color="warning"
      large
      width="180"
      depressed
      class="font-weight-bold font-size-large mb-70px"
      to="/"
      >GO HOME</v-btn
    >
  </v-container>
</template>

<script lang="ts">
import LottiePlayer from "../../components/_lottie-player.vue";
import jsonData from "../../assets/lottieData/error/500.json";
export default {
  components: {
    LottiePlayer,
  },
  data() {
    return {
      jsonData,
    };
  },
};
</script>