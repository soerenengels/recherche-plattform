<template>
  <div class="saveStatus">
    <span v-if="status == 'noFile'" @click="noFile()">No File</span>
    <span v-if="status == 'notSaved'">Last time saved: 30 seconds ago</span>
    <span v-if="status == 'saved'">Saved</span>
  </div>
</template>

<script>
export default {
  name: "SaveStatus",
  computed: {
    status() {
      return this.$store.getters.isSaved
        ? this.$store.getters.isEqualToFile
          ? "saved"
          : "notSaved"
        : "noFile";
    },
  },
  methods: {
    noFile() {
      this.$router.push({ path: "/settings" });
    },
    notSaved() {
      this.$store.dispatch("saveStateToFile");
    },
  },
};
</script>

<style scoped>
/* Needs adjustment on smaller screens */
.saveStatus {
  position: absolute;
  /* color: rgba(0, 0, 0, 0.5); */
  color: hsla(48, 87%, 25%, 0.8);
  font-size: 0.8em;
  top: -1rem;
  right: 0;
  margin: 0;
  padding: 0;
}
.saveStatus:hover {
  cursor: pointer;
}
</style>