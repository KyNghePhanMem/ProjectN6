<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter, useRoute } from "vue-router";
export default defineComponent({
  setup() {
    const router = useRouter();
    const route = useRoute();
    router.afterEach(() => {
      document.title = `${route.meta.title || "Home"} - IT Support MGI`;
    });
    return {};
  },
  components: {},
});
</script>
