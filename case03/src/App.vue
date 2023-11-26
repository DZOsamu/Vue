<template>
  <div id="app">
    <ul>
      <!-- 点击按钮 改变三个li的顺序 在头上的就到末尾 -->
      <!-- 操作数组里的顺序 v-for就会重新渲染li -->
      <li v-for="item in arr" :key="item">{{ item }}</li>
    </ul>
    <button @click="goFn">走一走</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        "帅哥",
        "美女",
        "程序员",
      ],
    };
  },
  methods: {
    goFn() {
      // 头部数据加入到末尾
      this.arr.push(this.arr[0]);
      // 再把头部的数据删除掉
      this.arr.shift();
    },
  },
};
</script>

<style></style>
