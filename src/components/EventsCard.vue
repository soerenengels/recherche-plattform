<template>
  <transition appear>
    <section :class="sectionTypeObject.type">
      <h2>{{ sectionTypeObject.title }}</h2>
      <Event
        v-for="eventObject in eventObjectsByType"
        :key="eventObject.id"
        :eventObject="eventObject"
        lightBackground
      />
      <Button @click="addItem(item)" type="primary" icon>
        {{ sectionTypeObject.buttonText }}
      </Button>

      <Modal v-if="modalVisible">
        Titel bearbeiten<br />
        Textarea bearbeiten<br />
        Datum bearbeiten<br />
        Akteur:innen bearbeiten<br />
        <Event />
      </Modal>
    </section>
  </transition>
</template>

<script>
import Event from "@/components/Event.vue";
import Button from "@/components/Button.vue";
import Modal from "@/components/Modal.vue";

export default {
  name: "EventsCard",
  props: {
    sectionTypeObject: Object,
  },
  data() {
    return {
      modalVisible: false,
    };
  },
  methods: {
    addItem(/* eventObject */) {
      this.modalVisible = true;
      const sampleObject = {
        id: this.$store.state.events.length + 1,
        title: "Sample Event",
        type: this.sectionTypeObject.type,
        content:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, autem ad! Voluptatum possimus est, architecto nemo, soluta natus ex in commodi quos asperiores eveniet neque reiciendis officia perferendis deserunt porro.",
        date: 20200106,
        actors: [],
      };
      console.log("Add Item to: " + this.sectionTypeObject.type);
      this.$store.dispatch("addItemToChronik", { event: sampleObject });
    },
  },
  computed: {
    getEvents() {
      return this.$store.getters.getEvents;
    },
    eventObjectsByType() {
      const filteredEvents = this.getEvents.filter(
        (event) => event.type == this.sectionTypeObject.type
      );
      return filteredEvents;
    },
  },
  components: {
    Event,
    Button,
    Modal,
  },
};
</script>

<style scoped>
.prob,
.cons,
.reas,
.solu {
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
.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>