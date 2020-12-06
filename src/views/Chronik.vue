<template>
  <Navigation />
  <main>
    <p>
      Liste <strong>Ereignisse</strong> auf. Was ist das Problem (Hypothese)?
      Was sind die Folgen? Was ist/sind die Ursache/n? Wie könnten Lösungen
      aussehen?
    </p>
    <div class="timeline">
      <template
        v-for="timelineSection in timelineSections"
        :key="timelineSection.type"
      >
        <EventsCard :sectionTypeObject="timelineSection" />
      </template>
      <teleport to="#overlayContainer" :disabled="true"> Inhalt </teleport>
    </div>
  </main>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import EventsCard from "@/components/EventsCard.vue";

export default {
  name: "Chronik",
  data() {
    return {
      timelineSections: [
        {
          title: "Problem",
          type: "prob",
          buttonText: "Problem ergänzen",
        },
        {
          title: "Folgen",
          type: "cons",
          buttonText: "Folge hinzufügen",
        },
        {
          title: "Ursachen",
          type: "reas",
          buttonText: "Ursache ergänzen",
        },
        {
          title: "Lösungen",
          type: "solu",
          buttonText: "Lösung hinzufügen",
        },
      ],
    };
  },
  components: {
    Navigation,
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
  align-items: flex-start;
  width: 100%;
  overflow: auto;
}
</style>