<template>
  <div>
    <table>
      <thead>
        <tr>
          <td>
            {{ title }}
          </td>
          <td>
            <Button type="primary" icon>Add</Button>
            <ButtonFilter :structure="structure" />
          </td>
        </tr>
        <tr>
          <td v-for="column in structure" :key="column.value">
            {{ column.value }}
          </td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in dataSrc" :key="item.id">
          <td><BlockURL :anchorObject="item.url" /></td>
          <td><BlockText :blockObject="item.title" /></td>
          <td><BlockText :blockObject="item.author" /></td>
          <td><BlockText :blockObject="item.description" /></td>
          <td>
            <Tags :tagsArray="item.actor" />
          </td>

          <td>{{ item.published }}</td>
          <td>
            <Tags :tagsArray="item.tags" />
          </td>
          <td><BlockFiles :fileArray="item.files" /></td>
        </tr>
        <tr class="newline" v-if="newLine">
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import ButtonFilter from "@/components/ButtonFilter.vue";
import Tags from "@/components/Tags.vue";
import BlockURL from "@/components/BlockURL.vue";
import BlockText from "@/components/BlockText.vue";
import BlockFiles from "@/components/BlockFiles.vue";

export default {
  name: "Tabelle",
  props: {
    dataSrc: Array,
    structure: Array,
    newLine: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: "Beispiel",
    },
  },
  components: {
    Button,
    ButtonFilter,
    Tags,
    BlockURL,
    BlockText,
    BlockFiles,
  },
};
</script>

<style scoped>
div {
  overflow-x: auto;
}
table {
  table-layout: auto;
  border-collapse: collapse;
}
td {
  vertical-align: top;
}
td p,
td a {
  font-size: 1rem;
}
thead td {
  padding: 0.2em;
  white-space: nowrap;
  min-width: 18ch;
}
tbody td {
  padding: 0.2em;
}
tbody tr:hover,
tbody tr:focus-within {
  background-color: rgba(255, 244, 201, 0.4);
  transition: background-color 0.3s ease-out;
  border-radius: 1em;
}
.tags {
  list-style-type: none;
}
.tags span {
  border-radius: 1em;
  padding: 0.5em;
  cursor: pointer;
}
</style>