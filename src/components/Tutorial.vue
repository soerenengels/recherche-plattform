<template>
  <aside class="tutorial">
    <header>
      <span
        ><strong>{{ index + 1 }}</strong> / {{ total }}</span
      >
      <h2>{{ data[index].title }}</h2>
    </header>
    <section v-html="data[index].html"></section>
    <footer>
      <span v-if="index != 0" @click="index = index - 1">&larr;</span>
      <span v-if="index + 1 != total" @click="index = index + 1">&rarr;</span>
    </footer>
  </aside>
</template>

<script>
import { ref, toRef } from "vue";

export default {
  props: {
    data: Array,
  },
  setup(props) {
    /* Scripts */
    let index = ref(0);
    let dataArr = toRef(props, "data");
    let total = dataArr.value.length;
    return {
      index,
      total,
      dataArr,
    };
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0.5em 0;
}
h2 {
  margin-left: 0.5em;
}
.tutorial p {
  hyphens: auto;
  font-size: 1.5rem !important;
}
.tutorial footer {
  display: flex;
  justify-content: space-between;
  margin: 0.5em 0;
}
footer span {
  cursor: pointer;
  background: rgba(255, 255, 255, 0.2);
  width: 2em;
  font-size: 1.5em;
  border-radius: 1em;
  text-align: center;
  transition: background-color 0.3s;
}
footer span:hover {
  background: rgba(255, 255, 255, 0.4);
}
</style>