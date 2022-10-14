<template>
  <ul class="main">
    <MyItem
      v-for="item of todolist" :key="item.id" :todo="item"
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
  
  props: ["todolist"], 
};
</script>

<style scoped>
.main {
  width: calc(var(--main--width) - 10%);
}
</style>