<template>
  <nav>
    <ul>
      <template v-for="item in navigation" :key="item.text">
        <li :class="{ push: item.push }">
          <router-link :to="item.link">{{ item.text }}</router-link>
        </li>
      </template>
    </ul>
    <SaveStatus />
  </nav>
</template>

<script>
import SaveStatus from "@/components/SaveStatus.vue";
export default {
  name: "Navigation",
  data() {
    return {};
  },
  components: {
    SaveStatus,
  },
  computed: {
    navigation() {
      return [
        {
          text: this.$t("Navigation.hypothesis"),
          link: "/hypothese",
        },
        {
          text: this.$t("Navigation.chronicles"),
          link: "/chronik",
        },
        {
          text: this.$t("Navigation.sources"),
          link: "/quellen",
        },
        {
          text: this.$t("Navigation.file"),
          link: "/file",
        },
        {
          text: this.$t("Navigation.topic"),
          link: "/thema",
          push: true,
        },
        {
          text: this.$t("Navigation.marketing"),
          link: "/marketing",
        },
        {
          text: this.$t("Navigation.calendar"),
          link: "/kalendar",
        },
        {
          text: this.$t("Navigation.contacts"),
          link: "/kontakte",
        },
        {
          text: "≡",
          link: "/settings",
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
  position: relative;
}
ul {
  display: flex;
  overflow-y: auto;
  height: 100%;
}
li {
  padding-right: 1em;
  list-style-type: none;
}
li:last-of-type {
  padding-right: 0;
}
/* https://developer.mozilla.org/de/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container#using_auto_margins_for_main_axis_alignment */
.push {
  margin-left: auto;
}
a {
  font-size: 2em;
  font-weight: 400;
  padding: 0;
  text-decoration: none;
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