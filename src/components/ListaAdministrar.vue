<template>
  <div>
    <h1 class="my-4">Lista de Opiniones a Administrar</h1>
    <div v-if="opiniones.length > 0">
        <table class="table table-borderless table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Persona</th>
              <th scope="col">Juego</th>
              <th scope="col">Opinion</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(opinion,  i) in opiniones" :key="i">
              <th scope="row">{{i + 1}}</th>
              <td>{{opinion.datos.usuario}}</td>
              <td>{{opinion.datos.juego}}</td>
              <td>{{opinion.datos.opinion}}</td>
              <td><button type="button" class="btn btn-danger mx-3" @click="eliminarOpinion(opinion.id_opinion)">Eliminar</button> <router-link :to="`/administracion/${opinion.id_opinion}`"><button type="button" class="btn btn-primary">Editar</button></router-link></td>
            </tr> 
          </tbody>
        </table>
    </div>
    <div
      v-else
      class="
        bg-danger
        p-2
        text-danger
        bg-opacity-25
        border border-danger
        m-auto
        mx-5
      "
    >
      <span>No existen opiniones para administrar</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["opiniones"]),
  },
  methods: {
    eliminarOpinion(id_opinion){
      this.$store.dispatch('eliminarOpinion', id_opinion);
    },
  },
};
</script>

<style scoped>
</style>