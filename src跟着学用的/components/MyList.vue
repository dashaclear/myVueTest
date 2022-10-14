<template>
  <ul class="main">
    <MyItem
      v-for="item of todolist"
      :key="item.id"
      
      :todo="item"
      :changeTodo="changeTodo"
      :deleteTodo="deleteTodo"
    />
  </ul>
</template>

<script>
import MyItem from "./MyItem.vue";
export default {
  name: "MyList",
  components: {
    MyItem,
  },
  data() {
    return {};
  },
  props: ["todolist", "changeTodo","deleteTodo"], //这个todo是一个list
};
</script>

<style scoped>
.main {
  width: calc(var(--main--width) - 10%);
}
</style>