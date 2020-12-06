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
            <td v-if="typeof cell == 'object'">
              <Event :eventObject="cell" />
            </td>
            <td v-else>{{ cell }}</td>
          </template>
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
import Event from "@/components/Event.vue";

export default {
  name: "Tabelle",
  props: {
    dataSrc: Array,
    structure: Array,
    newLine: {
      type: Boolean,
      default: true,
    },
  },
  components: { Event },
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
}
tbody td {
  padding: 0.2em;
}
tbody tr:hover {
  background-color: rgba(255, 244, 201, 0.4);
  transition: background-color 0.3s ease-out;
  border-radius: 1em;
}
</style>