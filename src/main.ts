import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueGoogleMaps from '@fawmi/vue-google-maps';

// import "./assets/main.css";

const app = createApp(App);

app.use(router);

app.use(VueGoogleMaps, {
    load: {
        key: "AIzaSyACi2Bwp6wQTktwsSD2kD8nOGK4knD8Amg"
    }
}).mount("#app");
