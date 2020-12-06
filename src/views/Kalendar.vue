<template>
  <Navigation />
  <main>
    <header>
      <Button type="primary" icon="true">Termin hinzufügen</Button>
      <Button type="secondary">Filter</Button>
      <input type="search" value="Suche" />
    </header>
    <iframe
      src="https://calendar.google.com/calendar/embed?src=7m6s1lb1u4boap1fn2uecq0n20%40group.calendar.google.com&ctz=Europe%2FBerlin"
      style="border: 0"
      width="800"
      height="600"
      frameborder="0"
      scrolling="no"
    ></iframe>
  </main>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Button from "@/components/Button.vue";

export default {
  name: "Kalendar",
  data() {},
  methods: {},
  props: {},
  components: {
    Navigation,
    Button,
  },
};
</script>

<style scoped>
header {
  display: flex;
}
header input {
  background: none;
  border: none;
  padding: 0.5em;
  font-size: 1em;
  font-family: "forma-djr-display", "Helvetica Neue", "Avenir", "Helvetica",
    "Arial", sans-serif;
}
</style>
