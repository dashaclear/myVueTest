<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>

    <transition name="hello" appear>
      <h1 v-show="isShow">Hello World</h1>
    </transition>

    <transition-group name="hello" appear>
      <h1 v-show="isShow" key="1">很酷</h1>
      <h1 v-show="!isShow" key="2">不聊天</h1>
    </transition-group>
  </div>
</template>

<script>
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
  /* transition:  transform 1s linear; */
  /* 给对应的标签加一个过渡 */
}

/* 不使用动画，而使用以下四个类名 ，分别是进入，进入的末态*，离开，离开的末态
  在这里进入和离开末态相同，离开和进入末态相同*/

/* 出了这几个类名，其他的都和动画差不多 */

.hello-enter-active,
.hello-leave-active {
  transition: transform 1s linear;
  /* 如果不想破环原来的样式，也可以把过渡写在这里 */
}
.hello-enter,
.hello-leave-to {
  transform: translateX(-100%);
}

.hello-enter-to,
.hello-leave {
  transform: translateX(0);
}
</style>
