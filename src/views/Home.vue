<template>
  <div class="home">
    <h1 class="py-5">Lista de Juegos Disponibles</h1>
    <div class="container-fluid">
      <div class="row py-1 justify-content-center">
        <div class="col-12 col-sm-3 m-5 " v-for="(juego, i) in juegos" :key="i">
          <cards :juego="juego" class="card"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cards from "../components/Cards.vue";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    Cards,
  },
  computed: {
    ...mapState(["juegos"]),
  },
};
</script>

