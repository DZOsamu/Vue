<template>
  <div>
    <!-- 将值赋给标签 -->
    <h1>{{ msg }}</h1>
    <h2>{{ obj.name }}</h2>
    <h3>{{ obj.age >= 18 ? "成年了" : "未成年" }}</h3>

    <!-- v-bind指令 -->
    <a v-bind:href="url">点击</a>
    <img :src="imgUrl" />
    <img :src="localImg" />

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

    <!-- v-model -->
    <span>用户名：</span>
    <input type="text" v-model="username" />
    <span>密码：</span>
    <input type="password" v-model="password" />
    <div>
      <span>来自于：</span>
      <!-- 下拉菜单要绑定在select上 -->
      <select v-model="from">
        <option value="北京市">北京</option>
        <option value="南京市">南京</option>
        <option value="天津市">天津</option>
      </select>

      <!-- 复选框要注意！！！ -->
      <!-- v-model的vue变量 如果是非数组的形式 关联的是复选框的checked属性 -->
      <!-- v-model的vue变量 如果是数组的形式 关联的是复选框的value属性 -->
      <div>
        <span>角色：</span>
        <input type="checkbox" value="枫原万叶" v-model="hobby" />枫原万叶
        <input type="checkbox" value="魈" v-model="hobby" />魈
        <input type="checkbox" value="流浪者" v-model="hobby" />流浪者
      </div>

      <div>
        <span>性别：</span>
        <input type="radio" name="sex" value="男" v-model="gender" />男
        <input type="radio" name="sex" value="女" v-model="gender" />女
      </div>

      <div>
        <span>自我介绍</span>
        <textarea v-model="intro"></textarea>
      </div>

      <!-- v-model修饰符 -->
      <div>
        <span>年龄：</span>
        <input type="number" v-model.number="age" />
      </div>

      <div>
        <span>人生格言：</span>
        <input type="text" v-model.trim="motto" />
      </div>

      <div>
        <span>个人简介：</span>
        <textarea v-model.lazy="introo"></textarea>
        <!-- 失去焦点时，把内容同步给v-model变量 -->
      </div>
    </div>

    <!-- v-text 和 v-html -->
    <div>
      <p v-text="str"></p>
      <p v-html="str"></p>
      <p>{{ 10 + 20 }}</p>
    </div>

    <!-- v-show 和 v-if -->
    <div>
      <h1 v-show="isOk">我是h1标签</h1>
      <h2 v-if="isOk">我是h2标签</h2>
    </div>

    <!-- v-if 和 v-else -->
    <div>
      <p v-if="age < 18">未成年</p>
      <p v-else>成年了</p>
    </div>
  </div>
</template>

<script>
import imgObj from "./assets/lanxiao.jpg"; // js需要导入图片文件，css和标签可以直接使用图片地址
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
      localImg: imgObj,
      count: 1,
      username: "123654",
      password: "",
      from: "北京市",
      hobby: [],
      gender: "男",
      intro: "",
      age: 0,
      motto: "",
      introo: "",
      str: "<span>我是一个span标签</span>",
      isOk: true,
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
