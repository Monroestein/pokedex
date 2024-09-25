<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Magnam nisi rem sed similique, quibusdam soluta cumque velit quisquam quod? Facilis magnam repellendus consectetur a, reprehenderit consequuntur blanditiis nisi possimus impedit. Reiciendis et perspiciatis eligendi, aliquam doloribus molestias iure laboriosam ea magnam debitis quos. Autem soluta vero nesciunt asperiores maxime voluptates est a.</p>
    
    <router-link :to="{ path: '/pokedex' }"><button>Go to Pokédex</button></router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hello{
  width: 80%;
  margin: auto
}

button{
  margin: 1.5rem auto;
  padding: .8rem 2rem;
  font-weight: 600;
  color: #42b9af;
  background: #42b9af30;
  border: 1px solid #42b9af50;
  border-radius: 20px;
  cursor: pointer;
}

h1{
  font-size: 60px;
}

a {
  color: #42b9af;
}

</style>
