<template>
  <teleport to="#overlayContainer" :disabled="false">
    <div v-if="modalVisible" class="modal" @blur="modalClose()">
      <slot></slot>
      <span class="closeModal" @click="modalClose()">X</span>
    </div>
  </teleport>
</template>

<script>
// import Button from "@/components/Button.vue";
export default {
  props: {
    visible: Boolean,
  },
  computed: {
    modalVisible() {
      return this.$props.visible;
    },
  },
  methods: {
    modalClose() {
      console.log("close!");
      this.modalVisible = false;
    },
  },
  //components: { Button },
};
</script>

<style scoped>
.modal::before {
  background: rgba(255, 255, 255, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: "";
}
.closeModal {
  /* content: "X"; */
  background-color: rgba(255, 255, 255, 0.5);
  height: 2em;
  width: 2em;
  border-radius: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -1em;
  left: calc(100% - 2em);
  cursor: pointer;
}
.modal {
  position: absolute;
  z-index: 10;
  top: 25%;
  left: 25%;
  height: 50%;
  width: 50%;
  background-color: rgb(235, 171, 179);
  padding: 1em;
  font-size: 2em;
  border-radius: 1em;
}
</style>