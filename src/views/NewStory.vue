<template>
  <header>
    <Title>Neue Story erstellen</Title>
  </header>
  <main>
    <p v-if="true">
      Let's start the story!
      <Button @click="createNewStory()" type="add" />
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
  methods: {
    createNewStory() {
      const storyId = 0;
      console.log("Create a New Story with the Story-ID: " + storyId);
      this.$router.push({ path: `/${storyId}/hypothese` });
    },
  },
  components: {
    Title,
    Button,
  },
};
</script>

<style scoped>
</style>