<template>
  <div>
    <input type="text" v-model="name" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
    };
  },
  // 侦听name值的改变
  watch: {
    name(newVal, oldVal) {
      // newVal 当前最新值
      // oldVal 上一刻的值
      console.log(newVal, oldVal);
    },
  },
};
</script>

<style>
</style>
