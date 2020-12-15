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
  mehtods: {
    checkForBlockChange() {
      /* Test if the Block begins with '##' for example to start a new Headline-Block */
    },
  },
};
</script>