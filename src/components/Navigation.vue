<template>
  <nav>
    <ul>
      <template v-for="item in navigation" :key="item.text">
        <li :class="{ push: item.push }">
          <router-link :to="item.link">{{ item.text }}</router-link>
        </li>
      </template>
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
          push: true,
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
  margin-bottom: 1.5rem;
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
/* https://developer.mozilla.org/de/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container#using_auto_margins_for_main_axis_alignment */
.push {
  margin-left: auto;
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