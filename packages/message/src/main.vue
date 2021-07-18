<template>
  <div class="lu-messaage">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'LuMessage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.lu-messaage h1 {
  color: #42b983;
}


</style>
