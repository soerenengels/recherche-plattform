import { createStore } from 'vuex'

const initialState = {
  story: {
    id: 0,
    title: "Erste Investigative Story",
    hypothesis: "",
    sources: [
      {
        id: 0,
        description: "Test",
        eventId: 0,
        sourceType: "public",
      },
    ],
  },
  sources: [
    {
      id: 0,
      description: "Test",
      eventId: 0,
      sourceType: "public",
    },
  ],
  contacts: [
    {
      lastName: "Engels",
      firstName: "Sören",
      gender: "cis-männlich",
      salutation: "Herr",
      nickname: "Sören",
      context: {
        type: "tags",
        data: [{
          value: "Recherche-Team",
          backgroundColor: "rgba(190, 190, 190, 0.8)"
        }]
      },
      email: "mail@soerenengels.de",
      phone: "+49 1234 657 412 32",
      socialMedia: [
        {
          media: "Twitter",
          handle: "soerenengels",
        },
      ],
      city: "Halle (Saale)",
      postcode: "06108",
      street: "Mansfelder Straße",
      houseNumber: "56",
      adressContext: "",
      description: "",
      access: {
        type: "tags",
        data: [{
          value: "alle",
          backgroundColor: "rgba(190, 190, 190, 0.8)"
        }]
      },
      imageUrl: "",
    },
  ],
  hypothesis: "Formuliere deine Hypothese.",
  events: [{
    id: 0,
    title: "Hypothese",
    type: "prob",
    hypothesis: true,
    content:
      "Formuliere deine Hypothese.",
    date: 20200106,
    actors: [],
  }],
  file: [
    {
      id: 0,
      type: "h1",
      content: "File"
    },
    {
      id: 1,
      type: "p",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sit quasi soluta tempora, eligendi molestias, blanditiis quas incidunt voluptatem ipsum fugit hic impedit beatae accusamus nemo id perferendis quia deleniti."
    },
    {
      id: 2,
      type: "p",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sit quasi soluta tempora, eligendi molestias, blanditiis quas incidunt voluptatem ipsum fugit hic impedit beatae accusamus nemo id perferendis quia deleniti."
    },
    {
      id: 3,
      type: "h2",
      content: "Zwischenüberschrift"
    },
    {
      id: 4,
      type: "p",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sit quasi soluta tempora, eligendi molestias, blanditiis quas incidunt voluptatem ipsum fugit hic impedit beatae accusamus nemo id perferendis quia deleniti."
    },
    {
      id: 5,
      type: "h2",
      content: "Ereignis"
    },
    {
      id: 6,
      type: "p",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sit quasi soluta tempora, eligendi molestias, blanditiis quas incidunt voluptatem ipsum fugit hic impedit beatae accusamus nemo id perferendis quia deleniti."
    },
    {
      id: 7,
      type: "p",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sit quasi soluta tempora, eligendi molestias, blanditiis quas incidunt voluptatem ipsum fugit hic impedit beatae accusamus nemo id perferendis quia deleniti."
    },
  ],
  topicCollection: [
    {
      url: {
        url: "https://www.url.de/",
        text: "https://www.url.de/"
      },
      title: { text: "Titel" },
      author: { text: "Autor:in" },
      description: { text: "Beschreibung des Inhaltes die da Lorem ipsum wäre." },
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
      files: [
        {
          text: "test.pdf",
          url: "./fileStorage/test.pdf"
        },
      ],
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
  setters: {
    setHypothesis(state, value) {
      state.events[0].content = value;
    }
  },
  getters: {
    getEvents(state) {
      return state.events;
    },
    getHypothesis(state) {
      return state.events.filter(event => event.hypothesis);
    },
    getTopicCollection(state) {
      return state.topicCollection;
    },
  },
  mutations: {
    addEvent(state, obj) {
      console.log("@ Mutation");
      console.log(obj);
      state.events.push(obj.event);
    },
    addContact(state, numberOfColumns) {
      const newContact = [];
      for (numberOfColumns > 0; numberOfColumns--;) {
        newContact.push(" ");
      }
      console.log(newContact)
      state.contacts.push(newContact);
    },
    changeHypothesis(state, value) {
      console.log("New State");
      this.setters.setHypothesis(value)
      console.log(value);
    },
    editHypothesisTitle(state, value) {
      console.log("Change State through Edit");
      console.log(value);
      this.setters.setHypothesis(value)
    },
    updateBlockinFile(state, payload) {
      state.file[payload.id].content = payload.text;
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
