<template>
  <div>
    <input type="text" v-model="user.name" />
    <input type="text" v-model="user.age" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "",
        age: 0,
      },
    };
  },
  // 侦听对象
  watch: {
    user: {
      handler(newVal, oldVal) {
        console.log(newVal, oldVal);
      },
      deep: true, // 深度侦听
      immediate: true, // 立即侦听（网页打开handler执行一次）
    },
  },
};
</script>

<style>
</style>
