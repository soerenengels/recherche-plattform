<template>
  <router-view />
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  background: #f6df81;
  font-family: "Helvetica Neue", "Avenir", "Helvetica", "Arial", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
  font-size: 16px;
  padding: 2rem;
  height: 100vh;
  box-sizing: border-box;
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
.router-link {
  text-decoration: none;
  border: none;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
