<template>
  <div>
    <p :class="{ redStr: bool }">动态class</p>
    <p :style="{ background: colorStr }">动态style</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bool: true,
      colorStr: "red",
    };
  },
};
</script>

<style scoped>
.redStr {
  color: red;
}
</style>
