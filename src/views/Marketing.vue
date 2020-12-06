<template>
  <Navigation />
  <main>
    <p>
      Hier können (PR-)Überlegungen für die Verbreitung des/der Artikel
      angestellt werden.<br />
      Beispielsweise ließen sich alle als Marketing oder PR verschlagwortete
      Personen hier einblenden.<br />
      Termine die PR-relevant sind könnten eingeblendet werden.<br />
      Es könnte Möglichkeiten für Notizen geben.
    </p>
  </main>
</template>

<script>
import Navigation from "@/components/Navigation.vue";

export default {
  name: "Marketing",
  data() {
    return {
      user: {
        name: "Sören",
      },
      stories: [],
    };
  },
  props: {},
  components: {
    Navigation,
  },
};
</script>