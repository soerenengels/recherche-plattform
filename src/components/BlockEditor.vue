<template>
  <article>
    <template v-for="blockObject in dataArray" :key="blockObject.id">
      <template v-if="blockObject.type == 'h1'">
        <h1
          contenteditable
          :id="'blockId' + blockObject.id"
          @input="updateBlock(blockObject.id, $event.target.innerText)"
        >
          {{ blockObject.content }}
        </h1>
      </template>
      <template v-else-if="blockObject.type == 'h2'">
        <h2
          contenteditable
          :id="'blockId' + blockObject.id"
          @input="updateBlock(blockObject.id, $event.target.innerText)"
        >
          {{ blockObject.content }}
        </h2>
      </template>
      <template v-else-if="blockObject.type == 'h3'">
        <h3
          contenteditable
          :id="'blockId' + blockObject.id"
          @input="updateBlock(blockObject.id, $event.target.innerText)"
        >
          {{ blockObject.content }}
        </h3>
      </template>
      <template v-else-if="blockObject.type == 'h4'">
        <h4
          contenteditable
          :id="'blockId' + blockObject.id"
          @input="updateBlock(blockObject.id, $event.target.innerText)"
        >
          {{ blockObject.content }}
        </h4>
      </template>
      <template v-else>
        <p
          contenteditable
          @input="updateBlock(blockObject.id, $event.target.innerText)"
        >
          {{ blockObject.content }}
        </p>
      </template>
    </template>
  </article>
</template>

<script>
export default {
  name: "BlockEditor",
  methods: {
    updateBlock(id, text) {
      const commitObject = {
        type: "updateBlockinFile",
        id,
        text,
      };
      this.$store.commit(commitObject);
    },
  },
  props: {
    dataArray: Array,
  },
  components: {},
};
</script>

<style scoped>
</style>