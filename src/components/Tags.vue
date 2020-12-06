<template>
  <ul>
    <template v-for="tagObject in tagsArray" :key="tagObject.value">
      <li :style="'background-color: ' + tagObject.backgroundColor">
        {{ tagObject.value }}
      </li>
    </template>
  </ul>
</template>

<script>
export default {
  name: "Tags",
  props: {
    tagsArray: {
      type: Array,
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
li {
  display: inline-block;
  padding: 0.5em;
  border-radius: 1em;
}
</style>