<template>
  <div id="home">
    <p>hello world!</p>
    <p>{{something}}</p>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return { something: 'This is some text!' };
    },
    mounted() {
      console.log('Hello World!');
    }
  };
</script>

<style lang="scss">
  #home {
    p {
      color: lightcoral;
    }
  }
</style>
