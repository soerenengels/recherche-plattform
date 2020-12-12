<template>
  <div class="twoThirds">
    <section>
      <slot name="main"></slot>
    </section>
    <aside>
      <transition appear>
        <slot name="context"> </slot>
      </transition>
    </aside>
  </div>
</template>

<style scoped>
.twoThirds {
  display: flex;
}
.twoThirds > section {
  flex: 50% 2;
  padding-right: 2em;
  overflow-x: scroll;
}
.twoThirds > aside {
  flex: 25% 1;
  font-size: 1rem;
  hyphens: auto;
}
</style>