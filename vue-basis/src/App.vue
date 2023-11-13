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

    <!-- vue事件 -->
    <a @click="one" href="http://www.baidu.com">百度</a>
    <a @click="two(10, $event)" href="http://www.taobao.com">淘宝</a>

    <!-- v-on修饰符 -->
    <div @click="fatherFn">
      <p @click.stop="oneFn">.stop - 阻止事件冒泡</p>
      <a href="http://www.baidu.com" @click.prevent>百度</a>
      <!-- 点击“百度”后 页面不跳转 但fatherFn仍然执行 -->
      <!-- 想要同时阻止默认行为和事件冒泡 可以写成@click.prevent.stop -->
      <p @click.once="twoFn">点击观察事件处理函数执行几次</p>
      <!-- 事件处理函数只执行一次 但是每次点击 事件仍然执行 -->

      <!-- v-on按键修饰符 -->
      <input type="text" @keydown.enter="enterFn" />
      <input type="text" @keydown.esc="escFn" />
    </div>
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

    one(e) {
      e.preventDefault(); // 阻止默认行为
    },
    two(num, e) {
      e.preventDefault(); // 阻止默认行为
    },

    fatherFn() {
      console.log("father - 触发click事件");
    },
    oneFn() {
      console.log("点击了p标签");
    },
    twoFn() {
      console.log("p标被点击了");
    },

    enterFn() {
      console.log("用户按下了回车");
    },
    escFn() {
      console.log("用户按下了返回");
    },
  },
};
</script>

<style></style>
