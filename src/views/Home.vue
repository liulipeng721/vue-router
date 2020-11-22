<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <button @click="goback"> back </button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld
  },
  methods: {
      goback() {
        this.$router.go(-1)
        
      }
  },
  // 组件内的路由守卫   进入
  beforeRouteEnter (to, from, next) {
    // ...
    // console.log("before-Route-Enter")
    // console.log(to);
    // console.log(from);
    // console.log(next); 
    next()
  },
  beforeRouteLeave (to, from, next) {
    // ...
    console.log("before-Route-Leave")
    console.log(to);
    console.log(from);
    console.log(next); 
    next()
  }
};
</script>
