<template>
  <div id="app">
    <div class="card-deck">
    <City v-for='myCity in cities' :key='myCity.name' :city='myCity'></City>
      </div>
  </div>
</template>

<script>
import City from './components/City.vue'

export default {
  name: 'App',
  components: {
    City
  },
  data() {
    return {
      cities:[]
    }
  },

  created() {
    this.cities.push({name:'Paris', photo:'https://veja.abril.com.br/wp-content/uploads/2016/05/alx_lista-capitais-europa-mundo-20100806-002_original3.jpeg'})
    this.cities.push({name:'Londres', photo:'https://static.rentcars.com/imagens/modules/localidade/about/3184-desktop-location-description.png'})
    this.cities.push({name:'Budapeste', photo:'https://thumbs.web.sapo.io/?W=800&H=0&delay_optim=1&epic=Yjg1+GZG7pj1r4Nq9iNRr5fRcyVmA/DaJ2oWyAZ7o05qPdj7d+faFVFm1SWWQ+wamFeylPfLsgBw3QJ94ZJ08MF2Z1SVGZGPokIKeE0jh2+5pZY='})
    this.cities.push({name:'Estocolmo', photo:'https://viagemeturismo.abril.com.br/wp-content/uploads/2016/12/933656741.jpg?quality=70&strip=info&w=919'})
    this.cities.push({name:'Porto', photo:'https://i0.wp.com/www.malagasouthexperiences.com/wp-content/uploads/2019/03/213e46fe75b1a7278a6510b56dda13a3.jpeg?resize=960%2C576'})
  
  }
}
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
