<template>
  <div id="app">
    <button @click="dec()">-</button>
    <span>{{count}}</span>
    <button @click="inc()">+</button>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    dec() {
      this.$store.dispatch("decrement");
    },
    inc() {
      this.$store.dispatch("increment");
    },
  },
  computed: {
    count() {
      return this.$store.getters.getCurrentCount;
    },
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
  margin-top: 60px;
}
</style>
