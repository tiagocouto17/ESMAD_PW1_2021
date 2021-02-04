<template>
  <div id="login">
      <form @submit.prevent="login">
          Username: <input type="text" id="txtUsername" v-model='username'><br>
          Password: <input type="password" id="txtPassword" v-model='password'><br>
          <input type="submit" value="LOGIN">
      </form>
  </div>
</template>

<script>
export default {
    name:'Login',
    data() {
        return {
            username:'',
            password:''
        }
    },
    methods: {
        login() {
            try {
                // Chamar a ação login que está na Store
                //this.$store.dispatch('login',{username: this.username, password: this.password})
                this.$store.dispatch('login',this.$data)
                // Saltar para a view Home
                this.$router.push({name:'Home'})

            } catch (error) {
                alert(error)
            }
        }
    }
}
</script>

<style>

</style>