<template>
  <div id="about">
    <h2>about</h2>
    <p>{{something}}</p>
    <div>{{ $store.state.count }}</div>
    <div>{{ evenOrOdd }}</div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">Increment async</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'About',
  data() {
    return { something: 'This is about something!' };
  },
  computed: mapGetters([
    'evenOrOdd'
  ]),
  mounted() {
    console.log('about!');
  },
  methods: mapActions([
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync'
  ])
};
</script>

<style lang="scss">
#about {
  h2 {
    color: lightyellow;
  }
  p {
    color: lightseagreen;
  }
}
</style>
