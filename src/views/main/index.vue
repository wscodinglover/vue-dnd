<template>
  <div>{{mainData.id}}{{mainData.label}}</div>
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

</style>
