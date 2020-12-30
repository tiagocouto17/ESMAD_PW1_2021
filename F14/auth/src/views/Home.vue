<template>
    <div id="home">
        <h1>Authenticated area</h1>
        <h2>Username: {{getUser}}</h2>
    </div>
</template>

<script>
export default {
    name:'Home',
    computed: {
        getUser() {
            return this.$store.getters.getLoggedUser.username
        }
    }
}
</script>

<style>

</style>