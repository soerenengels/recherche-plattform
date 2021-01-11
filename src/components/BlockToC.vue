<template>
  <section>
    <h2>{{ title }}</h2>
    <ul class="toc">
      <template v-for="blockObject in fileArray" :key="blockObject.id">
        <li
          v-if="
            (blockObject.type == 'h1') |
              (blockObject.type == 'h2') |
              (blockObject.type == 'h3') |
              (blockObject.type == 'h4')
          "
          :class="blockObject.type"
        >
          <a :href="'#blockId' + blockObject.id">{{ blockObject.content }}</a>
        </li>
      </template>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: "Inhaltsverzeichnis",
    };
  },
  computed: {
    fileArray() {
      return this.$store.state.file;
    },
  },
};
</script>

<style scoped>
.toc {
  list-style-type: none;
  padding: 0 0.5em;
  font-size: 0.75rem;
}
.toc ul {
  padding-left: 1em;
}
.h2 {
  padding-left: 0.75em;
}
.h3 {
  padding-left: 1.5em;
}
.h4 {
  padding-left: 2.25em;
}
</style>