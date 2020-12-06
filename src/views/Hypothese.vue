<template>
  <Navigation />
  <main>
    <Title>Was soll aufgedeckt werden?</Title>
    <div class="twoThird">
      <section>
        <textarea width="60%" height="auto" v-model="hypothesis"></textarea>
        <!-- <Textarea  v-model="hypothesis"> </Textarea> -->
      </section>
      <aside>
        <p>
          Formuliere eine <strong>Hypothese</strong>:
          <em
            >Stimmt es, dass …? Wie kann das sein? Was sind die Folgen? Was wird
            dagegen getan?</em
          ><br />
          Hast du bereits eine konkrete Idee oder soll dir mit Fragen auf die
          Sprünge geholfen werden?
        </p>
      </aside>
    </div>
  </main>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Title from "@/components/Title.vue";
/* import Textarea from "@/components/Textarea.vue"; */

export default {
  name: "Hypothese",
  data() {
    return {
      user: {
        name: "Sören",
      },
      stories: [],
    };
  },
  props: {},
  computed: {
    hypothesis: {
      get() {
        return this.$store.getters.getHypothesis;
      },
      set(value) {
        this.$store.commit("changeHypothesis", value);
      },
    },
  },
  method: {},
  components: {
    Navigation,
    Title,
    /* Textarea, */
  },
};
</script>

<style scoped>
.twoThird {
  display: flex;
}
.twoThird > section {
  flex: 55% 2;
}
.twoThird > aside {
  flex: 25% 1;
  font-size: 1rem;
  hyphens: auto;
}
textarea {
  background: #fff4c9;
  border-radius: 2rem;
  width: calc(100% - 3em);
  min-height: 100%;
  padding: 1.5rem;
  font-size: 2rem;
  border: none;
  font-family: inherit;
}
</style>