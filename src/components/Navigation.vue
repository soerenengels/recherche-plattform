<template>
  <nav>
    <ul>
      <li v-for="item in navigation" :key="item.text">
        <router-link :to="item.link">{{ item.text }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      navigation: [
        {
          text: "Hypothese",
          link: "/hypothese",
        },
        {
          text: "Chronik",
          link: "/chronik",
        },
        {
          text: "Quellen",
          link: "/quellen",
        },
      ],
    };
  },
};
</script>

<style scoped>
ul {
  display: flex;
}
li {
  padding-right: 1em;
  list-style-type: none;
  font-size: 2em;
}
</style>