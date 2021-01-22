import { createStore } from 'vuex'

const initialState = {
  app: {
    version: "0.0.1",
    description: "Beschreibung.",
    settings: {
      locale: "en-US",
      filehandle: true,
      savedOn: false,
      autosave: false
    },
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
      content: "Titel"
    },
    {
      id: 1,
      type: "p",
      content: "In diesem Textfile kannst du die Geschichte zusammenschreiben. Auf der rechten Seite findest du neben einem Outline der Überschriften weitere Unterstützung, um schnell auf Informationen zuzugreifen. Mit einem Klick auf das Icon in der oberen rechten Ecke der jeweiligen Notiz, kannst du die Informationen auf- oder zuklappen."
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
  },
  getters: {
    isSaved(state) {
      return state.app.settings.filehandle;
    },
    isEqualToFile(state) {
      /* Needs to be adjusted */
      return state.app.settings.savedOn ? true : false;
    },
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
    addTopicEntity(state, numberOfColumns) {
      const newTopicEntity = [];
      for (numberOfColumns > 0; numberOfColumns--;) {
        newTopicEntity.push(" ");
      }
      console.log(newTopicEntity)
      state.topicCollection.push(newTopicEntity);
    },
    changeHypothesis(state, value) {
      console.log("New State");
      this.setters.setHypothesis(value)
      console.log(value);
    },
    editHypothesisTitle(state, value) {
      console.log("Change State through Edit");
      console.log(value);
      const hypothesisId = 0;
      state.events[hypothesisId].title = value;
    },
    editHypothesisContent(state, value) {
      console.log("Change State through Edit");
      console.log(value);
      const hypothesisId = 0;
      state.events[hypothesisId].content = value;
    },
    loadFileAsState(state, payload) {
      let fileHandle = payload.fileHandle;
      let content = payload.contents;
      let contentAsJson = JSON.parse(content);
      Object.assign(state, contentAsJson);
      state.app.settings.filehandle = fileHandle;
    },
    updateFileArray(state, value) {
      state.file = value
    },
    updateBlockinFile(state, payload) {
      state.file[payload.id].content = payload.text;
      console.log(payload.id, payload.text)
    },
    insertBlockinFile(state, payload) {
      state.file.splice(payload.index, 0, payload.obj);
      state.file.filter(obj => obj.id > payload.index - 1).forEach(obj => {
        obj.id++
      });
      console.log(state.file);
    }
  },
  actions: {
    toggleAutosave({ state, dispatch }) {
      if (!state.app.settings.autosave) {
        dispatch('autosave');
        state.app.settings.autosave = true;
      } else {
        /* deaktiviere Autosave */
        clearInterval(this.autosave);
        state.app.settings.autosave = false;
      }
    },
    autosave(/* { dispatch } */) {

      let autosave = setInterval(function () {
        /* dispatch('saveState'); */
        console.log("save");
      }, 1500);
      return autosave;
    },
    addItemToChronik({ commit }, eventObject) {
      console.log("Action dispatched for Event-Addition");
      setTimeout(() => {
        commit('addEvent', eventObject);
      }, 300)

    },
    async saveState({ state }) {
      // IMPROVE by searching for the partials that changed
      let filehandle = state.app.settings.filehandle;
      const file = await filehandle.getFile();
      const contents = await file.text();
      const fileJson = JSON.parse(contents);
      if (state != fileJson) {
        // AND STATE IS NEWER THAN FILE
        // SAVE STATE TO FILE
        console.log("state needs to be saved to filehandle");
        const writable = await filehandle.createWritable();
        await writable.write(fileJson);
        await writable.close();
        console.log("done writing!");
      }
      // BE AWARE OF POSSIBLE CONFLICTS
    }
  }
})
