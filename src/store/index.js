import { createStore } from 'vuex'

const initialState = {
  story: {
    id: 0,
    title: "Erste Investigative Story",
    hypothesis: "",
    chronicles: {
      prob: [],
      consequences: {},
      causes: {},
      solutions: {}
    },
    sources: [
      {
        id: 0,
        description: "",
        eventId: 0,
        sourceType: "public",
      },
    ],
  },
}
export default createStore({
  state: initialState,
  mutations: {
    addEvent(object) {
      console.log("Add Event to State");
      console.log(object);
    }
  },
  actions: {
    createNewStory() {
      this.state = initialState;
    },
    addItemToChronik({ commit, eventObject }) {
      console.log("Add Item to Chronik");
      setTimeout(() => {
        commit('addEvent', eventObject);
      })

    }
  },
  modules: {
  }
})
