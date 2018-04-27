<template>
  <div>
    <nav class="header-container">
      <ul>
        <li class="nav-li"><a @click="exitBtn">保存</a></li>
        <li class="nav-li"><a @click="exitBtn">退出</a></li>
      </ul>
      <ul class="header-right">
        <li class="nav-li"><a @click="goTo"></a></li>
        <li class="nav-li"><a @click="goBack"></a></li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    exitBtn () {
      if (confirm('确认关闭?')) {
        window.location.href = 'about:blank'
        window.close()
      }
    },
    goTo () {},
    goBack () {}
  }
}
</script>
<style scoped>
.header-container{
  display: flex;
  justify-content: space-between;
}
.nav-li{
    list-style: none;
    display: inline-block;
    width: 100px;
    font-size: 25px;
    line-height: 25px;
}
</style>
