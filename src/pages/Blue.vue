<template>
  <div >
    
      <router-link to="/Blue/LiBai"  class="active"  active-class="selected">李白</router-link>
      <router-link to="/Blue/WangBo"  class="active"  active-class="selected">王勃</router-link>
  
      <router-view ></router-view>
    
  </div>
</template>

<script>
export default {
  name: "BlueTest",
};
</script>

<style scoped>
div {
  background-color: skyblue;
  height: 100%;
  border: 1px solid transparent;
  border-radius: 6px; 
}
</style>

