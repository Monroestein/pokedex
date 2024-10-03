import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pokemon:{
      name:"",
      id:0,
      sprite:"",
      weight:0,
      height:0,
      abilities: [],
      moves: []
    }
  },
  getters: {
  },
  mutations: {
    colocarNombre:(state, pokeData)=>{
        state.pokemon.name = pokeData.name
        state.pokemon.sprite = pokeData.sprites.front_default
        state.pokemon.id = pokeData.id
        state.pokemon.weight = pokeData.weight
        state.pokemon.height = pokeData.height

        pokeData.abilities.forEach((punch)=>{
          punch.ability.name
          // console.log(punch.ability.name)
          state.pokemon.abilities.push(punch.ability.name)
        })

        pokeData.moves.forEach((kick)=>{
          kick.move.name
          state.pokemon.moves.push(kick.move.name)
        })
    }
  },
  actions: {
    catchPokemon:async ({commit}, id_name)=>{
      try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/"+id_name.toLowerCase())

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

        // console.log(json)

        commit('colocarNombre', json)

      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {
  }
})
