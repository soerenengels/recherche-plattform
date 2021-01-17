<template>
  <main>
    <LayoutTwoThirds>
      <template #main>
        <header>
          <Title>{{ $t("home-screen.title") }}</Title>
        </header>
        <p>
          {{ $t("home-screen.greeting") }}
        </p>
        <p v-html="$t('home-screen.message')"></p>
        <p>
          <router-link to="/hypothese">{{
            $t("home-screen.start-research")
          }}</router-link>
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