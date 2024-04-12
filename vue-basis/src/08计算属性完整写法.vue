<template>
  <div>
    <span>姓名：</span>
    <input type="text" v-model="full" />
  </div>
</template>

<script>
export default {
  // 实现计算属性在输入框上的双向绑定 是视图层和数据层的双向绑定
  // 简写后遇到问题 在视图层修改的数据不能赋给变量
  // computed: {
  //   full() {
  //     return "无名氏";
  //   },
  // },
  // 要将视图层修改的值赋给变量 需要用完整写法
  computed: {
    full: {
      // set接收要赋予的值
      set(val) {
        console.log(val);
      },
      // get返回该计算属性的值
      get() {
        return "无名氏";
      },
    },
  },
};
</script>

<style>
</style>
