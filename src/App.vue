<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/pokedex">Pokedex</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1b1e20;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c5042;
}

nav a.router-link-exact-active {
  color: #42b9a9;
}
</style>
