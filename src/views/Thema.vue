<template>
  <Navigation />
  <main>
    <header>
      <p>
        Hier entsteht deine <strong>Themensammlung</strong>. In der Tabelle hast
        du Möglichkeit Links und Dateien zu deinem Thema zu sammeln. Indem zu
        sie verschlagwortest machst du sie produktiv und filterbar.
      </p>
    </header>
    <TabelleThemen
      :structure="structure"
      :dataSrc="topicCollection"
      title="Themensammlung"
    />
  </main>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import TabelleThemen from "@/components/TabelleThemen.vue";

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
    TabelleThemen,
  },
};
</script>