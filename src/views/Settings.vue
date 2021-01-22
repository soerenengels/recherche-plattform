<template>
  <Navigation />
  <main>
    <LayoutTwoThirds>
      <template #main>
        <header>
          <Title>Settings</Title>
        </header>
        <p>Hier kannst du Einstellungen ändern</p>
        <p>
          <Button type="secondary" @click="loadFromFile()">Story laden</Button>
          <Button type="primary" @click="saveToFile()">Story speichern</Button>
          <Button type="primary" @click="toggleAutosave()">
            Autosave <span v-if="autosave">de</span>aktivieren
          </Button>
        </p>
      </template>
    </LayoutTwoThirds>
  </main>
</template>

<script>
// @ is an alias to /src
import Navigation from "@/components/Navigation.vue";
import Title from "@/components/Title.vue";
import LayoutTwoThirds from "@/components/LayoutTwoThirds.vue";
import Button from "@/components/Button.vue";

export default {
  name: "Settings",
  computed: {
    autosave() {
      return this.$store.state.app.settings.autosave;
    },
  },
  methods: {
    toggleAutosave() {
      this.$store.dispatch("toggleAutosave");
    },
    async loadFromFile() {
      let fileHandle;
      [fileHandle] = await window.showOpenFilePicker();
      const file = await fileHandle.getFile();
      const contents = await file.text();
      // Now the Content must be commited to the Store as new State
      this.$store.commit({ type: "loadFileAsState", fileHandle, contents });
    },
    async saveToFile() {
      const options = {
        types: [
          {
            description: "Text Files",
            accept: {
              "text/plain": [".txt"],
            },
          },
        ],
      };
      const handle = await window.showSaveFilePicker(options);
      this.writeFile(handle, JSON.stringify(this.$store.state));
    },
    async writeFile(fileHandle, contents) {
      console.log("found the function");
      // Create a FileSystemWritableFileStream to write to.
      const writable = await fileHandle.createWritable();
      // Write the contents of the file to the stream.
      await writable.write(contents);
      // Close the file and write the contents to disk.
      await writable.close();
      console.log("done writing!");
    },
  },
  components: {
    Navigation,
    Title,
    LayoutTwoThirds,
    Button,
  },
};
</script>

<style scoped>
a {
  font-size: 1em;
  text-decoration: underline;
}
</style>