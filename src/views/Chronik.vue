<template>
  <Navigation />
  <main>
    <p>
      Liste Ereignisse auf: Was ist das Problem (Hypothese)? Was sind die
      Folgen? Was ist/sind die Ursache/n? Wie könnten Lösungen aussehen?
    </p>
    <div class="chronik">
      <template v-for="item in chronik" :key="item.id">
        <section :class="item.class">
          <h2>{{ item.title }}</h2>
          <template v-for="event in events" :key="event.id">
            <section class="event" v-if="item.class == event.class">
              <h3>{{ event.title }}</h3>
              <p>{{ event.content }}</p>
            </section>
          </template>
          <Button v-on:click="addItem(item)" type="primary" icon>{{
            item.buttonText
          }}</Button>
        </section>
      </template>
      <teleport to="#overlayContainer" :disabled="true"> Inhalt </teleport>
      <!-- <Textarea value="Folgen" class="cons" width="60%" height="auto" />
      <Textarea value="Ursachen" class="reas" width="60%" height="auto" />
      <Textarea value="Lösungen" class="solu" width="60%" height="auto" /> -->
    </div>
  </main>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
/* import Textarea from "@/components/Textarea.vue"; */
import Button from "@/components/Button.vue";

export default {
  name: "Hypothese",
  data() {
    return {
      chronik: [
        {
          id: 0,
          class: "prob",
          title: "Problem",
          buttonText: "Problem ergänzen",
          items: [],
        },
        {
          id: 1,
          class: "cons",
          title: "Folgen",
          buttonText: "Folge hinzufügen",
          items: [],
        },
        {
          id: 2,
          class: "reas",
          title: "Ursachen",
          buttonText: "Ursache ergänzen",
          items: [],
        },
        {
          id: 3,
          class: "solu",
          title: "Lösungen",
          buttonText: "Lösung hinzufügen",
          items: [],
        },
      ],
      events: [
        {
          title: "Hypothese",
          class: "prob",
          content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, autem ad! Voluptatum possimus est, architecto nemo, soluta natus ex in commodi quos asperiores eveniet neque reiciendis officia perferendis deserunt porro.",
          date: 20200106,
          actors: [],
        },
      ],
    };
  },
  props: {},
  components: {
    Navigation,
    /* Textarea, */
    Button,
  },
  methods: {
    addItem(eventObject) {
      console.log("Add Item to:");
      console.log(eventObject.class);
      this.$store.dispatch("addItemToChronik", eventObject);
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
}
.chronik {
  display: flex;
  width: 100%;
  overflow: auto;
}
.chronik > section {
  flex: 36% 1 0;
  border-radius: 2rem;
  padding: 1.5rem;
  margin: 1rem 0.5rem;
}
.prob {
  background-color: rgb(206, 205, 159);
  margin-left: 0;
}
.cons {
  background-color: rgb(235, 171, 179);
}
.reas {
  background-color: rgb(249, 185, 138);
}
.solu {
  background-color: rgb(192, 229, 154);
}
.event {
  background-color: rgba(255, 244, 201, 0.2);
  border-radius: 1em;
  padding: 1em;
}
</style>