<template>
  <Navigation />
  <main>
    <Title>Was soll aufgedeckt werden?</Title>
    <LayoutTwoThirds>
      <template v-slot:main>
        <textarea
          width="60%"
          height="auto"
          v-model="hypothesis.content"
          aria-label="Hypothese"
        ></textarea>
        <!-- <Textarea  v-model="hypothesis"> </Textarea> -->
      </template>
      <template v-slot:context>
        <Tutorial :data="tutorialData" />
      </template>
    </LayoutTwoThirds>
  </main>
</template>

<script>
import LayoutTwoThirds from "@/components/LayoutTwoThirds.vue";
import Navigation from "@/components/Navigation.vue";
import Title from "@/components/Title.vue";
import Tutorial from "@/components/Tutorial.vue";
/* import Textarea from "@/components/Textarea.vue"; */

export default {
  name: "Hypothese",
  props: {},
  data() {
    return {
      tutorialData: [
        {
          id: 1,
          title: "Tutorial",
          html:
            "<p>Willkommen auf dem Entwurf einer Recherche-Plattform nach dem Vorbild des <em>Drehbuchs der Recherche</em>.</p><p>Zu Beginn steht die Frage, was du denn eigentlich aufdecken möchtest. Dafür gilt es zunächst einmal eine Hypothese zu formulieren, die dein weiteres Vorgehen leiten wird.</p>",
        },
        {
          id: 2,
          title: "Was ist eine Hypothese?",
          html:
            "<p>Der Begriff der Hypothese entstammt dem Drehbuch der Recherche. Es geht darum, .... Hast du bereits eine konkrete Idee oder soll dir mit Fragen auf die Sprünge geholfen werden?</p>",
        },
        {
          id: 3,
          title: "Wie finde ich eine Hypothese?",
          html:
            "<p><em>Stimmt es, dass …? Wie kann das sein? Was sind die Folgen? Was wird dagegen getan?</em></p>",
        },
        {
          id: 4,
          title: "Wie geht es weiter?",
          html:
            "<p>Wenn du eine Hypothese aufgeschrieben hast, ist der nächste Schritt, dir Ereignisse zu überlegen, die aus der Hypothese folgen und deren Ursachen sind. Klicke auf <em>Chronik</em> in der Navigation.</p>",
        },
      ],
    };
  },
  computed: {
    hypothesis: {
      get() {
        return this.$store.getters.getHypothesis[0];
      },
      set(value) {
        this.$store.commit("changeHypothesis", value);
      },
    },
  },
  method: {},
  components: {
    LayoutTwoThirds,
    Navigation,
    Title,
    /* Textarea, */
    Tutorial,
  },
};
</script>

<style scoped>
textarea {
  background: #fff4c9;
  border-radius: 2rem;
  width: calc(100% - 3em);
  height: calc(100% - 3em);
  padding: 1.5rem;
  font-size: 2rem;
  border: none;
  font-family: inherit;
}
</style>