import Vue from "vue";
import Router from "vue-router";
import Preloader from "./pages/Preloader.vue";
import Main from "./pages/Main.vue";
import Detail from "./pages/Detail.vue";
import MyList from "./pages/MyList.vue";
import Login from "./pages/Login.vue";
import Profile from "./pages/Profile.vue"

import authGuard from "./auth/authGuard"

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/", name: "Preloader", component: Preloader },
    { path: "/Main", name: "Main", component: Main },
    { path: "/Main/Detail/:id", name: "Detail", component: Detail, beforeEnter: authGuard },
    { path: "/MyList", name: "MyList", component: MyList, beforeEnter: authGuard },
    { path: "/Login", name: "Login", component: Login },
    { path: "/Profile", name: "Profile", component: Profile, beforeEnter: authGuard },
  ]
});
