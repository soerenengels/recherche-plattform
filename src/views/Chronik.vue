<template>
  <Navigation />
  <main>
    <header>
      <Title>Chronik</Title>
      <Button>Ereignis hinzufügen</Button>
    </header>
    <p>Wie kam es dazu?</p>
    <Textarea value="Beispiel" width="60%" height="auto" />
  </main>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Title from "@/components/Title.vue";
import Textarea from "@/components/Textarea.vue";
import Button from "@/components/Button.vue";

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
    Button,
  },
};
</script>

<style scoped>
header {
  display: flex;
}
</style>