<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p id="desc">
      {{ description.esp }}
    </p>
    <p>
      <button class="langButton" @click="englishVersion" v-if="!ButtonPressed">ENG</button>
      <button class="langButton" @click="spanishVersion" v-if="ButtonPressed">ESP</button></p>
    
    <router-link :to="{ path: '/pokedex' }"><button>Go to Pokédex</button></router-link>

    <div id="parade">
      aAbBcCd<span>D</span>eEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: function(){
    return{
      description:{
        esp:"¡Hola! Este es un proyecto para un curso de Desarrollo Front-end, en el que teníamos que utilizar la API de Pokémon (PokéAPI) para mostrar la información en nuestra propia página. Quise hacer la pokédex del anime usando CSS. Espero les guste.",
        eng:"Hi there! This is a project for a Front-end Development bootcamp, in which we had to use the Pokémon API (PokéAPI) to show the information in our own websites. I wanted to make the pokédex from the anime using CSS. Hope you like it."
      },
      ButtonPressed:false,
    }
  },
  methods:{
    englishVersion(){
      let en = this.description.eng
      document.getElementById('desc').innerHTML=en
      this.ButtonPressed = true;
    },
    spanishVersion(){
      let es = this.description.esp
      document.getElementById('desc').innerHTML=es
      this.ButtonPressed = false;
    },
  }
}
</script>


<style scoped>

span{
  margin: 0 .5rem;
}

.hello{
  width: 100%;
  height: 85vh;
  margin: auto;
  position: relative;
}

button{
  margin: 1.5rem auto 0 auto;
  padding: .8rem 2rem;
  font-weight: 600;
  color: #258fd6;
  background: #499be730;
  border: 1px solid #42b9af50;
  border-radius: 20px;
  cursor: pointer;
}

.langButton{
  padding: .3rem .7rem;
  font-weight: normal;
  font-size: .6rem;
  color: #000;
  background: #00000010;
  border: none;
  margin: 1rem auto;
}

h1{
  font-family: 'Poke', Verdana, Geneva, Tahoma, sans-serif;
  font-size: clamp(4rem, 5vw, 6rem);
  letter-spacing: 4px;
  margin-bottom: -1rem;
  margin-top: 0;
  color: #ffcc00;
  -webkit-text-stroke: 2px #2e68b3;
  text-shadow: 10px 10px 5px #00000030;
}

a {
  color: #42b9af;
}

#desc{
  width: 70%;
  margin: 0 auto;
  max-width: 800px;
}

@font-face {
  font-family: 'Poke';
  src: url(../assets/font/Pokemon\ Solid.ttf);
}

#parade{
  font-family: 'Parade', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  position: absolute;
  font-size: 8rem;
  letter-spacing: 15px;
  overflow-x: hidden visible;
  bottom: 0;
  width: 100%;
  opacity: 40%;
  animation: news-scroll 90s linear infinite;
  margin-bottom: 0;
}

@font-face {
  font-family: 'Parade';
  src: url(../assets/font/poke.ttf);
}

@keyframes news-scroll {
  0% {
    transform: translateX(1%);
  }
  100% {
    transform: translateX(-100%);
  }
}

</style>
