<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/counter">Counter</router-link>
    </nav>
    <h1>Vue Sample App</h1>
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App'
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

     a {
       background: orange;
       font-size: 15px;
     }
  }
</style>
