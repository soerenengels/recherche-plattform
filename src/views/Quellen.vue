<template>
  <Navigation />
  <main>
    <header>
      <p>
        Überlege zu jedem Ereignis, welche Quellen es geben könnte.<br />
        &#x2192; <em>Get a Documents State of Mind.</em>
      </p>
    </header>
    <LayoutTwoThirds>
      <template v-slot:main>
        <TabelleQuellen :structure="structure" :dataSrc="data" />
      </template>
      <template v-slot:context>
        <p>
          Viele Quellen sind über das Internet verfügbar. Welche für die
          Geschichte wesentliche Orte lassen sich besuchen? (Auswahl treffen)
          Welche Interviewpartner:innen können und wollen aussagen? Welche
          Alternativen gibt es für die vertraulichen Dokumente? (z.B. Pläne,
          Anträge, Budgets, Beratungen, Instruktionen, Verträge, Quittungen,
          Kontoauszüge, Korrespondenzen, E-Mails, Kalender, Protokolle,
          Anwesenheitslisten, Tagebücher, interne Datenbanken, interne
          Forschungen, Evaluationen, Fragebögen, Beschwerden, Fotos, Videos) →
          Aufwand der Erschließung abwägen (einziges Beweisstück oder
          spezifisches Detail)
        </p>
      </template>
    </LayoutTwoThirds>
  </main>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import TabelleQuellen from "@/components/TabelleQuellen.vue";
import LayoutTwoThirds from "@/components/LayoutTwoThirds.vue";
/* import Button from "@/components/Button.vue"; */

export default {
  name: "Quellen",
  data() {
    return {
      structure: [
        { value: "Ereignisse", type: "tag" },
        { value: "Öffentliche Dokumente", type: "text" },
        { value: "Beobachtungen", type: "text" },
        { value: "Interviews", type: "text" },
        { value: "Vertrauliche Dokumente", type: "text" },
      ],
    };
  },
  props: {},
  computed: {
    getEvents() {
      return this.$store.getters.getEvents;
    },
    data() {
      const data = [];
      this.getEvents.forEach((event) => data.push([event, "", "", "", ""]));
      return data;
    },
  },
  components: {
    Navigation,
    TabelleQuellen,
    LayoutTwoThirds,
    /* Button, */
  },
};
</script>

<style scoped>
</style>