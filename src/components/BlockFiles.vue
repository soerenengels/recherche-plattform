<template>
  <ul @blur="!edit" @click="edit = true" :class="{ edit: edit }">
    <!--<template v-for="tagObject in tagsArray" :key="tagObject.value">
      <Tag :tagObject="tagObject" />
    </template>-->
    <li v-for="fileObject in fileArray" :key="fileObject.url">
      {{ fileObject.text }}
    </li>
    <template v-if="edit">
      <li>+ neue Datei hinzufügen</li>
    </template>
  </ul>
</template>

<script>
/* import Tag from "@/components/Tag.vue"; */
export default {
  name: "BlockFiles",
  props: {
    fileArray: {
      type: Array,
    },
  },
  data() {
    return {
      edit: false,
    };
  },
  components: {
    /* Tag, */
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  /* position: absolute; */
}
.edit {
  background: white;
}
</style>