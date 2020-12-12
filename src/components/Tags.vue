<template>
  <ul>
    <template v-for="tagObject in tagsArray" :key="tagObject.value">
      <Tag :tagObject="tagObject" />
    </template>
  </ul>
</template>

<script>
import Tag from "@/components/Tag.vue";
export default {
  name: "Tags",
  props: {
    tagsArray: {
      type: Array,
    },
  },
  components: {
    Tag,
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>