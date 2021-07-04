<template>
  <h1>Dc Heros</h1>
  <ul>
    <li v-for="(hero, index) in dcHeros" v-bind:key="index">{{ index }} : {{ hero.name }}</li>


    
  </ul>
  <input v-bind:value='newHero' type="">
  <button>Add Hero</button>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      newHero: 'Superman',
      dcHeros: [ 
        { name: 'SuperGirl' },
        { name: 'Flash' },
        { name: 'Batman'},
      ],
    }
  }
}
</script>

<style>

</style>
