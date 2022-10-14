<template>
  <div class="content">
    <MyTop @addTodo="addTodo" />
    <MyList
      :todolist="todolist"
      :changeTodo="changeTodo"
      :deleteTodo="deleteTodo"
    />
    <MyFotter
      :todolist="todolist"
      @checkAllTodo="checkAllTodo"
      @clearDone="clearDone"
    />
  </div>
</template>
 
<script>
import MyTop from "./components/MyTop.vue";
import MyList from "./components/MyList.vue";
import MyFotter from "./components/MyFotter.vue";
export default {
  name: "App",
  components: {
    MyTop,
    MyFotter,
    MyList,
  },
  data() {
    return {
      todolist: JSON.parse(localStorage.getItem("todolist")) || [],
    };
  },
  methods: {
    addTodo(Mes) {
      this.todolist.unshift(Mes);
    },
    changeTodo(id) {
      this.todolist.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done;
      });
    },
    deleteTodo(id) {
      this.todolist = this.todolist.filter((todo) => todo.id !== id);
    },
    checkAllTodo(done) {
      this.todolist.forEach((todo) => {
        todo.done = done;
      });
    },
    clearDone() {
      this.todolist = this.todolist.filter((todo) => !todo.done);
    },
  },
  watch: {
    todolist: {
      deep: true,
      handler(newValue) {
        localStorage.setItem("todolist", JSON.stringify(newValue));
      },
    },
  },
};
</script>

<style lang="css">
:root {
  --main--width: 500px;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
}

html,
body {
  height: 100vh;
  width: 100vw;
}

input {
  outline: none;
}

span {
  vertical-align: top;
}

.content {
  /* 位置 */
  margin: 20px auto;
  width: var(--main--width);
  /* 不设置高度，让子元素撑开父盒子 */
  padding: 10px;
  /* 布局 */
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  /* 修饰 */
  border-radius: 5px;
  border: 1px solid grey;
  background-color: rgb(255, 255, 255);
}
</style>>

