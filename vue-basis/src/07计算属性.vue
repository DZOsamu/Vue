<template>
  <div>
    <p>{{ num }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: 10,
      b: 20,
    };
  },

  // 计算属性：
  // 场景：一个变量的值，需要用另外的变量计算得到
  // 注意：计算属性也是vue变量，所以不能和data里的重名，用法和data相同
  /*语法：
    computed: {
      计算属性名() {
        return 值
      }
    }
  */
  computed: {
    num() {
      return this.a + this.b;
    },
  },
};
</script>

<style>
</style>