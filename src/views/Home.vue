<template>
  <header>
    <Title>Teamdashboard</Title>
  </header>
  <main>
    <p v-if="!stories">
      Hallo {{ user.name }}! Ihr habt aktuell keine laufenden Geschichten.<br />
      Starte eine neue Story.
      <!-- <Button type="add" @click="navToNew()" /> -->
    </p>
  </main>
</template>

<script>
// @ is an alias to /src
import Title from "@/components/Title.vue";
/* import Button from "@/components/Button.vue"; */

export default {
  name: "Home",
  /* setup() {
    const navToNew = () => this.$router.push("/new");
    return {
      navToNew,
    };
  }, */
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
    /* Button, */
  },
};
</script>

<style scoped>
</style>