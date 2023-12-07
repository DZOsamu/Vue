<template>
  <div id="app">
    <!-- v-for 把一组数据 渲染成一组DOM -->
    <!-- 让谁循环生成 v-for就写在谁身上 -->
    <p>学生姓名</p>
    <ul>
      <li v-for="(index, item) in arr" :key="item">
        {{ index }} --- {{ item }}
      </li>
    </ul>

    <p>学生详细信息</p>
    <ul>
      <li v-for="obj in stuArr" :key="obj.id">
        <span>{{ obj.name }} </span>
        <span>{{ obj.sex }} </span>
        <span>{{ obj.hobby }}</span>
      </li>
    </ul>

    <!-- v-for遍历对象（了解） -->
    <p>老师信息</p>
    <div v-for="(value, key) in tobj" :key="value">
      {{ value }} === {{ key }}
    </div>
    <!-- v-for遍历整数（了解） 从1开始遍历 -->
    <p>序号</p>
    <div v-for="i in count" :key="i">{{ i }}</div>

    <!-- v-for更新检测 -->
    <div>
      <ul>
        <li v-for="item in array" :key="item">{{ item }}</li>
      </ul>
      <button @click="revFn">翻转</button>
      <button @click="sliFn">截取前三个</button>
      <button @click="modFn">修改第一个</button>
    </div>

    <!-- v-for更新性能 -->
    <div>
      <ul>
        <li v-for="val in uparr" :key="val">{{ val }}</li>
      </ul>
      <button @click="btn">下标1位置插入新来的</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: ["小明", "小欢欢", "大黄"],
      stuArr: [
        {
          id: 1001,
          name: "孙悟空",
          sex: "男",
          hobby: "吃桃子",
        },
        {
          id: 1002,
          name: "猪八戒",
          sex: "男",
          hobby: "背媳妇",
        },
      ],
      tobj: {
        name: "小黑",
        age: 18,
        class: "1期",
      },
      count: 10,
      array: [5, 1, 9, 3, 7],
      uparr: ["老大", "老二", "老三"],
    };
  },
  methods: {
    revFn() {
      // v-for更新
      this.array.reverse();
    },
    sliFn() {
      // slice方法返回新数组 v-for不更新
      let newArray = this.array.slice(0, 3);
      this.array = newArray; // 用新数组覆盖实现
    },
    modFn() {
      // 更新某个值 v-for检测不到 不更新
      // this.array[0] = 100;
      this.$set(this.array, 0, 100); // (修改对象,修改位置,修改内容)
    },
    btn() {
      this.uparr.splice(1, 0, "新来的");
    },
  },
};
</script>

<style></style>
