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
@media screen and (min-width: 800px) {
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
  .twoThirds p {
    font-size: 1.5em;
  }
}
@media screen and (max-width: 800px) {
  .twoThirds {
    display: flex;
    flex-direction: column-reverse;
  }
}
</style>