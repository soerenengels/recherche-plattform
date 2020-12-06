<template>
  <Navigation />
  <main>
    <header>
      <p>
        Überlege zu jedem Ereignis, welche Quellen es geben könnte.<br />
        <em>Get a Documents State of Mind.</em>
      </p>
    </header>
    <!-- <aside>
      <Button type="primary" icon="true">Mögliche Quelle hinzufügen</Button>
      <input type="search" value="Suche" />
    </aside> -->
    <TabelleQuellen :structure="structure" :dataSrc="data" />
  </main>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import TabelleQuellen from "@/components/TabelleQuellen.vue";
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
      /* data: [
        [
          {
            title: "Hypothese",
            class: "prob",
            content:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, autem ad! Voluptatum possimus est, architecto nemo, soluta natus ex in commodi quos asperiores eveniet neque reiciendis officia perferendis deserunt porro.",
            date: 20200106,
            actors: [],
          },
        ],
      ], */
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
    /* Button, */
  },
};
</script>

<style scoped>
header {
  display: flex;
}
aside input {
  background: none;
  border: none;
  padding: 0.5em;
  font-size: 1em;
  font-family: "forma-djr-display", "Helvetica Neue", "Avenir", "Helvetica",
    "Arial", sans-serif;
}
</style>