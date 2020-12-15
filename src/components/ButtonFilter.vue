<template>
  <Button
    style="position: relative"
    type="secondary"
    @click="modalVisible = true"
  >
    Filter
    <div v-if="modalVisible" class="modal" @blur="toggleFilter()">
      <h2>Ein Filter-Modal</h2>
      <ul>
        <li v-for="(filter, i) in filterArray" :key="filter.id">
          <span>Wo</span>
          <!-- Filter die Eigenschaft ... -->
          <select
            name="property"
            id="property"
            placeholder="Eigenschaft"
            aria-label="Eigenschaft"
          >
            <option
              v-for="item in structure"
              :key="item.value"
              :value="item.value"
              v-text="item.value"
            ></option>
          </select>
          <!-- ... jenachdem, ob sie den Wert X ... (z.B. enthält) -->
          <select
            name="modifiers"
            id="modifiers"
            placeholder="Modifizierung"
            aria-label="Modifizierung"
          >
            <option
              v-for="item in modifiers"
              :key="item.value"
              :value="item.value"
              v-text="item.value"
            ></option>
          </select>
          <!-- Der Wert X -->
          <input type="text" v-model="filter.filterValue" />
          <Button type="tertiary" @click="deleteFilter(i)">X</Button>
        </li>
        <li>
          <Button type="primary" @click="addFilter()">Filter hinzufügen</Button>
        </li>
      </ul>
    </div>
  </Button>
</template>

<script>
import Button from "@/components/Button.vue";
import { ref } from "vue";
export default {
  name: "ButtonFilter",
  props: {
    structure: Array,
  },
  setup() {
    // filter-modal visibility
    const modalVisible = ref(false);
    const toggleFilter = () => {
      modalVisible.value = !modalVisible.value;
      // modalVisible.value = true;
    };

    // filter
    // TO DO: convert to empty Array
    const filterArray = ref([
      {
        id: 0,
        filterColumn: "Filter-Spalte",
        filterModifier: "contains",
        filterValue: "Value",
      },
      {
        id: 1,
        filterColumn: "Filter-Spalte",
        filterModifier: "contains",
        filterValue: "Value",
      },
    ]);

    // example filter object as "empty" Object to add on addFilter()
    const exampleFilterObject = {
      id: filterArray.value.length,
      filterColumn: "Filter-Spalte",
      filterModifier: "contains",
      filterValue: "Value",
    };

    // add filter
    const addFilter = () => {
      // TO DO: change exampleFilterObject to empty FilterObject
      const filterObject = exampleFilterObject;
      filterArray.value.push(filterObject);
    };

    // update filter

    // delete filter
    const deleteFilter = (index) => {
      filterArray.value.splice(index, 1);
    };

    // modifier
    const modifiers = [
      { value: "Contains" },
      { value: "Contains not" },
      { value: "Is" },
      { value: "Is not" },
      { value: "Is Empty" },
      { value: "Is not Empty" },
    ];

    return {
      modalVisible,
      toggleFilter,
      filterArray,
      deleteFilter,
      addFilter,
      modifiers,
    };
  },
  components: {
    Button,
  },
};
</script>

<style scoped>
.modal {
  position: absolute;
  top: 2.5em;
  left: 0;
  padding: 0.75em;
  min-width: 16em;
  height: auto;
  border-radius: 1em;
  background: rgba(255, 255, 255, 0.8);
}
.modal h2 {
  font-size: 1rem;
}
.modal ul {
  list-style-type: none;
}
</style>