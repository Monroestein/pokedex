//    がんばれ!  🌻

<template>
    <div> 
    
      <div class="pokedex">

        <div class="circle"></div>

        <!-- Show picture and search input -->
        <div class="pokedex_left">

          <div class="column"></div>

          <!-- Image -->

          <div class="image_container">
            <div class="image">

              <img :src="pokemon.sprite" alt="Pokemon Sprite" v-if="pokemon.sprite!=''">

            </div>
          </div>

          <!-- Search input -->

            <form class="search_area">
              <input type="search" placeholder="Search Pokemon" v-model="searchPokemon"/>
            
              <input type="submit" class="search_button" @click.prevent="fetchPokemon">
              <!-- <button class="search_button" ><i class="fa-solid fa-arrow-right"></i></button> -->
            </form>
  
        </div>

        <!-- Show pokemon information -->
        <div class="pokedex_right">

          <div class="info_section">

            <div class="text" v-if="pokemon.name !=''">
              <p>id: {{ pokemon.id }}</p>
            <h1>{{ pokemon.name }}</h1>
            <p>
                Height: {{ pokemon.height }} 
            <br>Weight: {{ pokemon.weight }} 
            </p>
            <p>Abilities: {{ pokemon.abilities.join(", ") }}.</p>
            <p>Moves: {{ pokemon.moves.join(", ") }}.</p>
            </div>

          </div>

          <div class="blue_thingies">
            <div class="thingie"></div>
            <div class="thingie"></div>
            <div class="thingie"></div>
            <div class="thingie"></div>
            <div class="thingie"></div>
            <div class="thingie"></div>
            <div class="thingie"></div>
            <div class="thingie"></div>
            <div class="thingie"></div>
            <div class="thingie"></div>
          </div>

        </div>

      </div>
        
    </div>
</template>

<script>
export default {
    name: 'pokedex-view',
    // props: {},
    data: function(){
        return {
          searchPokemon:"",
          pokemon:{
            name:"",
            id:0,
            sprite:"",
            weight:0,
            height:0,
            abilities: [],
            moves: []
          }
        }
    },
    // computed: {},
    methods: {
      async fetchPokemon(){
        try{
          const response = await fetch("https://pokeapi.co/api/v2/pokemon/"+this.searchPokemon.toLocaleLowerCase())

          if(!response.ok){
            if(response.status===404){
              alert(`Pokemon escaped.`)
              return
            }
            else {
              throw new Error(`HTTP Error`+ response.status)
            }
          }

          const json = await response.json()

          console.log(json)

          this.addPokemon(json)

        } catch (error) {
          console.log(error)
        }
      },
    addPokemon(pokeData){
      this.pokemon.name = pokeData.name
      this.pokemon.sprite = pokeData.sprites.front_default
      this.pokemon.id = pokeData.id
      this.pokemon.weight = pokeData.weight
      this.pokemon.height = pokeData.height

      pokeData.abilities.forEach((punch)=>{
        punch.ability.name
        // console.log(punch.ability.name)
        this.pokemon.abilities.push(punch.ability.name)
      })

      pokeData.moves.forEach((kick)=>{
        kick.move.name
        this.pokemon.moves.push(kick.move.name)
      })

    },
    async fetchPikachu(){
        try{
          const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")

          if(!response.ok){
            if(response.status===404){
              alert(`Pokemon escaped.`)
              return
            }
            else {
              throw new Error(`HTTP Error`+ response.status)
            }
          }

          const json = await response.json()

          console.log(json)

          this.addPokemon(json)

        } catch (error) {
          console.log(error)
        }
      }
    },
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    created(){
      this.fetchPikachu()
    }
    // -- End Lifecycle Methods
}
</script>

<style scoped>

h1{
  font-weight: 100;
  font-size: 70px;
  margin: .2rem auto;
}
.pokedex{
  margin: 2rem auto;
  height: 70vh;
  width: 60vw;
  /* background: #ad15151c; */
  display: flex;
  align-items: end;
  position: relative;
}

.circle{
  background: #55b8c5;
  border: 4px solid #daf8fc;
  box-shadow: 0px 0px 5px #00000080;
  border-radius: 100%;
  height: 4.375rem;
  width: 4.375rem;
  position: absolute;
  top: 2.5vh;
  left: 2vw;
}

.pokedex_left{
  height: 100%;
  width: 50%;
  border-radius: 40px 5px 3px 40px;
  /* border-right: 10px solid #ca2323; */
  background: #da3636;
  box-shadow: 0px 0px 5px #00000080;
  position: relative;
}

.column{
  position: absolute;
  height: 100%;
  width: 3%;
  background: #9e2525;
  right: 0;
  border-radius: 0 5px 3px 0;
  border-left: 1px solid #00000020;
  box-shadow: -1px 0px 5px #00000080;
}

.image_container{
  background: #f3f3f3;
  box-shadow: 0px 0px 8px #00000080;
  border-radius: 20px;
  margin-top: 8.5rem;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  height: 50%;
  position: relative;
}

.image{
  /* background: #111; */
  border-radius: 20px;
  height: 85%;
  width: 90%;
  box-shadow: inset 0px 0px 8px #00000080;
  position: absolute;
  top: 7%;
  left: 5%;
}

img{
  height: 90%;
}

.search_area{
  margin-top: 2.5rem;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

input{
  background: #c5cf8c;
  padding: 1rem;
}

.search_button{
  font-size: 16px;
  padding: .5rem .7rem;
  border-radius: 20px;
  border: none;
  box-shadow: 0px 0px 5px #00000080;
  background: #fcd450;
  color: #a88616;
  cursor: pointer;
}

/* Right side of Pokedex */

.pokedex_right{
  height: 93%;
  width: 50%;
  background: #da3636;
  border-radius: 5px 40px 40px 5px;
  box-shadow: 0px 0px 5px #00000080;
}

.info_section{
  color: #cfca9d;
  background: rgb(142,135,97);
  background: linear-gradient(163deg, #635e41 13%, rgba(59,53,25,1) 100%);
  box-shadow: inset 0px 0px 8px #00000090;
  height: 50%;
  width: 90%;
  margin: 3rem auto 2.5rem auto;
  border-radius: 10px;
  overflow:auto;
  scrollbar-width: thin;
  scrollbar-color: #444 #222;
}

.text{
  font-family: "Tiny5", sans-serif;
  font-size: 15px;
  line-height: normal;
  text-align: start;
  padding: .9rem;
}

.blue_thingies{
  width: 80%;
  height: 15%;
  /* background: #42b9af; */
  margin: auto;
  border-radius: 5px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 4px 4px;
}



.thingie{
  background: #46dcf0;
  box-shadow: none;
  transition: box-shadow .2s;
  cursor: pointer;
}

.thingie:hover{
  box-shadow: 0px 0px 10px #cff9ff;
}
</style>