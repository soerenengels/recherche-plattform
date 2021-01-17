<template>
  <Navigation />
  <main>
    <LayoutTwoThirds>
      <template v-slot:main>
        <BlockEditor :dataArray="dataFile" />
      </template>
      <template v-slot:context>
        <div class="sidebar">
          <BlockToC />
          <section>
            <h2>{{ $t("file-screen.aside.events") }}</h2>
            <template v-for="event in dataEvents" :key="event.id">
              <Event darkBackground closed :eventObject="event" />
            </template>
          </section>
          <section>
            <h2>{{ $t("file-screen.aside.sources") }}</h2>
            <template v-for="source in dataSources" :key="source.id">
              <!--<Event lightBackground closed :eventObject="source" />-->
              <!-- Add Source-Card -->
              {{ source.description }}
            </template>
          </section>
          <!-- <Button type="primary">Toggle Markdown-Editor</Button> -->
        </div>
      </template>
    </LayoutTwoThirds>
  </main>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import LayoutTwoThirds from "@/components/LayoutTwoThirds.vue";
import BlockEditor from "@/components/BlockEditor.vue";
import BlockToC from "@/components/BlockToC.vue";
/* import Button from "@/components/Button.vue"; */
import Event from "@/components/Event.vue";

export default {
  name: "File",
  computed: {
    dataFile() {
      return this.$store.state.file;
    },
    dataEvents() {
      return this.$store.state.events;
    },
    dataSources() {
      return this.$store.state.sources;
    },
  },
  props: {},
  components: {
    Navigation,
    LayoutTwoThirds,
    BlockEditor,
    BlockToC,
    /* Button, */
    Event,
  },
};
</script>

<style scoped>
.sidebar {
  position: sticky;
  top: 2em;
}
</style>