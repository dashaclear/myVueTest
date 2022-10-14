<template>
  <footer v-show="total">
    <!-- <input type="checkbox" :checked="isAll" @change="checkAll" /> -->
    <input type="checkbox" v-model="isAll" />
    <span>已完成 {{ doneCount }} / </span>
    <span>全部 {{ total }}</span>
    <button @click="clearAll">清除已完成任务</button>
  </footer>
</template>

<script>
export default {
  name: "MyFotter",
  props: ["todolist"],
  computed: {
    total() {
      return this.todolist.length;
    },
    doneCount() {
      //   let count = 0;
      //   this.todolist.forEach((todo) => {
      //     if (todo.done) count++;
      //   });
      //   return count;
      return this.todolist.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0);
    },
    isAll: {
      get() {
        return this.total === this.doneCount && this.todolist.length > 0;
      },
      set(newValue) {
        // this.checkAllTodo(newValue);
        this.$emit('checkAllTodo',newValue);
      },
    },
  },
  methods: {
    clearAll(){
      this.$emit('clearDone')
    }
  },
};
</script>

<style scoped>
footer {
  margin-top: 20px;
  width: calc(var(--main--width) - 10%);
}

footer input {
  margin-right: 8px;
}

button {
  float: right;
}
</style>