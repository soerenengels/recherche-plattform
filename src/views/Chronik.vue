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
          title: "Die Chronik",
          html:
            "<p>Liste <strong>Ereignisse</strong> auf. Was ist das Problem (Hypothese)? Was sind die Folgen? Was ist/sind die Ursache/n? Wie könnten Lösungen aussehen?</p>",
        },
        {
          id: 2,
          title: "Die Hypothese",
          html:
            "<p>Die folgenden Fragen helfen dabei, eine möglichst vollständige Chronik zu erstellen. Wir beginnen mit der Hypothese: Wer ist der Täter (Protagonist)? Wie benachteiligt oder schadet er anderen (Antagonist)?</p>",
        },
        {
          id: 3,
          title: "Die Folgen",
          html:
            "<p>Dann versuchen wir uns vorzustellen, was die Folgen sein könnten: Inwiefern profitiert der Täter? Bekommt er Geld, Einfluss, etc.? Wie reagieren die Betroffenen auf die Nachteile? Fangen sie Streit an, suchen sie Hilfe, fordern sie Entschädigung, flüchten sie vor dem Problem, etc.? Wie reagieren Zeugen? Bieten sie Hilfe an oder gehen sie dem Problem nach?</p>",
        },
        {
          id: 4,
          title: "Die Ursachen",
          html:
            "<p>Nun fragen wir uns, wie es so weit kommen konnte. Was sind die Ursachen? Wie kam der Täter auf die Idee? Reagiert er auf eine Bedrohung, Hindernis, Eingebung, Erfindung, Entdeckung, Gesetz, Auftrag, etc.? Wie bereitete sich der Täter vor? Wie kam er an die notwendigen Instrumente, Grundstoffe, finanziellen Mittel, Kenntnisse, Abnehmer, Zugänge, etc.? Wie kam der Täter zu der Gelegenheit? Wie kam er in die Position? Wer hat ihn bewacht oder weggeschaut?</p>",
        },
        {
          id: 5,
          title: "Lösungen",
          html:
            "<p>Zum Schluss können wir noch versuchen, uns ein Bild von den Lösungen zu machen: Wie versuchen der Täter, die Betroffenen und Zeugen das Problem zu lösen oder dem Problem vorzubeugen? Welche Alternativen, Ausnahmen, Experimente, Pläne, Ideen, Ratschläge, Proteste, kritischen Töne, Reaktionen, etc. gibt es?</p>",
        },
      ],
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