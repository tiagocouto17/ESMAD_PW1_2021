import Vue from "vue";
import VueRouter from "vue-router";
import ListTasks from "../views/ListTasks.vue";
import CreateTask from "../views/CreateTask.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "ListTasks",
    component: ListTasks
  },
  {
    path: "/create",
    name: "CreateTask",
    component: CreateTask
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
