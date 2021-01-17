<template>
  <router-view />
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
html,
body {
  background: #f6df81;
  font-family: "forma-djr-display", "Helvetica Neue", "Avenir", "Helvetica",
    "Arial", sans-serif;
}
#app {
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
  font-size: 18px;
  padding: 1rem;
  height: calc(100vh - 2rem);
  width: calc(100vw - 2rem);
  /*box-sizing: border-box;*/
}
@media screen and (min-width: 800px) {
  #app {
    padding: 2rem;
    height: calc(100vh - 4rem);
    width: calc(100vw - 4rem);
  }
}

p {
  font-size: 2em;
}

p > a {
  text-decoration: underline 2px solid black;
}

a {
  border: none;
  color: black;
}

/* Transitions */
.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
