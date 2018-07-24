<template>
  <div id="notfound">
    <h2>404</h2>
    <p>{{something}}</p>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  data() {
    return { something: 'Not found.' };
  },
  mounted() {
    console.log('not found!');
  }
};
</script>

<style lang="scss">
#notfound {
  h2 {
    color: lightskyblue;
  }
  p {
    color: lightpink;
  }
}
</style>
