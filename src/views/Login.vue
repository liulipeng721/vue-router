<template>
  <div class="login">
    <button @click="clickHome"> Login </button>
  </div>
</template> 
<script> 
export default {
  name: "Login",
  components: {
    // HelloWorld
  },
  methods: {
      clickHome() {
        //   this.$router.push({
        //       name:"Home"
        //   })
        this.$router.push("/home")
      }
  },
};
</script>
