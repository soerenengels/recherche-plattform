<template>
  <Navigation />
  <main>
    <header v-html="header"></header>
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
      header: this.$t("sources-screen.header"),
      structure: [
        { value: this.$t("sources-screen.table.events"), type: "tag" },
        {
          value: this.$t("sources-screen.table.publicDocuments"),
          type: "text",
        },
        { value: this.$t("sources-screen.table.observations"), type: "text" },
        { value: this.$t("sources-screen.table.interviews"), type: "text" },
        {
          value: this.$t("sources-screen.table.confidentialSources"),
          type: "text",
        },
      ],
      tutorialData: [
        {
          id: 1,
          title: this.$t("sources-screen.tutorial.screen-one.title"),
          html: this.$t("sources-screen.tutorial.screen-one.html"),
        },
        {
          id: 2,
          title: this.$t("sources-screen.tutorial.screen-two.title"),
          html: this.$t("sources-screen.tutorial.screen-two.html"),
        },
        {
          id: 3,
          title: this.$t("sources-screen.tutorial.screen-three.title"),
          html: this.$t("sources-screen.tutorial.screen-three.html"),
        },
        {
          id: 4,
          title: this.$t("sources-screen.tutorial.screen-four.title"),
          html: this.$t("sources-screen.tutorial.screen-four.html"),
        },
        {
          id: 5,
          title: this.$t("sources-screen.tutorial.screen-five.title"),
          html: this.$t("sources-screen.tutorial.screen-five.html"),
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