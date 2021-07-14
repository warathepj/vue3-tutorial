<template>
  <h1>Dc Heros {{ herosCount }}</h1>
  <p>{{ randC }}</p>
  <p>{{ randM() }}</p>
  <ul>
    <li v-for="(hero, index) in dcHeros" :key="index">
      {{ hero.name }}
    </li>
  </ul>
  <!--<input v-model.lazy='newHero' type="">-->
  <form @submit.prevent="addHero">
    <input v-model="newHero" placeholder="Type Hero Name Here"/>
    <button type="submit">Add Hero</button>
  </form>
  <small>Total Heros in the list is {{ herosCount }}</small>
</template>

<script>
export default {
  computed: {
    herosCount () {
      return this.dcHeros.length + 'heros';
    },
    // randC() {
    //   return Math.random();
    // },
  },
  methods: {
    addHero() {
      if (this.newHero !== "") {
        this.dcHeros.unshift({ name: this.newHero }); 
        this.newHero = "";
      }
    },
    randM() {
      return Math.random();
    },
  },

  data() {
    return {
      newHero: "",
      fname: "Jiant",
      lname: "Jamsri",
      dcHeros: [
        { name: "SuperGirl" },
        { name: "Flash" }, 
        { name: "Batman" },
        ],
        // eslint-disable-next-line no-undef
        //herosCount: this.dcHeros.length,
    };
  },
};
</script>

<style></style>
