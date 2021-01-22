<template>
  <main>
    <LayoutTwoThirds>
      <template #main>
        <header>
          <Title>{{ $t("home-screen.title") }}</Title>
        </header>
        <p>
          <strong>{{ $t("home-screen.greeting") }}</strong>
        </p>
        <p v-html="$t('home-screen.message')"></p>
        <p>
          <router-link to="/hypothese">{{
            $t("home-screen.start-research")
          }}</router-link>
        </p>
        <p>
          <button @click="loadFromFile()">Story laden</button>
        </p>
      </template>
      <template #context>
        <router-link to="/hypothese" class="rarr">&rarr;</router-link>
      </template>
    </LayoutTwoThirds>
  </main>
</template>

<script>
// @ is an alias to /src
import Title from "@/components/Title.vue";
import LayoutTwoThirds from "@/components/LayoutTwoThirds.vue";

export default {
  name: "Home",
  methods: {
    async loadFromFile() {
      let fileHandle;
      [fileHandle] = await window.showOpenFilePicker();
      const file = await fileHandle.getFile();
      const contents = await file.text();
      // Now the Content must be commited to the Store as new State
      this.$store.commit("loadFileAsState", contents);
    },
  },
  components: {
    Title,
    LayoutTwoThirds,
  },
};
</script>

<style scoped>
a {
  font-size: 1em;
  text-decoration: underline;
}
.rarr {
  font-size: 15rem;
  content: "&rarr";
  width: 15rem;
  height: 15rem;
  padding: 2.5rem;
  position: absolute;
  bottom: 3rem;
  right: 3rem;
  background-color: rgb(249, 185, 138);
  text-decoration: none;
  border-radius: 10rem;
}
</style>