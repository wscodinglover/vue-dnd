<template>
  <el-container>
    <el-header>
      <HeaderView />
    </el-header>
    <el-container>
      <el-aside class="aside">
        <ListView :list='list'/>
      </el-aside>
      <el-main>
        <MainView/>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import ListView from './aside'
import MainView from './main'
import HeaderView from './header'

export default {
  data () {
    return {
    }
  },
  components: { ListView, MainView, HeaderView },
  methods: {
  },
  created () {
    this.$store.dispatch('getListData')
  },
  computed: {
    list () {
      return this.$store.getters.list
    }
  }
}
</script>
<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
}
.el-aside {
  width: 500px;
  background-color: #d3dce6;
  color: #333;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  padding: 0;
}
</style>
