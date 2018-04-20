<template>
  <div class="main-container">
    <p><img :src="mainData.avatar" alt="" class="main-img"></p>
    <p class="main-des">{{mainData.description}}</p>
  </div>
</template>
<script>
export default {
  props: {
    mainData: {
      type: Object
    }
  }
}
</script>
<style scoped>
.main-container{
  display:flex;
  flex-direction: column;
  align-items: center;
}
.main-img{
  display: block;
  width: 500px;
  height: 300px;
}
.main-des{
  margin-top: 20px;
  font-size: 20px;
  font-family: 'Courier New', Courier, monospace;
}
</style>
