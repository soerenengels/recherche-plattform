<template>
  <Navigation />
  <main>
    <!-- <p>
      Liste <strong>Ereignisse</strong> auf. Was ist das Problem (Hypothese)?
      Was sind die Folgen? Was ist/sind die Ursache/n? Wie könnten Lösungen
      aussehen?
    </p> -->
    <Tutorial :data="tutorialData" />
    <div class="timeline">
      <template
        v-for="timelineSection in timelineSections"
        :key="timelineSection.type"
      >
        <EventsCard :sectionTypeObject="timelineSection" />
      </template>
    </div>
  </main>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Tutorial from "@/components/Tutorial.vue";
import EventsCard from "@/components/EventsCard.vue";

export default {
  name: "Chronik",
  data() {
    return {
      tutorialData: [
        {
          id: 1,
          title: this.$t("chronicle-screen.tutorial.screen-one.title"),
          html: this.$t("chronicle-screen.tutorial.screen-one.html"),
        },
        {
          id: 2,
          title: this.$t("chronicle-screen.tutorial.screen-two.title"),
          html: this.$t("chronicle-screen.tutorial.screen-two.html"),
        },
        {
          id: 3,
          title: this.$t("chronicle-screen.tutorial.screen-three.title"),
          html: this.$t("chronicle-screen.tutorial.screen-three.html"),
        },
        {
          id: 4,
          title: this.$t("chronicle-screen.tutorial.screen-four.title"),
          html: this.$t("chronicle-screen.tutorial.screen-four.html"),
        },
        {
          id: 5,
          title: this.$t("chronicle-screen.tutorial.screen-five.title"),
          html: this.$t("chronicle-screen.tutorial.screen-five.html"),
        },
      ],
      timelineSections: [
        {
          title: this.$t("chronicle-screen.timeline.section-one.title"),
          type: "prob",
          buttonText: this.$t("chronicle-screen.timeline.section-one.button"),
        },
        {
          title: this.$t("chronicle-screen.timeline.section-two.title"),
          type: "cons",
          buttonText: this.$t("chronicle-screen.timeline.section-two.button"),
        },
        {
          title: this.$t("chronicle-screen.timeline.section-three.title"),
          type: "reas",
          buttonText: this.$t("chronicle-screen.timeline.section-three.button"),
        },
        {
          title: this.$t("chronicle-screen.timeline.section-four.title"),
          type: "solu",
          buttonText: this.$t("chronicle-screen.timeline.section-four.button"),
        },
      ],
    };
  },
  components: {
    Navigation,
    Tutorial,
    EventsCard,
  },
};
</script>

<style scoped>
header {
  display: flex;
}
.timeline {
  display: flex;

  flex-direction: column;
  width: 100%;
  overflow: auto;
}
@media screen and (min-width: 800px) {
  .timeline {
    flex-direction: row;
    align-items: flex-start;
  }
}
</style>