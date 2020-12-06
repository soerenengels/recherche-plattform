import { createStore } from 'vuex'

const initialState = {
  story: {
    id: 0,
    title: "Erste Investigative Story",
    hypothesis: "",
    sources: [
      {
        id: 0,
        description: "",
        eventId: 0,
        sourceType: "public",
      },
    ],
  },
  hypothesis: "Formuliere deine Hypothese.",
  events: [{
    id: 0,
    title: "Hypothese",
    type: "prob",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, autem ad! Voluptatum possimus est, architecto nemo, soluta natus ex in commodi quos asperiores eveniet neque reiciendis officia perferendis deserunt porro.",
    date: 20200106,
    actors: [],
  }],
  topicCollection: [
    {
      url: "https://www.url.de/",
      title: "Titel",
      author: "Autor:in",
      description: "Beschreibung des Inhaltes die da Lorem ipsum wäre.",
      actor: [
        {
          value: "Sören",
          backgroundColor: "lightblue",
        },
      ],
      published: 20201204,
      tags: [
        {
          value: "Studierende",
          backgroundColor: "lightblue",
        },
        {
          value: "Cooler Typ",
          backgroundColor: "red",
        },
      ],
      files: "test.pdf",
    },
    {
      url: "https://www.this-is-an-url.de/",
      title: "This is an URL",
      author: "Autor:in",
      description: "Beschreibung des Inhaltes die da Lorem ipsum wäre.",
      actor: [
        {
          value: "Elefant",
          backgroundColor: "lightblue",
        },
      ],
      published: 20201204,
      tags: [
        {
          value: "Studierende",
          backgroundColor: "lightblue",
        },
        {
          value: "Cooler Typ",
          backgroundColor: "red",
        },
      ],
      files: "test.pdf",
    },
  ],
}
export default createStore({
  state: initialState,
  getters: {
    getEvents(state) {
      return state.events;
    },
    getHypothesis(state) {
      return state.hypothesis;
    },
    getTopicCollection(state) {
      return state.topicCollection;
    }
  },
  setter: {
  },
  mutations: {
    addEvent(state, obj) {
      console.log("@ Mutation");
      console.log(obj);
      state.events.push(obj.event);
    },
    changeHypothesis(state, value) {
      console.log("New State");
      state.hypothesis = value;
      console.log(value);
    }
  },
  actions: {
    createNewStory() {
      this.state = initialState;
    },
    addItemToChronik({ commit }, eventObject) {
      console.log("Action dispatched for Event-Addition");
      setTimeout(() => {
        commit('addEvent', eventObject);
      }, 300)

    }
  },
  modules: {
  }
})
