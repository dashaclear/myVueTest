<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- <transition name="" :appear="true"> 这里可以给动画起名字-->
    <transition  appear><!--直接写一个appear也是可以的 -->
      <h1 v-show="isShow">Hello World</h1>
    </transition>
    <!-- transition标签最后不出现，我们让他包住要设置动画的标签就可以了 -->
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
}

.v-enter-active {
  animation: appear 1s linear;
}
/* 如果我们不给动画起名字的话，类名就用v-就行了，如果起了名字要把v换成起的名字 */
.v-leave-active {
  animation: appear 1s linear reverse; /* 反过来的动画在最后加一个reverse就可以了*/
}

@keyframes appear {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>