<template>
  <b-container>
    <p></p>
    <b-card bg-variant="light">
      <b-form @submit.prevent="onSubmit">
        <!--Nome do jogo-->
        <b-form-group
          label="Nome do jogo:"
          label-align-sm="left"
          label-for="nested-street"
        >
          <b-form-input
            id="nested-street"
            v-model="form.name"
            required
          ></b-form-input>
        </b-form-group>

        <!--Género do jogo-->
        <b-form-group
          id="input-group-3"
          label-align="left"
          label="Género do jogo:"
          label-for="input-3"
        >
          <b-form-select
            id="input-3"
            v-model="form.genre"
            :options="genres"
            required
          ></b-form-select>
        </b-form-group>

        <!--Ano do jogo-->
        <b-form-group
          label="Ano do jogo:"
          label-align-sm="left"
          label-for="txtYear"
        >
          <b-form-input
            id="txtYear"
            type="number"
            v-model="form.year"
          ></b-form-input>
        </b-form-group>

        <!--Descrição do jogo-->
        <b-form-group
          label="Descrição do jogo:"
          label-align-sm="left"
          label-for="txtYear"
        >
          <b-form-textarea
            id="textarea"
            v-model="form.description"
            placeholder="Descreva um pouco o jogo..."
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </b-form-group>

        <!--Foto da capa do jogo-->
        <b-form-group
          label="Capa do jogo:"
          label-align-sm="left"
          label-for="txtCover"
        >
          <b-form-input
            id="txtCover"
            type="url"
            v-model="form.cover"
          ></b-form-input>
        </b-form-group>

        <!--Foto da capa do jogo-->
        <b-form-group
          label="Nº de gostos:"
          label-align-sm="left"
          label-for="txtLikes"
        >
          <b-form-input
            id="txtLikes"
            type="number"
            v-model="form.likes"
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary" class="m-2"
          >Adicionar</b-button
        >
        <b-button type="reset" variant="danger">Repor</b-button>
      </b-form>
    </b-card>
  </b-container>
</template>

<script>
export default {
  name: "AddGame",
  data() {
    return {
      form: {
        name: "",
        genre: "",
        year: "",
        description: "",
        cover: "",
        likes: 0,
      },
      genres: [
        { text: "Selecione um género", value: "" },
        "Ação",
        "Aventura",
        "Estratégia",
        "RPG",
        "Desportos",
        "Simulação",
        "Outro género",
      ],
      games: JSON.parse(localStorage.games)
    };
  },
  methods: {
    onSubmit() {
      this.games.push(this.form);
      localStorage.games = JSON.stringify(this.games);
    },
  },
};
</script>

<style>
</style>