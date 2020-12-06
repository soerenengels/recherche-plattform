<template>
  <Navigation />
  <main>
    <Title>Was soll aufgedeckt werden?</Title>
    <p>
      Formuliere eine Hypothese.<br />
      Stimmt es, dass …? Wie kann das sein? Was sind die Folgen? Was wird
      dagegen getan?<br />
      Hast du bereits eine konkrete Idee oder soll dir mit Fragen auf die
      Sprünge geholfen werden?
    </p>
    <Textarea width="60%" height="auto">
      Formuliere eine Hypothese.\n Stimmt es, dass …? Wie kann das sein? Was
      sind die Folgen? Was wird dagegen getan?\n Hast du bereits eine konkrete
      Idee oder soll dir mit Fragen auf die Sprünge geholfen werden?
    </Textarea>
  </main>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Title from "@/components/Title.vue";
import Textarea from "@/components/Textarea.vue";

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
  components: {
    Navigation,
    Title,
    Textarea,
  },
};
</script>