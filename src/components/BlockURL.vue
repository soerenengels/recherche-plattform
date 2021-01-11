<template>
  <a
    :href="url"
    v-text="text"
    @click.prevent="editable = true"
    @blur="editable = false"
    :contenteditable="editable"
  ></a>
  <a :href="url" class="link">#</a>
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
      /* Filter for www or http or https */
      return this.anchorObject.url;
    },
    text() {
      return this.anchorObject.text;
    },
  },
};
</script>

<style scoped>
a {
  font-size: 1em;
}
.link {
  background: rgba(255, 255, 255, 0.5);
  border-radius: 2em;
  padding: 0.5em;
  margin-left: 0.5em;
}
</style>