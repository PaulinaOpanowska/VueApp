import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Vote from "./views/Vote.vue";
import Score from "./views/Score.vue";
import Settings from "./views/Settings.vue";
import isAdmin from "./guard.guard";

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
      component: Score
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
