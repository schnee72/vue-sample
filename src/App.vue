<template>
  <div id="app">
    <h1>Vue Sample App</h1>
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld
  }
};
</script>

<style lang="scss">
body {
  background: darkslategray;
  color: lightgray;
  font-family: monospace;

  p {
    font-size: 16px;
    font-weight: bold;
  }
}
</style>
