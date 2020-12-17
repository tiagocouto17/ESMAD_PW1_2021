import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AddGame from "../views/AddGame";
import ListGames from "../views/ListGames";
import Game from "../views/Game";



Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/add",
    name: "AddGame",
    component: AddGame
  },
  {
    path: "/list",
    name: "ListGames",
    component: ListGames
  },
  {
    path: "/games/:gameId",
    name: "Game",
    component: Game
  }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
