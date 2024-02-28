<template>
  <div>
    <ul>
      <!-- <li v-for="val in arr"> -->
      <!-- <li v-for="(val, index) in arr" :key="index"> -->
      <li v-for="obj in brr" :key="obj.id">
        <!-- {{ val }} -->
        {{ obj.name }}
        <input type="text" />
      </li>
    </ul>
    <button @click="btn">下标1位置插入新来的</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // arr: ["老大", "老二", "老三"],
      brr: [
        {
          name: "老大",
          id: 11,
        },
        {
          name: "老二",
          id: 22,
        },
        {
          name: "老三",
          id: 33,
        },
      ],
    };
  },
  methods: {
    btn() {
      // this.arr.splice(1, 0, "新来的");
      this.brr.splice(1, 0, {
        id: 55,
        name: "新来的",
      });
    },
  },
};
</script>

<style></style>
