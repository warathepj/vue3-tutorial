<template>
  <AppHeader />
  <div class="w-full flex">
    
  </div>
</template>

<script>
import AppHeader from './components/AppHeader';
export default {
  components: { AppHeader },
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
