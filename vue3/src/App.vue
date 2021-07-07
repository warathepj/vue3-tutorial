<template>
    <h1>Dc Heros</h1>   
    <ul>
      <li v-for="(hero, index) in dcHeros" :key="index">
        {{ index }} : {{ hero.name }}
      </li>
  </ul>
  <!--<input v-model.lazy='newHero' type="">-->
  <form>
  <input v-model="newHero" />
  <button type="submit">Add Hero</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      
      newHero: 'Hakao',
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
