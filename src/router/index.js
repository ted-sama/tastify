import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/callback",
      name: "callback",
      component: () => import("../views/CallbackView.vue"),
    },
    {
      path: "/topartists",
      name: "topartists",
      component: () => import("../views/TopArtistsView.vue"),
      meta: {
        title: "Top Artists",
      },
    },
    {
      path: "/toptracks",
      name: "toptracks",
      component: () => import("../views/TopTracksView.vue"),
      meta: {
        title: "Top Tracks",
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.title) {
    document.title = `${to.meta.title} - Tastify!`;
  } else {
    document.title = "Tastify!";
  }
  next();
});

export default router;
