<template>
  <div>
    <!-- <AT/>-->
    <AT2 />
    <Library />
  </div>
</template>

<script>
// import AT from './components/AnimationTest.vue'
import AT2 from "./components/Transition.vue";
import Library from "./components/Library.vue";
export default {
  name: "App",
  components: {
    // AT,
    AT2,
    Library,
  },
};
</script>

<style></style>
