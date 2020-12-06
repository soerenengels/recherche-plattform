<template>
  <Navigation />
  <main>
    <header>
      <p>
        Hier entsteht eine Themensammlung.<br />
        In einer Tabelle werden Links und Dateien zu einem Thema gesammelt.<br />
        Sie können verschlagwortet werden und so produktiv gemacht werden.
      </p>
    </header>
    <Tabelle :structure="structure" :dataSrc="topicCollection" />
  </main>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Tabelle from "@/components/Tabelle.vue";

export default {
  name: "Thema",
  data() {
    return {
      structure: [
        { value: "URL", type: "url" },
        { value: "Titel", type: "string" },
        { value: "Autor:innen", type: "tags" },
        { value: "Beschreibung", type: "string" },
        { value: "Akteur:innen", type: "tags" },
        { value: "Veröffentlicht", type: "date" },
        { value: "Tags", type: "tags" },
        { value: "Dateien", type: "files" },
      ],
    };
  },
  props: {},
  computed: {
    topicCollection() {
      return this.$store.getters.getTopicCollection;
    },
  },
  components: {
    Navigation,
    Tabelle,
  },
};
</script>