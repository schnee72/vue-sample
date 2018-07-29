<template>
  <div id="counter">
    <h2>counter</h2>
    <p>{{ something }}</p>
    <div>{{ $store.state.count }}</div>
    <div>{{ evenOrOdd }}</div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementAsync">Increment async</button>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";

  export default {
    name: "Counter",
    data() {
      return { something: "This is a counter!" };
    },
    computed: mapGetters(["evenOrOdd"]),
    mounted() {
      console.log("counter!");
    },
    methods: mapActions(["increment", "decrement", "incrementAsync"])
  };
</script>

<style lang="scss">
  #about {
     h2 {
       color: lightcyan;
    }
    p {
      color: lightskyblue;
    }
  }
</style>
