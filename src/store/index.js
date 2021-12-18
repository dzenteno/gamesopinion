import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    juegos: [],
    opiniones: [],
  },

  getters: {
    opiniones(state) {
      return state.opiniones;
    },

    // opinionByID(state, id) {
    //   console.log("id store: ", id)
    //   let opinion = state.opiniones.find(op => op.id_opinion == id);
    //   console.log("Opinion en store", opinion)
    //   return opinion;
    // },

    opinionByID: (state) => {
      return (id) => {
        const opinion = state.opiniones.find((op) => op.id_opinion == id);
        return opinion;
      }
    },

  },

  mutations: {
    GET_JUEGOS(state, juegos) {
      state.juegos = juegos;
    },

    GET_OPINIONES(state, opiniones) {
      if ((state.opiniones.length) == 0) {
        state.opiniones = 'No existen opiniones';
      }
      state.opiniones.push(opiniones);
    },

    pushOpiniones(state, nueva_opinion) {
      // let ultimo = state.opiniones[state.opiniones.length - 1];
      // console.log(ultimo.id_opinion + 1)
      let objetOpinion = {
        id_opinion: state.opiniones.length + 1,
        datos: nueva_opinion
      }
      state.opiniones.push(objetOpinion);
    },

    deleteOpiniones(state, opinion_eliminada) {
      // let elemento = state.opiniones.indexOf(opinion_eliminada)
      // const found = array1.find(element => element > 10);
      let elemento = state.opiniones.findIndex(element => element.id_opinion == opinion_eliminada);
      state.opiniones.splice(elemento, 1);
    },

    editarOpiniones(state, editada){
      // let elemento = state.opiniones.find( (op) => op.id_opinion == editada.id_opinion);
      for(let i=0 ; i< state.opiniones.length ; i++){
        if(state.opiniones[i].id_opinion == editada.id_opinion){
          state.opiniones[i].datos.usuario = editada.datos.usuario
          state.opiniones[i].datos.opinion = editada.datos.opinion
        }
      }
    },
  },

  actions: {
    async get_Juegos(context) {
      const resultado = await axios.get('https://api.rawg.io/api/games?key=546a4e30950d4c70948988f672d61864');
      context.commit("GET_JUEGOS", resultado.data.results);
    },

    registrarOpinion(context, nueva_opinion) {
      context.commit('pushOpiniones', nueva_opinion);
      alert('Su opinion fue registrada con éxito')
    },

    eliminarOpinion(context, opinion_eliminada) {
      context.commit('deleteOpiniones', opinion_eliminada);
    },

    editarOpinion(context, opinion) {
      context.commit('editarOpiniones', opinion);
    },
  },

  modules: {
  }
})
