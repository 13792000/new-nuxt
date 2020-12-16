import Vuex from "vuex";
const createStore = () => {
  return new Vuex.Store({
    state: {
      items: []
    },
    mutations: {
      setValue(state,paylod){
        state.items = paylod
      }
    },
    actions: {
      cachData(context,paylod){
        context.commit('setValue',paylod)
      },
    },
    getters: {
      items(state){
          return state.items
      }
    }
  })
}
export default createStore;
