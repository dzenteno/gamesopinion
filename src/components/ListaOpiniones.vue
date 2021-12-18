<template>
  <div>
    <h1 class="my-4">Lista de Opiniones</h1>
    <div v-if="opiniones.length > 0">
      <div v-for="(opinion, i) in opiniones" :key="i">
        <div class="accordion" :id="'accordionOpinion' + opinion.id">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                :data-bs-target="'#collapseOne' + opinion.id_opinion"
                aria-expanded="true"
                aria-controls="collapseOne"
              >  
                Opinion creada por:
                 <b>{{ opinion.datos.usuario }} </b>
                para el juego:
                 <b> {{ opinion.datos.juego }} </b>
              </button>
            </h2>
            <div
              :id="'collapseOne' + opinion.id_opinion"
              class="accordion-collapse collapse"
              aria-labelledby="headingOne"
              :data-bs-parent="'#accordionOpinion' + opinion.id_opinion"
            >
              <div class="accordion-body text-start"><b>Opinión: </b>{{ opinion.datos.opinion }}</div>
            </div>
          </div>
        </div>
      </div>
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
      <span>No existen opiniones para mostrar</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["opiniones"]),
  },
  methods: {},
};
</script>
