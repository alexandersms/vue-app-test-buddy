<template>
  <div class="home">
    <h1>Random Counter by Alex Sms</h1>
    <h2>
      Counter : <span class="font-weight-bold">{{ counter }}</span>
    </h2>
    <h2>Let's Go Xander Smith</h2>
    <button class="btn btn-primary mx-2" id="increment" @click="increment">
      Increment
    </button>
    <button class="btn btn-danger" id="decrement" @click="decrement">
      Decrement
    </button>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    increment() {
      this.counter++;
    },
    decrement() {
      if (this.counter <= 0) {
        this.counter = 0;
      } else {
        this.counter--;
      }
    }
  }
};
</script>

<style scoped>
button {
  cursor: pointer;
}
</style>
