<template>
  <Navigation />
  <main>
    <header>
      <Title>Quellen</Title>
      <Button>Quelle hinzufügen</Button>
    </header>
    <p>
      <em>Get a Documents State of Mind.</em> Überlege zu jedem Ereignis, welche
      Quellen es geben könnte.
    </p>
    <Textarea value="Beispiel" width="60%" height="auto" />
  </main>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Title from "@/components/Title.vue";
import Textarea from "@/components/Textarea.vue";
import Button from "@/components/Button.vue";

export default {
  name: "Quellen",
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
    Button,
  },
};
</script>

<style scoped>
header {
  display: flex;
}
</style>