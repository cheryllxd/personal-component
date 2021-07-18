<template>
  <div class="lu-tag">
    {{ name }}
  </div>
</template>

<script>
export default {
  name: 'LuTag',
  props: {
    name: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.lu-tag {
  padding: 5px 10px;
  color: #fff;
  background: #039956;
}
</style>
