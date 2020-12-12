<template>
  <li
    @click="editTag()"
    @input="updateTag(event)"
    @blur="leaveTag()"
    :style="'background-color: ' + tagObject.backgroundColor"
    v-text="tagObject.value"
    :contenteditable="editable"
  ></li>
</template>

<script>
export default {
  name: "Tags",
  props: {
    tagObject: Object,
  },
  data() {
    return {
      editable: false,
    };
  },
  methods: {
    editTag() {
      this.editable = true;
    },
    updateTag(e) {
      // TODO
      // change state-Value of Tag on Input to
      console.log(e);
      console.log(e.target.value);
    },
    leaveTag() {
      this.editable = false;
    },
  },
};
</script>

<style scoped>
li {
  display: inline-block;
  padding: 0.5em;
  border-radius: 1em;
  cursor: text;
}
</style>