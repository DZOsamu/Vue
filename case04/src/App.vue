<template>
  <div id="app">
    <ul>
      <li v-for="(item, ind) in arr" :key="item">
        <span>{{ item }}</span>
        <button @click="del(ind)">删除</button>
      </li>
    </ul>
    <button @click="add">生成</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [1, 5, 3],
    };
  },
  methods: {
    add() {
      this.arr.push(Math.floor(Math.random() * 20));
      // floor(x) 对x进行下舍入，返回小于等于x的最大整数
      // random() 返回0~1之间的随机数
      // random()*20 返回0~20之间的随机数
    },
    del(index) {
      this.arr.splice(index, 1);
    },
  },
};
</script>

<style></style>
