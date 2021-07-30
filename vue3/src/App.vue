<template>
  <div id="" class="m-auto">
    <h1 class="text-center">Dc Heros {{ herosCount }}</h1>
    
    <ul>
      <li v-for="(hero, index) in dcHeros" :key="hero.name">
        <div>{{ hero.name }} <button v-on:click="remove(index)">x</button></div>
        <input />
      </li>
    </ul>
    <form @submit.prevent="addHero">
      <input v-model="newHero" placeholder="Type Hero Name Here"/>
      <button type="submit">Add Hero</button>
    </form>
  </div>
  
</template>

<script>
export default {
  computed: {
    herosCount () {
      return this.dcHeros.length + 'heros';
    },
   
  },
  methods: {
    addHero() {
      if (this.newHero !== "") {
        this.dcHeros.unshift({ name: this.newHero }); 
        this.newHero = "";
      }
    },
    remove(index) {
      this.dcHeros = this.dcHeros.filter((hero, i) => i != index);
    },
  },

  data() {
    return {
      newHero: "",
      
      dcHeros: [
        { name: "SuperGirl" },
        { name: "Flash" }, 
        { name: "Batman" },
        ],
        
    };
  },
};
</script>

<style></style>
