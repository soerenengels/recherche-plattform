<template>
  <textarea v-model="currentValue" :height="height" :width="width"> </textarea>
</template>
<script>
/* Functionality via https://liamhammett.com/textarea-slots-in-vue-components-DqzaN6o4 */
export default {
  props: {
    value: {
      required: false,
      type: String,
      default: "Hier Text einfügen ...",
    },
  },
  data() {
    return {
      currentValue: this.getDefaultValue(),
    };
  },
  methods: {
    getDefaultValue() {
      if (this.$slots.default && this.$slots.default().length) {
        return this.$slots.default()[0].text;
      }

      return this.value;
    },
  },
};
</script>

<style scoped>
textarea {
  background: #fff4c9;
  border-radius: 2rem;
  padding: 1.5rem;
  margin: 1rem 0;
  font-size: 2rem;
  border: none;
  font-family: inherit;
}
</style>