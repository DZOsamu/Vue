<template>
  <div>
    <span>全选：</span>
    <!-- 4.用v-model关联全选框的选中状态 -->
    <input type="checkbox" v-model="isAll" />
    <button @click="btn">反选</button>
    <ul>
      <li v-for="(obj, index) in arr" :key="index">
        <!-- 3.将obj对象的c属性关联到小li中checkbox的选中状态 -->
        <input type="checkbox" v-model="obj.c" />
        <span>{{ obj.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
// 1.标签+样式+js
// 2.将数据循环展示到页面上
// 3.将obj对象的c属性关联到小li中checkbox的选中状态
// 4.用v-model关联全选框的选中状态
// 5.计算属性isAll
// 6.统计小li中checkbox状态 影响全选框状态
// 7.全选框状态影响小选框状态
// 8.反选 将数组里对象的c属性取反再赋回去
export default {
  data() {
    return {
      arr: [
        { name: "猪八戒", c: false },
        { name: "孙悟空", c: false },
        { name: "唐僧", c: false },
        { name: "白龙马", c: false },
      ],
    };
  },
  // 计算属性isAll
  computed: {
    // isAll() {
    //   // every方法会遍历数组中的每一个对象，返回的是布尔值，用于判断
    //   // 查找数组里“不符合”条件，原地返回false
    //   return this.arr.every((obj) => obj.c === true);
    // },
    // 全选影响小选需要给isAll赋值 需要改成计算方法完整写法
    isAll: {
      set(val) {
        // forEach方法会遍历数组的每个元素，并将元素传给回调函数，可用于修改
        this.arr.forEach((obj) => (obj.c = val));
      },
      get() {
        return this.arr.every((obj) => obj.c === true);
      },
    },
  },
  methods: {
    btn() {
      this.arr.forEach((obj) => (obj.c = !obj.c));
    },
  },
};
</script>

<style>
</style>
