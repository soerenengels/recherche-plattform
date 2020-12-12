<template>
  <section :class="classObject">
    <h3 contenteditable v-text="title"></h3>
    <span @click="toggleCollapsed()">v</span>
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
    lightBackground: {
      type: Boolean,
      default: false,
    },
    darkBackground: {
      type: Boolean,
      default: false,
    },
    closed: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    let classObject = {};
    classObject[this.eventObject.type] = this.darkBackground;
    classObject["lightBackground"] = this.lightBackground;
    classObject["event"] = true;
    return {
      collapsed: this.closed == false ? false : true,
      classObject: classObject,
    };
  },
  computed: {
    title: {
      get() {
        return this.eventObject.title;
      },
      set() {
        this.$store.commit("editHypotheseTitle", this.title);
      },
    },
    content: {
      get() {
        return this.eventObject.content;
      },
      set() {
        this.$store.commit("editHypotheseTitle", this.content);
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
.lightBackground {
  background-color: rgba(255, 244, 201, 0.2);
}
.prob {
  background-color: rgb(206, 205, 159);
}
.cons {
  background-color: rgb(235, 171, 179);
}
.reas {
  background-color: rgb(249, 185, 138);
}
.solu {
  background-color: rgb(192, 229, 154);
}
.event {
  border-radius: 1em;
  padding: 1em;
  margin: 0.5em 0;
  font-size: 1rem;
  min-width: 30ch;
  position: relative;
}
.event h3 {
  cursor: pointer;
}
.event p {
  hyphens: auto;
  font-size: 1em;
}
.event span {
  cursor: pointer;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: -0.5em;
  top: -0.5em;
  background-color: rgba(255, 255, 255, 0.5);
  height: 2em;
  width: 2em;
  border-radius: 1em;
}
</style>