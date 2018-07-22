<template>
  <div>
    <p>hello world!</p>
    <p>{{something}}</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return { something: "This is some text!" };
  },
  mounted() {
    console.log("Hello World!");
    console.log(process.env.NODE_ENV);
  }
};
</script>

<style lang="scss">
p {
  color: lightcoral;
}
</style>
