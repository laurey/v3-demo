import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menuData: [
      {
        id: 1,
        name: "home",
        title: "Home",
        path: "/"
      },
      {
        id: 2,
        name: "post",
        title: "Post",
        path: "/post",
        children: [
          {
            id: 21,
            name: "post-1",
            title: "Post01",
            path: "/post/1"
          },
          {
            id: 22,
            name: "post-2",
            title: "Post02",
            path: "/post/2"
          }
        ]
      },
      {
        id: 3,
        name: "about",
        title: "About",
        path: "/about"
      },
      {
        id: 4,
        name: "photo",
        title: "Photo",
        path: "/photo"
      },
      {
        id: 5,
        name: "login",
        title: "Login",
        path: "/login"
      }
    ],
    posts: [
      {
        id: 1,
        title: "post-1-title",
        content: "The content of post 1st"
      },
      {
        id: 2,
        title: "2nd-post-title",
        content: "The content of post 2"
      },
      {
        id: 3,
        title: "3rd-post-title",
        content: "I'm content of post 3"
      }
    ]
  },
  mutations: {},
  actions: {}
});
