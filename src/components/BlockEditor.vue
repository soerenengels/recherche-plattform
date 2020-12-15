<template>
  <article class="blockEditor" @keydown.enter="addBlock($event)">
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
    addBlock(e) {
      console.log("Add Block");
      console.log(e);
    },
  },
  props: {
    dataArray: Array,
  },
  components: {},
};
</script>

<style scoped>
.blockEditor h1 {
  font-size: 2em;
  padding-bottom: 1rem;
}
.blockEditor h2 {
  font-size: 1.5em;
  padding: 1rem 0 0.5rem;
}
.blockEditor p {
  font-size: 1.5em;
  max-width: 65ch;
}
</style>