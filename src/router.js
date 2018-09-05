import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Photo from "./views/Photo.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/photo",
      name: "photo",
      component: Photo
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/post/:id?",
      name: "post",
      component: () => import("./views/Post"),
      children: [
        {
          path: "comment",
          name: "PostComment",
          component: () => import("./views/Comment")
        }
      ]
    }
  ]
});
