import Vuex from "vuex";
const createStore = () => {
  return new Vuex.Store({
    state: {
      items: []
    },
    mutations: {
      setValue(state,val){
        state.items = val
      }
    },
    actions: {
      async fetch(){
        const data = await fetch('http://localhost:3001/items').then((res => res.json()))
        $store.commit('setValue',data)
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
