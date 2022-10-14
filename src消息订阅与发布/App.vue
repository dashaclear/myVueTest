<template>
  <div class="content">
    <MyTop @addTodo="addTodo" />
    <MyList
      :todolist="todolist"
    
    /> 
    <MyFotter
      :todolist="todolist"
     @checkAllTodo="checkAllTodo"
      @clearDone="clearDone"
    />
  </div>
</template>
 
<script>
import pubsub from 'pubsub-js'
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
      todolist: JSON.parse(localStorage.getItem('todolist')) || [],
    }
  },
  mounted() {
    // 接受消息的一方去订阅
    this.pubId = pubsub.subscribe('changeTodo',this.changeTodo);//在这订阅触发chang事件的信息，并添加一个回调
    // 他会接受两个参数，第一个是消息的名字，第二个才是传过来的数据，所以我们的回调中必须要写两个参数，然后用第二个
  },
  beforeDestroy(){
    pubsub.unsubscribe(this.pubId);//接受到订阅时候的id，然后通过这个id去取消订阅
  },
  methods: {
    addTodo(Mes) {
      this.todolist.unshift(Mes);
    },
    changeTodo(msgname,id) {
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
  watch:{
      todolist:{
        deep:true,  
        handler(newValue){
          localStorage.setItem('todolist',JSON.stringify(newValue));
        }
      }
  }
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

