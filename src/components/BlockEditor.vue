<template>
  <article class="blockEditor">
    <!-- <template v-for="element in dataArray" :key="element.id"> -->
    <draggable
      v-model="dataArray"
      group="file"
      @start="drag = true"
      @end="drag = false"
      item-key="id"
      handle=".blockHandle"
      dragoverBubble="true"
    >
      <template #item="{ element }">
        <section class="block">
          <div class="blockHandle">&#8285;</div>
          <template v-if="element.type == 'h1'">
            <h1
              contenteditable
              :id="'blockId' + element.id"
              @input="updateBlock(element.id, $event.target.innerText)"
            >
              {{ element.content }}
            </h1>
          </template>
          <template v-else-if="element.type == 'h2'">
            <h2
              contenteditable
              draggable
              :id="'blockId' + element.id"
              @input="updateBlock(element.id, $event.target.innerText)"
            >
              {{ element.content }}
            </h2>
          </template>
          <template v-else-if="element.type == 'h3'">
            <h3
              contenteditable
              :id="'blockId' + element.id"
              @input="updateBlock(element.id, $event.target.innerText)"
            >
              {{ element.content }}
            </h3>
          </template>
          <template v-else-if="element.type == 'h4'">
            <h4
              contenteditable
              :id="'blockId' + element.id"
              @input="updateBlock(element.id, $event.target.innerText)"
            >
              {{ element.content }}
            </h4>
          </template>
          <template v-else>
            <!-- <textarea
            contenteditable
            @input="updateBlock(element.id, $event.target.innerText)"
            @keyup.enter="addBlock($event)"
            v-text="element.content"
          > -->
            <textarea
              contenteditable
              draggable
              @keyup.enter="sliceBlock(element.id, $event)"
              @keyup="changeTextareaHeight(this)"
              v-text="element.content"
            >
            </textarea>
          </template>
        </section>
      </template>
    </draggable>
    <!-- </template> -->
  </article>
</template>

<script>
import draggable from "vuedraggable";
export default {
  name: "BlockEditor",
  computed: {
    dataArray: {
      get() {
        return this.$store.state.file;
      },
      set(value) {
        this.$store.commit("updateFileArray", value);
      },
    },
  },
  methods: {
    updateBlock(id, text) {
      const commitObject = {
        type: "updateBlockinFile",
        id,
        text,
      };
      this.$store.commit(commitObject);
    },
    changeTextareaHeight(el) {
      el.style.height = "1px";
      el.style.height = 25 + el.scrollHeight + "px";
    },
    sliceBlock(currentBlockId, e) {
      console.log("Someone pressed Enter!");
      console.log(
        "Current Block with ID of " +
          currentBlockId +
          " should be shortened to first part of String:"
      );
      console.log(e.target.innerHTML.slice(0, e.target.selectionStart - 1));
      this.$store.commit({
        type: "updateBlockinFile",
        id: currentBlockId,
        text: e.target.innerHTML.slice(0, e.target.selectionStart - 1),
      });
      this.$store.commit({
        type: "insertBlockinFile",
        index: currentBlockId + 1,
        obj: {
          id: currentBlockId,
          type: "p",
          content: e.target.innerHTML.slice(
            e.target.selectionStart - 1,
            e.target.innerHTML.length
          ),
        },
      });
    },
  } /*
  props: {
    dataArray: Array,
  },*/,
  components: {
    draggable,
  },
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
.blockEditor textarea {
  background: none;
  border: none;
  font-family: inherit;
  font-size: inherit;
  width: 100%;
  overflow: hidden;
}
.block {
  display: flex;
  z-index: 20;
  align-items: flex-start;
}
.block > * {
}
.blockHandle {
  font-size: 1.5rem;
  padding: 0 0.5rem;
}
</style>