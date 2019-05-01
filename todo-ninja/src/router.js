import Vue from "vue";
import Router from "vue-router";
import Dashboard from "./views/Dashboard.vue";
import Team from "./views/Team.vue";
import Projects from "./views/Projects.vue";
import Buttons from "./views/Buttons.vue";
import Breakpoints from "./views/Breakpoints.vue";
import Playground from "./views/Playground.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Dashboard
    },
    {
      path: "/playground",
      name: "playground",
      component: Playground
    },
    {
      path: "/projects",
      name: "projects",
      component: Projects
    },
    {
      path: "/team",
      name: "team",
      component: Team
    },
    {
      path: "/buttons",
      name: "buttons",
      component: Buttons
    },
    {
      path: "/breakpoints",
      name: "breakpoints",
      component: Breakpoints
    },
    {
      path: "/displays",
      name: "displays",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Displays.vue")
    }
  ]
});
