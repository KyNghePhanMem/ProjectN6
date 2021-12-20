import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import { store } from "@/store";
import vuetify from "@/plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import "@/styles/main.scss";
import SVGIcon from "@/components/SvgIcon.vue";

loadFonts();

const app = createApp(App);
// app.use(store);
app.use(router);
app.use(vuetify);
app.component("svg-icon", SVGIcon);
app.mount("#app");
