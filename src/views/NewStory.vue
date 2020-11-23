<template>
  <header>
    <Title>Neue Story erstellen</Title>
  </header>
  <main>
    <p v-if="!stories">
      Let's start the story!
      <router-link to="/3/hypothese" replace><Button type="add" /></router-link>
    </p>
  </main>
</template>

<script>
// @ is an alias to /src
import Title from "@/components/Title.vue";
import Button from "@/components/Button.vue";

export default {
  name: "NewStory",
  data() {
    return {
      user: {
        name: "Sören",
      },
      stories: false,
    };
  },
  components: {
    Title,
    Button,
  },
};
</script>

<style scoped>
</style>