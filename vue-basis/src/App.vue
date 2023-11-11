<template>
  <div>
    <!-- 将值赋给标签 -->
    <h1>{{ msg }}</h1>
    <h2>{{ obj.name }}</h2>
    <h3>{{ obj.age >= 18 ? "成年了" : "未成年" }}</h3>

    <!-- v-bind指令 -->
    <a v-bind:href="url">点击</a>
    <img :src="imgUrl" />
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
      imgUrl:
        "https://uploadstatic.mihoyo.com/ys-obc/2021/12/24/79434666/c7bcb0952b0c6b6d7483dce9f6a3e9c1_2846214008406406765.png",
    };
  },
};
</script>

<style></style>
