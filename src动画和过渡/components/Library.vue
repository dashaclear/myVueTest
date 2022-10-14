<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__swing"
      leave-active-class="animate__backOutUp"
    >
      <h1 v-show="isShow">Hello World</h1>
    </transition>
  </div>
</template>

<script>
import "animate.css";
export default {
  name: "AnimationTest",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: antiquewhite;
}
</style>