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
    return {};
  },
  computed: {
    navigation() {
      return [
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
        {
          text: "File",
          link: "/file",
        },
        {
          text: "Thema",
          link: "/thema",
        },
        {
          text: "Marketing",
          link: "/marketing",
        },
        {
          text: "Kalendar",
          link: "/kalendar",
        },
        {
          text: "Kontakte",
          link: "/kontakte",
        },
      ];
    },
  },
};
</script>

<style scoped>
nav {
  width: 100%;
  margin-bottom: 0.5rem;
  height: 3rem;
}
ul {
  display: flex;
  overflow-y: scroll;
  height: 100%;
}
li {
  padding-right: 1em;
  list-style-type: none;
}
a {
  font-size: 2em;
  font-weight: 400;
  padding: 0;
}

.router-link-active {
  font-weight: bold;
  border-bottom: 0.1em solid black;
}
a:hover {
  border-bottom: 0.1em solid black;
  transition: border-bottom 0.3s ease;
}
</style>