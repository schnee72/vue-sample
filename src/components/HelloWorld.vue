<template>
  <div>
    <p>hello world!</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  mounted() {
    console.log("hello world!");
    console.log(process.env.NODE_ENV);
  }
};
</script>

<style lang="scss">
p {
  color: yellowgreen;
}
</style>
