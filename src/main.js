import Vue from "vue";
import App from "./App.vue";


import "vue-awesome/icons/flag";
import "vue-awesome/icons";
import router from "./router";
import VueYoutube from "vue-youtube";
import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/index.css";

// auth code

// import 'bulma/css/bulma.css';
Vue.config.productionTip = false

// Import the Auth0 configuration
import { domain, clientId } from "../auth_config.json";

// Import the plugin here
import { Auth0Plugin } from "./auth";

Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});

// /authcode

Vue.use(VueToast);
Vue.use(VueYoutube);

import Vuex from "vuex";
Vue.use(Vuex);

import store from "./store";

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
