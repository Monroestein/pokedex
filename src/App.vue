<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/pokedex">Pokedex</router-link> | 
      <a href="https://github.com/Monroestein" target="_blank">GitHub <i class="fa-brands fa-github"></i></a>
    </nav>
    <router-view/>
    <footer>2024 | Monroestein</footer>
  </div>
</template>

<style>
body{
  background: rgb(255, 241, 192);
}
#app {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2e68b3;
  height: 99vh;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #87aad1;
}

nav a.router-link-exact-active {
  color: #448bdb;
}

footer{
  margin-top: .3rem;
  font-size: 10px;
  color: #2e68b370;
}

</style>
