<template>
  <Navigation />
  <main>
    <Title>{{ $t("hypothesis-screen.title") }}</Title>
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
          title: this.$t("hypothesis-screen.tutorial.screen-one.title"),
          html: this.$t("hypothesis-screen.tutorial.screen-one.html"),
        },
        {
          id: 2,
          title: this.$t("hypothesis-screen.tutorial.screen-two.title"),
          html: this.$t("hypothesis-screen.tutorial.screen-two.html"),
        },
        {
          id: 3,
          title: this.$t("hypothesis-screen.tutorial.screen-three.title"),
          html: this.$t("hypothesis-screen.tutorial.screen-three.html"),
        },
        {
          id: 4,
          title: this.$t("hypothesis-screen.tutorial.screen-four.title"),
          html: this.$t("hypothesis-screen.tutorial.screen-four.html"),
        },
        {
          id: 5,
          title: this.$t("hypothesis-screen.tutorial.screen-five.title"),
          html: this.$t("hypothesis-screen.tutorial.screen-five.html"),
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
  width: calc(100% - 3rem);
  min-height: 6em;
  padding: 1.5rem;
  font-size: 2rem;
  border: none;
  font-family: inherit;
}
</style>