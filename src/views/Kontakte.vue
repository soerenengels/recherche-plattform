<template>
  <Navigation />
  <main>
    <header>
      <Button type="primary" icon="true">Kontakt hinzufügen</Button>
      <Button type="secondary">Filter</Button>
      <input type="search" value="Suche" />
    </header>
    <div>
      <table>
        <thead>
          <tr>
            <td class="fixedColumn">Nachname</td>
            <td>Vorname</td>
            <td>Geschlechtsidentität</td>
            <td>Anrede</td>
            <td>Codename / Spitzname</td>
            <td>Kontext / Gruppe</td>
            <td>E-Mail</td>
            <td>Telefon</td>
            <td>Social Media</td>
            <td>Stadt</td>
            <td>PLZ</td>
            <td>Straße</td>
            <td>Hausnummer</td>
            <td>Adresszusatz</td>
            <td>Notizen</td>
            <td>Sichtbarkeit</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="contact in contacts" :key="contact.id">
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
          </tr>
          <tr class="newline">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
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
  </main>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Button from "@/components/Button.vue";

export default {
  name: "Kontakte",
  data() {
    return {
      contacts: [
        {
          lastName: "Engels",
          firstName: "Sören",
          gender: "cis-männlich",
          salutation: "Herr",
          nickname: "Sören",
          context: ["Recherche-Team"],
          email: "mail@soerenengels.de",
          phone: "+49 1234 657 412 32",
          socialMedia: [
            {
              media: "Twitter",
              handle: "soerenengels",
            },
          ],
          city: "Halle (Saale)",
          postcode: "06108",
          street: "Mansfelder Straße",
          houseNumber: "56",
          adressContext: "",
          description: "",
          access: ["alle"],
          imageUrl: "",
        },
      ],
      stories: [],
    };
  },
  methods: {
    addContact() {
      console.log("Add new Line for Contact and jump focus to line.");
    },
    addFilter() {
      console.log("Open Filter Preferences.");
    },
  },
  props: {},
  components: {
    Navigation,
    Button,
  },
};
</script>

<style scoped>
header {
  display: flex;
}
header input {
  background: none;
  border: none;
  padding: 0.5em;
  font-size: 1em;
  font-family: "forma-djr-display", "Helvetica Neue", "Avenir", "Helvetica",
    "Arial", sans-serif;
}
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
/* .fixedColumn {
  position: absolute;
  left: 0em;
} */
tbody tr {
  height: 3em;
}
tbody tr:hover {
  background-color: rgba(255, 244, 201, 0.4);
  transition: background-color 0.3s ease-out;
  border-radius: 1em;
}
</style>