<template>
  <Navigation />
  <main>
    <header>
      <Button type="primary" icon="true" @click="addContact()"
        >Kontakt hinzufügen</Button
      >
      <Button type="secondary">Filter</Button>
      <input type="search" value="Suche" />
    </header>
    <TabelleKontakte :structure="dataStructure" :dataSrc="contacts" />
  </main>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Button from "@/components/Button.vue";
import TabelleKontakte from "../components/TabelleKontakte.vue";

export default {
  name: "Kontakte",
  data() {
    return {
      dataStructure: [
        { value: "Nachname" },
        { value: "Vorname" },
        { value: "Geschlechtsidentität" },
        { value: "Anrede" },
        { value: "Codename / Spitzname" },
        { value: "Kontext / Gruppe" },
        { value: "E-Mail" },
        { value: "Telefon" },
        { value: "Social Media" },
        { value: "Stadt" },
        { value: "PLZ" },
        { value: "Straße" },
        { value: "Hausnummer" },
        { value: "Adresszusatz" },
        { value: "Notizen" },
        { value: "Sichtbarkeit" },
        { value: "Image" },
      ],
    };
  },
  computed: {
    contacts() {
      return this.$store.state.contacts;
    },
  },
  methods: {
    addContact() {
      // Keep aligned with TabelleKontakte.vue --> methods
      console.log("Method: Add new Contact");
      // Add New Object in State-Contacts-Array
      this.$store.commit("addContact", this.sumOfColumns);
      // Focus in first Cell of new Line
    },
    addFilter() {
      console.log("Open Filter Preferences.");
    },
  },
  props: {},
  components: {
    Navigation,
    Button,
    TabelleKontakte,
  },
};
</script>

<style scoped>
header {
  display: flex;
}
header input {
  background: none;
  border: none;
  padding: 0.5em;
  font-size: 1em;
  font-family: "forma-djr-display", "Helvetica Neue", "Avenir", "Helvetica",
    "Arial", sans-serif;
}
div {
  overflow-x: auto;
}
table {
  table-layout: auto;
  border-collapse: collapse;
}
thead td {
  padding: 0.2em;
  white-space: nowrap;
  min-width: 18ch;
}
tbody td {
  padding: 0.2em;
}
/* .fixedColumn {
  position: absolute;
  left: 0em;
} */
tbody tr {
  height: 3em;
}
tbody tr:hover {
  background-color: rgba(255, 244, 201, 0.4);
  transition: background-color 0.3s ease-out;
  border-radius: 1em;
}
</style>