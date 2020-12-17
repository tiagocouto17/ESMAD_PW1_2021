<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar,
  },
  data() {
    return {
      games: [],
    };
  },
  created() {
    if (!localStorage.games) {
      this.games.push({
        id: 1,
        name: "Rick Dangerous",
        genre: "plataforma",
        year: "1990",
        description: "great game",
        cover: "https://classicreload.com/sites/default/files/rickd2.jpg",
        likes: 5,
      });
      this.games.push({
        id: 2,
        name: "Golden Axe",
        genre: "Aventura",
        year: "1995",
        description: "great game",
        cover: "https://i.ytimg.com/vi/ISZ5N1i7lA0/maxresdefault.jpg",
        likes: 2,
      });
      this.games.push({
        id: 3,
        name: "Goblins",
        genre: "Aventura",
        year: "1997",
        description: "addictive game",
        cover: "https://www.retrogames.cz/games/515/DOS_02.gif",
        likes: 2,
      });
      this.games.push({
        id: 4,
        name: "Blue Brothers 2",
        genre: "Plataformas",
        year: "1997",
        description: "Lost of humour",
        cover: "https://i.ytimg.com/vi/HAWx_aY1e6I/maxresdefault.jpg",
        likes: 2,
      });

      localStorage.games = JSON.stringify(this.games);
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
