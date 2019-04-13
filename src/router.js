import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";
import Vote from "./components/Vote.vue";
import Score from "./components/Score.vue";
import Settings from "./components/Settings.vue";
import isAdmin from './guard.guard';

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/vote",
      name: "vote",
      component: Vote,
      beforeEnter: isAdmin
    },
    {
      path: "/score",
      name: "score",
      component: Score,

    },
    {
      path: "/settings",
      name: "settings",
      component: Settings
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});