<template>
  <div class="content">
    <router-link class="active" to="/Red" active-class="selected">Red</router-link>
    <router-link class="active" to="/Blue" active-class="selected">blue</router-link>
    <div class="show">
      <router-view></router-view>
      <!-- 路由显示组件的展示区 -->
    </div>
  </div>
</template>

<script>

export default {
  name: "App",
  components: {
  
  },
  data() {
    return {};
  },
};
</script>

<style >
* {
  margin: 0;
  padding: 0;
}
html,
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.content {
  display: flex;
  justify-content: space-around;
  width: 60vw;
  align-items: center;
}

.show {
  width: 300px;
  height: 300px;
  overflow: hidden;
}
.active {
  display: inline-block;
  width: 42px;
  text-align: center;
  height: 20px;
  text-decoration: none;
  color: whitesmoke;
  background-color: rgb(116, 103, 103);
  border: 1px solid transparent;
  border-radius: 6px;
  cursor: pointer;
}

.active.selected {
  background-color: aquamarine;
}
</style>