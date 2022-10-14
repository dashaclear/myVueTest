<template>
  <div class="top">
    <input
      type="text"
      placeholder="请输入任务名称，按回车键确认"
      @keyup.enter="add"
    />
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "MyTop",
  methods: {
    add(e) {
      if (e.target.value.trim()) {
        const inputMes = { id: nanoid(), name: e.target.value, done: false };
        this.$emit('addTodo',inputMes);
        e.target.value = '';
      }
    },
  },
};
</script>

<style scoped>
.top {
  /* 位置 */
  width: calc(var(--main--width) - 10%);
  height: 30px;
  margin-bottom: 15px;
  /* 可以用这个的var和--结合，但是不会有提示 */
  /* 布局 */
  /* 修饰 */
}

.top input {
  width: 100%;
  height: 30px;
  padding-left: 10px;
}
</style>