<template>
  <section class="event">
    <h3 @click="toggleCollapsed()" v-text="title"></h3>
    <p v-if="!collapsed" v-text="content" contenteditable></p>
  </section>
</template>

<script>
/* import { reactive } from "vue"; */
export default {
  name: "Event",
  props: {
    eventObject: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      collapsed: true,
    };
  },
  computed: {
    title() {
      return this.eventObject.title;
    },
    content: {
      get() {
        return this.eventObject.content;
      },
      set() {
        this.$store.commit("");
      },
    },
  },
  methods: {
    toggleCollapsed() {
      this.$data.collapsed = !this.$data.collapsed;
    },
  },
};
</script>

<style scoped>
.event {
  background-color: rgba(255, 244, 201, 0.2);
  border-radius: 1em;
  padding: 1em;
  margin: 0.5em 0;
  font-size: 1rem;
}
.event h3 {
  cursor: pointer;
}
</style>