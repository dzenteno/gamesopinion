<template>
  <div>
    <h1 class="my-3">Editando la opinion de: {{ opinion.datos.juego }}</h1>
    <div class="editar-form">
      <label class="text-start">Nombre</label>
      <input type="text" v-model="opinionEditada.usuario" />
      <label class="text-start">Opinión</label>
      <textarea
        id="texto-opinion"
        cols="30"
        rows="8"
        v-model="opinionEditada.opinion"
      ></textarea>
    </div>
    <router-link to="/administracion" class="btn btn-primary m-2"
      >Regresar</router-link
    >
    <button class="btn btn-info" @click="editarOpinion">Guardar</button>
    <div
      class="alert alert-danger d-flex align-items-center mx-4"
      role="alert"
      v-if="mensajeError.mensajeMostrar"
    >
      <div>
        <i class="fas fa-exclamation-triangle"></i> {{ mensajeError.mensaje }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["id"],

  data() {
    return {
      mensajeError: {
        mensajeMostrar: false,
        mensaje: "Debe llenar todos los campos",
      },
      
      opinionEditada: {
        usuario: "",
        opinion: "",
      },
    };
  },

  computed: {
    ...mapGetters(["opinionByID"]),

    opinion() {
      // const { id } = this; -> es lo mismo que -> const id = this.id;
      return this.opinionByID(this.id);
    },
  },

  methods: {
    editarOpinion() {
      let editada = {
        id_opinion: this.id,
        datos: this.opinionEditada,
      };
      if (
        this.opinionEditada.opinion == "" ||
        this.opinionEditada.usuario == ""
      ) {
        this.mensajeError.mensajeMostrar = true;
      } else {
        this.$store.dispatch("editarOpinion", editada);
        this.$router.go(-1);
      }
    },
  },
};
</script>

<style scoped>
textarea {
  resize: none;
}

.editar-form {
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
}
</style>