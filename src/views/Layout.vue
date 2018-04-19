<template>
    <el-container>
        <el-header>Header</el-header>
        <el-container>
            <el-aside>
                <ListView :list='list'/>
            </el-aside>
            <el-main>
                <MainView :mainData='mainData'/>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
import ListView from './aside'
import MainView from './main'
export default {
  data () {
    return {
      list: ['ss1', 'ss2', 'ss3', 'ss4', 'ss5', 'ss6', 'ss7', 'ss8', 'ss9', 'ss10'],
      mainData: {}
    }
  },
  components: { ListView, MainView },
  created () {
    this.$bus.$on('reciveData', (data) => {
      console.log('father', data)
      this.mainData = data
    })
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
}
</style>
