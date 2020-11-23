<template>
  <a href="/Hypothese" role="button">
    <span v-if="icon"> + </span>
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: "Button",
  data() {
    return {
      icon: true,
    };
  },
};
</script>

<style scoped>
a {
  background: #c4e286;
  border-radius: 2em;
  padding: 1rem;
  text-decoration: none;
  color: black;
  border: none;
  min-width: 2em;
  height: 2em;
}
</style>
