<template>
  <header>
    <Title>Teamdashboard</Title>
  </header>
  <main>
    <p v-if="!stories">
      Hallo {{ user.name }}! Ihr habt aktuell keine laufenden Geschichten.<br />
      Starte eine neue Story.
      <router-link to="/new"><Button type="add" /></router-link>
    </p>
  </main>
</template>

<script>
// @ is an alias to /src
import Title from "@/components/Title.vue";
import Button from "@/components/Button.vue";

export default {
  name: "Home",
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