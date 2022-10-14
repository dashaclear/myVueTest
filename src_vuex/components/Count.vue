<template>
  <div>
    <h2>当前求和为{{ sum }}</h2>
     <h2>当前求和为的5倍{{ $store.getters.fiveTimes }}</h2>
    <select v-model.number="selectNum">
      <option :value="1">1</option>
      <!-- 这里要用一下v-bind绑定，不然默认数值是一个字符串，或者给v-model加修饰符转为数字-->
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">如果当前求和为奇数就加</button>
    <button @click="incrementWait">等会在加</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "CountTest",
  data() {
    return {
      selectNum: 1,
    };
  },
  computed:{
    ...mapState({sum:'sum'}),
  },
  methods: {
    increment() {
      //   this.sum += this.selectNum;
      this.$store.commit("ADD", this.selectNum);
    },
      increment(value) {
      this.$store.commit("ADD",value);
    },
    decrement() {
      //   this.sum -= this.selectNum;
      this.$store.commit("REDUCE", this.selectNum);
    },
    incrementOdd() {
      this.$store.dispatch("addOdd", this.selectNum);
    },
    incrementWait() {
      this.$store.dispatch("addWait", this.selectNum);
    },
  },
};
</script>

<style scoped>
div {
  margin: 0 auto;
  width: 330px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

h2 {
  width: 100%;
}

button {
  padding: 6px;
}
</style>