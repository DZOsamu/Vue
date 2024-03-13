<template>
  <div>
    <p>原来的样子：{{ msg }}</p>
    <!-- 过滤器使用：{{ 变量 | 过滤器名 }} -->
    <!-- <p>使用翻转过滤器：{{ msg | reverse }}</p> -->
    <p>使用翻转过滤器：{{ msg | reverse("|") }}</p>
    <p :title="msg | toUp | reverse(' ')">鼠标长停</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Hello,Vue",
    };
  },
  // 方式2：局部过滤器（只能在当前文件内使用）
  /* 语法：
    filters:{
      过滤器名 (val) {
        return 处理结果
      }
   } */
  filters: {
    toUp(val) {
      return val.toUpperCase();
    },
  },
};
</script>

<style></style>
