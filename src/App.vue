<template>
  <div id="app">
    <div id="nav">
      <navbar />
    </div>
    <router-view/>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import Navbar from './components/Navbar.vue';

export default {
  components: { Navbar },
  methods:{
    ...mapActions(['get_Juegos'])
  },

  mounted(){
    this.get_Juegos();
  },
}
</script>
<style scoped>
@import url("../node_modules/bootstrap/dist/css/bootstrap.css");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
