<template>
  <div class="card-section">
    <div class="card text-start rounded-3" style="width: 24rem">
      <img
        :src="juego.background_image"
        class="card-img-top img-fluid rounded-3"
        alt="Image game"
        style="height: 16rem"
      />
      <div class="card-body">
        <h5 class="card-title fw-bold">{{ juego.name }}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><b>Rating:</b> {{ juego.rating }}</li>
        <li class="list-group-item"><b>Release:</b> {{ juego.released }}</li>
        <li class="list-group-item">
          <b>Update:</b> {{ new Date(juego.updated).toLocaleDateString() }}
        </li>
      </ul>
      <div class="card-body text-center">
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          :data-bs-target="'#opinar-modal' + juego.id"
          @click="juegoOpinionIngresada(juego.name)"
        >
          Opinar
        </button>
      </div>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      :id="'opinar-modal' + juego.id"
      tabindex="-1"
      aria-labelledby="opinarModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="opinarModalLabel">
              Escribe tu opinion para el juego:
              <span class="fw-bold">{{ opinionIngresada.juego }}</span>
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              ref="btnCerrar"
            ></button>
          </div>
          <div class="modal-body">
            <label for="nombre-usuario" class="text-start">Nombre: </label>
            <input
              id="nombre_usuario"
              type="text"
              v-model="opinionIngresada.usuario"
            />
            <label for="texto-opinion" class="text-start">Opiniones: </label>
            <textarea
              id="texto-opinion"
              cols="30"
              rows="8"
              v-model="opinionIngresada.opinion"
            ></textarea>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="registrarOpinion(opinionIngresada)"
            >
              Guardar
            </button>
          </div>
            <div
              class="alert alert-danger d-flex align-items-center mx-4"
              role="alert"
              v-if="mensajeError.mensajeMostrar"
            >
              <div><i class="fas fa-exclamation-triangle"></i> {{mensajeError.mensaje}}</div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
// import bootstrap from '../../node_modules/bootstrap/dist/js/bootstrap.bundle'

export default {
  props: ["juego"],

  data() {
    return {
      mensajeError: {
        mensajeMostrar: false,
        mensaje: "Debe llenar todos los campos",
      },
      opinionIngresada: {
        usuario: "",
        opinion: "",
        juego: "",
      },
    };
  },
  computed: {
    ...mapState(["opiniones"]),
  },

  methods: {
    juegoOpinionIngresada(nombre_juego) {
      this.opinionIngresada.juego = nombre_juego;
    },

    registrarOpinion(nueva_opinion) {
      // let myModalEl = document.getElementById(`opinar-modal${id}`);
      // let modal = bootstrap.Modal.getOrCreateInstance(myModalEl);
        // modal.toggle();
      if (
        this.opinionIngresada.opinion == "" ||
        this.opinionIngresada.usuario == ""
      ) {
        this.mensajeError.mensajeMostrar = true;
      } else {
        this.$store.dispatch("registrarOpinion", nueva_opinion);
        this.mensajeError.mensajeMostrar = false;
        this.$refs.btnCerrar.click();
      }
    },
  },
};
</script>

<style scoped>
.modal-body {
  display: flex;
  flex-direction: column;
}
.modal-footer{
  display: flex;
  justify-content: center;
}
textarea {
  resize: none;
}
</style>