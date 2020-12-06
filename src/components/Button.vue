<template>
  <a class="button" role="button" :class="type">
    <span v-if="icon"> + </span>
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: "Button",
  props: {
    type: {
      type: String,
    },
    icon: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.button {
  font-size: 1em;
  display: inline-block;
  padding: 0.5em 1em;
  margin: 0.5em;
  border-radius: 1em;
  cursor: pointer;
}
.button:first-of-type {
  margin-left: 0;
}
.primary {
  background-color: rgba(255, 244, 201, 0.8);
  font-weight: 500;
}
.secondary {
  background-color: rgba(255, 244, 201, 0.4);
}
</style>
