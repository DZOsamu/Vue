<template>
  <div>
    <p>{{ num }}</p>
    <p>{{ reverseMessage }}</p>
    <p>{{ reverseMessage }}</p>
    <p>{{ getMessage() }}</p>
    <p>{{ getMessage() }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      a: 10,
      b: 20,
      msg: "Hello,Vue",
    };
  },
  methods: {
    getMessage() {
      console.log("函数执行了");
      return this.msg.split("").reverse().join("");
    },
  },
  computed: {
    num() {
      return this.a + this.b;
    },
    reverseMessage() {
      console.log("计算属性执行了");
      return this.msg.split("").reverse().join("");
    },
  },
};
</script>

<style>
</style>