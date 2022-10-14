<template>
  <li class="oneList">
    <input
      type="checkbox"
      :checked="todo.done"
      @click="changeTodo(todo.id)"
    />    
    <span class="mesShow">{{ todo.name }}</span>

    <button @click="deleteTodo(todo.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: 'MyItem',
  props: ['todo','changeTodo','deleteTodo'],
  methods: {
 
  },
};
</script>

<style scoped>
.oneList {
  /* 位置 */
  height: 30px;
  margin-bottom: 5px;
  padding-left: 15px;
  /* 布局 */
  /* 修饰 */
  border: 1px solid grey;
  border-radius: 5px;
  line-height: 30px;
  transition: background-color .6s;
}

.oneList button {
  margin-top:4px ;
  margin-right: 10px;
  width: 50px;
  float: right;
  display: none;
}

.oneList:hover {
  background-color: #ddd;
}
.oneList:hover button {
  display: block;
}


.mesShow {
  margin-left: 6px;
  font-size: 14px;
}
</style>