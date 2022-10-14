<template>
  <div>
    <Count/>
  </div>
    
</template>

<script>
import Count from "./components/Count";
export default {
  name: "App",
  components: {
    Count,
  },
  data() {
    return {
 
    }
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