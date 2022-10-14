<template>
  <div>
    <h3>{{ title }}分类</h3>
    <!-- <slot></slot> -->
    <slot :music="music"></slot>
  </div>
</template>

<script>
export default {
  name: "TestCategory",
  props: ["listData", "title"],
  data() {
    return {
      music: ["最长的电影", "Love Stroy", "水星记", "大城小爱"],
      one:'你好',
    };
  },
};
</script>

<style scoped>
div {
  background-color: rgb(53, 141, 223);
}
h3 {
  background-color: antiquewhite;
}
ul {
  margin-top: 20px;
}
</style>