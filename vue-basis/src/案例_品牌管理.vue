<template>
  <div id="app">
    <div class="container">
      <!-- 顶部框模块 -->
      <div class="form-group">
        <div class="input-group">
          <h4>品牌管理</h4>
        </div>
      </div>

      <!-- 数据表格 -->
      <table class="table table-bordered table-hover mt-2">
        <thead>
          <tr>
            <th>编号</th>
            <th>资产名称</th>
            <th>价格</th>
            <th>创建时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="obj in list" :key="obj.id">
            <td>{{ obj.id }}</td>
            <td>{{ obj.name }}</td>

            <!-- 如果价格超过100 就有red这个类 -->
            <!-- <td class="red">{{ obj.price }}</td> -->
            <!-- <td :class="{ red: obj.price > 100 }">{{ obj.price }}</td> -->
            <!-- 4-3.使用过滤器 -->
            <td>{{ obj.time | formatDate }}</td>
            <td><a href="#" @click="delFn(obj.id)">删除</a></td>
          </tr>

          <!-- 5-1.末尾补tr，显示总价和均价 -->
          <tr style="background-color: #eee !important;">
            <td>统计：</td>
            <td colspan="2">总价钱为：{{ allPrice }}</td>
            <td colspan="2">平均价：{{ avgPrice }}</td>
          </tr>
        </tbody>

        <!-- 3-5.设置tfoot，无数据时给出提示 -->
        <tfoot v-show="list.length === 0">
          <tr>
            <td colspan="5" style="text-align: center">暂无数据</td>
          </tr>
        </tfoot>
      </table>

      <!-- 添加资产 -->
      <form class="form-inline">
        <div class="form-group">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="资产名称"
              v-model="name"
            />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="text"
              class="form-control"
              placeholder="价格"
              v-model.number="price"
            />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <!-- 2-4.阻止表单提交 刷新数据恢复初始状态 -->
            <button class="btn btn-primary" @click.prevent="addFn">
              添加资产
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// 1 铺设
// 1-1.明确需求
// 1-2.标签+样式+默认数据
// 1-3.下载bootstrap 在main.js里引入bootstrap.css
// 1-4.把list数组铺设到表格里
// 1-5.修改价格颜色

// 2 新增
// 2-1.给按钮绑定事件
// 2-2.给表单v-model绑定vue变量
// 2-3.把值以对象的形式插入list
// 2-4.阻止表单提交 刷新数据恢复初始状态
// 2-5.判断是否为空

// 3 删除
// 3-1.给删除的a标签绑定点击事件
// 3-2.传入数据id到方法中
// 3-3.通过id，找到对应数据在数组中的下标
// 3-4.用splice方法删除原数组中的对应元素
// 3-5.设置tfoot，无数据时给出提示
// 3-6.无数据再新增id需要判断一下

// 4 处理时间
// 4-1.下载moment模块
// 4-2.定义过滤器，编写内部代码
// 4-3.使用过滤器

// 5 总价均价显示
// 5-1.末尾补tr，显示总价和均价
// 5-2.定义计算属性
// 5-3.求总价
// 5-4.求均价

// import "bootstrap/dist/css/bootstrap.css"; // 默认找文件夹下的index文件（这个不是，所以需要写路径）

import moment from "moment";

export default {
  data() {
    return {
      name: "", // 名称
      price: 0, // 价格
      list: [
        { id: 100, name: "外套", price: 199, time: new Date("2010-08-12") },
        { id: 101, name: "裤子", price: 34, time: new Date("2013-09-01") },
        { id: 102, name: "鞋", price: 25.4, time: new Date("2018-11-22") },
        { id: 103, name: "头发", price: 19900, time: new Date("2020-12-12") },
      ],
    };
  },
  methods: {
    addFn() {
      // 2-5.判断是否为空
      if (this.name.trim().length == 0 || this.price === 0) {
        alert("不能为空");
        return;
      }
      //解决bug：数组无数据时，id需要一个固定值
      let id =
        this.list.length > 0 ? this.list[this.list.length - 1].id + 1 : 100;
      // 2-3.把值以对象的形式插入list
      this.list.push({
        // 新对象的id值：当前数组最后一个对象的id + 1
        // id: this.list[this.list.length - 1].id + 1,
        id: id,
        name: this.name,
        price: this.price,
        time: new Date(),
      });
    },
    delFn(id) {
      // 3-3.通过id，找到对应数据在数组中的下标
      let index = this.list.findIndex((obj) => obj.id === id);
      // 3-4.用splice方法删除原数组中的对应元素
      this.list.splice(index, 1);
    },
  },
  // 4-2.定义过滤器，编写内部代码
  filters: {
    formatDate(val) {
      return moment(val).format("YYYY-MM-DD");
    },
  },
  // 5-2.定义计算属性
  computed: {
    allPrice() {
      // 5-3.求总价
      return this.list.reduce((sum, obj) => (sum += obj.price), 0);
    },
    avgPrice() {
      // 5-4.求均价
      return this.allPrice / this.list.length;
      // 保留两位小数
      // return (this.allPrice / this.list.length).toFixed(2);
    },
  },
};
</script>

<style scoped>
.red {
  color: red;
}
</style>
