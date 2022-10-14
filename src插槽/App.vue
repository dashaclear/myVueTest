<template>
  <div class="content">
    <Category title="音乐">
      <!-- <template  slot-scope="{ music }"> -->
        <a href="" scope="{music}">The World{{music}}</a><br>
        <a href="">jiiiiiiiiiiiiiiii</a>
        <h1>shaving</h1>
      <!-- </template> -->
    </Category>
    <!-- <Category title="music" :listData="music" />
    <Category title="file" :listData="film" />
    <Category title="agefans" :listData="agefans" /> -->
  </div>
</template>

<script>
import Category from "./components/Category";
export default {
  name: "App",
  components: {
    Category,
  },
  data() {
    return {
      // film: ["你的名字", "天气之子", "让子弹飞", "烟花"],
      // agefans: [
      //   "欢迎来到实力至上主义教室",
      //   "overload",
      //   "转生史莱姆",
      //   "进击的巨人",
      // ],
    };
  },
};
</script>

<style >
* {
  margin: 0;
  padding: 0;
}

.content {
  display: flex;
  justify-content: space-around;
  width: 60vw;
}
</style>