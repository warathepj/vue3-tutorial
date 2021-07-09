<template>
  <h1>Dc Heros</h1>
  <ul>
    <li v-for="(hero, index) in dcHeros" :key="index">
      {{ index }} : {{ hero.name }}
    </li>
  </ul>
  <!--<input v-model.lazy='newHero' type="">-->
  <form @submit.prevent="addHero">
    <input v-model="newHero" placeholder="Type Hero Name Here"/>
    <button type="submit">Add Hero</button>
  </form>
</template>

<script>
export default {
  methods: {
    addHero() {
      if (this.newHero !== "") {
        this.dcHeros.push({ name: this.newHero }); 
        this.newHero = "";
      }
    },
  },

  data() {
    return {
      newHero: "",
      dcHeros: [{ name: "SuperGirl" }, { name: "Flash" }, { name: "Batman" }],
    };
  },
};
</script>

<style></style>
