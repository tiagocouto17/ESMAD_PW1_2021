<template>
  <div id="app">
    <label for="txtBreed"></label>
    <input type="text" id="txtBreed" v-model="breed" />
    <button @click="getPhotoByBreed">GET PHOTO</button>
    <p v-if="dog.status == 'success'">
      <img :src="dog.message" alt="Dog" />
    </p>
    <p v-else>Raça inexistente ou sem fotos!</p>
  </div>
</template>

<script>
export default {
  name: "Breed",
  data() {
    return {
      dog: "",
      breed: "",
    };
  },
  methods: {
    async getPhotoByBreed() {
      const response = await fetch(
        `https://dog.ceo/api/breed/${this.breed}/images/random`
      );
      this.dog = await response.json();
    },
  },
};
</script>

<style>
</style>