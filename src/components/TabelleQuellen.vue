<template>
  <div>
    <table>
      <thead>
        <tr>
          <td v-for="column in structure" :key="column.value">
            {{ column.value }}
          </td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in dataSrc" :key="row">
          <template v-for="cell in row" :key="cell">
            <td
              v-if="
                (cell.type == 'prob') |
                  (cell.type == 'cons') |
                  (cell.type == 'reas') |
                  (cell.type == 'solu')
              "
              class="stickyColumn"
            >
              <Event darkBackground :eventObject="cell" />
            </td>
            <td v-else-if="cell == ''">
              <Button type="secondary">Quelle eintragen</Button>
            </td>
            <td v-else>{{ cell }}</td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Event from "@/components/Event.vue";
import Button from "./Button.vue";

export default {
  name: "TabelleQuellen",
  props: {
    dataSrc: Array,
    structure: Array,
    newLine: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    Event,
    Button,
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
thead td {
  padding: 0.2em;
  white-space: nowrap;
  min-width: 18ch;
  background: #f6df81;
}
tbody td {
  padding: 0.2em;
}
tbody tr:hover {
  background-color: rgba(255, 244, 201, 0.4);
  transition: background-color 0.3s ease-out;
  border-radius: 1em;
}
tr td:first-of-type {
  position: sticky;
  left: 0;
}
</style>