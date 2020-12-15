<template>
  <p
    v-text="text"
    @click="editable = true"
    @blur="editable = false"
    :contenteditable="editable"
  ></p>
</template>

<script>
export default {
  props: {
    blockObject: Object,
  },
  data() {
    return {
      editable: false,
    };
  },
  computed: {
    text() {
      return this.blockObject.text;
    },
  },
};
</script>