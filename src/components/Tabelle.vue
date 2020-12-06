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
        <tr v-for="item in dataSrc" :key="item.id">
          <td>{{ item.url }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.author }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.actor }}</td>
          <td>{{ item.published }}</td>
          <td>
            <ul class="tags">
              <li v-for="tag in item.tags" :key="tag">
                <span :style="'background-color: ' + tag.color">{{
                  tag.value
                }}</span>
              </li>
            </ul>
          </td>
          <td>{{ item.files }}</td>
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
  components: {},
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
.tags {
  list-style-type: none;
}
.tags span {
  border-radius: 1em;
  padding: 0.5em;
  cursor: pointer;
}
</style>