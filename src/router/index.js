import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import PostsIndex from "../views/PostsIndex.vue";
import SignupView from "../views/SignupView.vue";
import LoginView from "../views/LoginView.vue";
import PostsNew from "../views/PostsNew.vue";
import PostShow from "../views/PostShow.vue";
import PostsEdit from "../views/PostsEdit.vue";
import LogoutView from "../views/LogoutView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/posts",
    name: "posts",
    component: PostsIndex,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/posts/new",
    name: "posts-new",
    component: PostsNew,
  },
  {
    path: "/posts/:id",
    name: "posts-show",
    component: PostShow,
  },
  {
    path: "/posts/:id/edit",
    name: "/posts-edit",
    component: PostsEdit,
  },
  {
    path: "/logout",
    name: "/logout",
    component: LogoutView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
