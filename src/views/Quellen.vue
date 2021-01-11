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
        <Tutorial :data="tutorialData" />
      </template>
    </LayoutTwoThirds>
  </main>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import TabelleQuellen from "@/components/TabelleQuellen.vue";
import LayoutTwoThirds from "@/components/LayoutTwoThirds.vue";
import Tutorial from "@/components/Tutorial.vue";
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
      tutorialData: [
        {
          id: 1,
          title: "Quellen erschließen",
          html:
            "<p>Bei diesem Schritt der investigativen Recherche musst du noch nicht alle Quellen ausrecherchiert haben. Ziel ist es, sich einen Überblick über mögliche Quellen zu verschaffen. Erst in einem zweiten Schritt ist dann die Erschließung zielführender Quellen gefragt.</p>",
        },
        {
          id: 2,
          title: "Öffentliche Dokumente",
          html: "<p>Viele Quellen sind über das Internet verfügbar.</p>",
        },
        {
          id: 3,
          title: "Beobachtungen",
          html:
            "<p>Welche Orte sind relevant für das Ereignis? Welche für die Geschichte wesentliche Orte lassen sich besuchen? Treffe eine Auswahl.</p>",
        },
        {
          id: 4,
          title: "Interviews",
          html:
            "<p>Welche Interviewpartner:innen können und wollen aussagen?</p>",
        },
        {
          id: 5,
          title: "Vertrauliche Dokumente",
          html:
            "<p>Welche Alternativen gibt es für die vertraulichen Dokumente? (z.B. Pläne, Anträge, Budgets, Beratungen, Instruktionen, Verträge, Quittungen, Kontoauszüge, Korrespondenzen, E-Mails, Kalender, Protokolle, Anwesenheitslisten, Tagebücher, interne Datenbanken, interne Forschungen, Evaluationen, Fragebögen, Beschwerden, Fotos, Videos) &rarr; Aufwand der Erschließung abwägen (einziges Beweisstück oder spezifisches Detail).</p>",
        },
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
    Tutorial,
  },
};
</script>

<style scoped>
</style>