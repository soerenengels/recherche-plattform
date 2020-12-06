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
  padding: 2rem;
  height: calc(100vh - 4rem);
  width: calc(100vw - 4rem);
  /*box-sizing: border-box;*/
}

p,
a {
  font-size: 2em;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
a {
  text-decoration: none;
  border: none;
  color: black;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
