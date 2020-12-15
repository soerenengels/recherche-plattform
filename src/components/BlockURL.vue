<template>
  <a
    :href="url"
    v-text="text"
    @click.prevent="editable = true"
    @blur="editable = false"
    :contenteditable="editable"
  ></a>
</template>

<script>
export default {
  props: {
    anchorObject: Object,
  },
  data() {
    return {
      editable: false,
    };
  },
  computed: {
    url() {
      return this.anchorObject.url;
    },
    text() {
      return this.anchorObject.text;
    },
  },
};
</script>