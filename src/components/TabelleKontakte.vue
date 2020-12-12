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
            <td tabindex="0" v-if="cell.type == 'tags'">
              <Tags :tagsArray="cell.data" />
            </td>
            <td tabindex="0" v-else>{{ cell }}</td>
          </template>
        </tr>
        <!-- <tr v-for="contact in contacts" :key="contact.id">
            <td>{{ contact.lastName }}</td>
            <td>{{ contact.firstName }}</td>
            <td>{{ contact.gender }}</td>
            <td>{{ contact.salutation }}</td>
            <td>{{ contact.nickname }}</td>
            <td>
              <span v-for="group in contact.context" :key="group">
                {{ group }}
              </span>
            </td>
            <td>{{ contact.email }}</td>
            <td>{{ contact.phone }}</td>
            <td>{{ contact.socialMedia }}</td>
            <td>{{ contact.city }}</td>
            <td>{{ contact.postcode }}</td>
            <td>{{ contact.street }}</td>
            <td>{{ contact.houseNumber }}</td>
            <td>{{ contact.adressContext }}</td>
            <td>{{ contact.description }}</td>
            <td>{{ contact.access }}</td>
            <td>{{ contact.imageUrl }}</td>
          </tr> -->
        <tr class="newline" v-if="newLine">
          <td :colspan="sumOfColumns">
            <Button icon type="secondary" @click="addContact()"
              >Hinzufügen</Button
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import Tags from "@/components/Tags.vue";

export default {
  name: "TabelleKontakte",
  props: {
    dataSrc: Array,
    structure: Array,
    newLine: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    sumOfColumns() {
      return this.structure.length;
    },
  },
  methods: {
    addContact() {
      console.log("Method: Add new Contact");
      // Add New Object in State-Contacts-Array
      this.$store.commit("addContact", this.sumOfColumns);
      // Focus in first Cell of new Line
    },
  },
  components: { Button, Tags },
};
</script>

<style scoped>
div {
  overflow-x: auto;
}
table {
  table-layout: auto;

  /*border-collapse: collapse;*/
}
thead td {
  padding: 0.2em;
  white-space: nowrap;
  min-width: 18ch;
}
tbody td {
  padding: 0.2em;
  border: 1px solid black;
}
tbody tr:hover {
  background-color: rgba(255, 244, 201, 0.4);
  transition: background-color 0.3s ease-out;
  border-radius: 1em;
}
</style>