import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [
          { username: "1", password: "1", location: "1" },
          { username: "2", password: "2", location: "2" },
          { username: "3", password: "3", location: "3" },
        ],
    loggedUser: localStorage.getItem("loggedUser")
      ? JSON.parse(localStorage.getItem("loggedUser"))
      : "",
  },
  getters: {
    getLoggedUser: (state) => state.loggedUser,
    isLoggedUser: (state) => (state.loggedUser == "" ? false : true),
  },
  actions: {
    login(context, payload) {
      // verificar se este user já existe
      const user = context.state.users.find(
        (user) =>
          user.username === payload.username &&
          user.password === payload.password
      );
      if (user != undefined) {
        // login com sucesso
        context.commit("LOGIN", user);
        localStorage.setItem("loggedUser", JSON.stringify(user));
      } else {
        // login sem sucesso
        throw Error("Login inválido!");
      }
    },
    logout(context) {
      context.commit("LOGOUT");
      localStorage.removeItem("loggedUser");
    },
    register(context, payload) {
      // verificar se este user já existe
      const user = context.state.users.find(
        (user) => user.username === payload.username
      );
      if (user == undefined) {
        // login com sucesso
        context.commit("REGISTER", payload);
        localStorage.setItem('users', JSON.stringify(context.state.users))
      } else {
        // login sem sucesso
        throw Error("Username já existente!");
      }
    },
  },
  mutations: {
    LOGIN(state, user) {
      state.loggedUser = user;
    },
    LOGOUT(state) {
      state.loggedUser = "";
    },
    REGISTER(state, user) {
      state.users.push(user);
    },
  },
});
