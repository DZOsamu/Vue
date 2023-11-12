<template>
  <div>
    <!-- 将值赋给标签 -->
    <h1>{{ msg }}</h1>
    <h2>{{ obj.name }}</h2>
    <h3>{{ obj.age >= 18 ? "成年了" : "未成年" }}</h3>

    <!-- v-bind指令 -->
    <a v-bind:href="url">点击</a>
    <img :src="imgUrl" />

    <!-- v-on指令 -->
    <p>你要购买的商品数量：{{ count }}</p>
    <button v-on:click="count = count + 1">+1</button>
    <button v-on:click="addFn">+1</button>
    <button v-on:click="addCountFn(5)">+5</button>
    <button @click="subFn">-1</button>
  </div>
</template>

<script>
export default {
  // 变量在data函数return的对象上
  data() {
    return {
      msg: "Hello, vue",
      obj: {
        name: "小v",
        age: 5,
      },
      url: "https://www.miyoushe.com/ys/",
      imgUrl:"https://uploadstatic.mihoyo.com/ys-obc/2021/12/24/79434666/c7bcb0952b0c6b6d7483dce9f6a3e9c1_2846214008406406765.png",
      count: 1,
    };
  },
  methods: {
    addFn() {
      // 这里的this指向export default的{}（对象）
      // data函数会把对象挂到当前组件对象上
      this.count++;
    },
    addCountFn(num) {
      this.count = this.count + num;
    },
    subFn() {
      this.count--;
    },
  },
};
</script>

<style></style>
