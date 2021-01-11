<template>
  <header>
    <Title>Recherche-Plattform</Title>
  </header>
  <main>
    <p v-if="!stories">
      Hallo {{ user.name }}!<br />Die vorliegende Recherche-Plattform ist
      <a href="https://github.com/soerenengels/recherche-plattform"
        >Work in Progress</a
      >. Sie basiert auf dem Ansatz der Story-based Inquiry Mark Lee Hunter und
      Luuk Sengers.<br />
      <router-link to="/hypothese">Starte eine neue Story.</router-link>
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
        name: "User:in",
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
a {
  font-size: 1em;
  text-decoration: underline;
}
</style>