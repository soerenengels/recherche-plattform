<template>
  <h1>
    <slot></slot>
  </h1>
</template>

<script>
export default {
  name: "Title",
};
</script>

<style scoped>
h1 {
  font-weight: 400;
  font-size: 4rem;
  padding: 2rem 0;
  line-height: 0.9em;
}
@media screen and (max-width: 800px) {
  h1 {
    padding: 0.5rem 0;
  }
}
</style>