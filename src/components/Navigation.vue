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
}
ul {
  display: flex;
  margin-bottom: 1rem;
  overflow: scroll;
}
li {
  padding-right: 1em;
  list-style-type: none;
  font-size: 1em;
}
a {
  font-weight: 400;
}
.router-link-active {
  font-weight: bold;
}
</style>