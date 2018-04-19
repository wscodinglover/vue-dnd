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
      list: [
        {
          'id': 1,
          'label': 'Item A1'
        }, {
          'id': 2,
          'label': 'Item A2'
        }, {
          'id': 3,
          'label': 'Item A3'
        }, {
          'id': 4,
          'label': 'Item A4'
        }, {
          'id': 5,
          'label': 'Item A5'
        }, {
          'id': 6,
          'label': 'Item A6'
        }, {
          'id': 7,
          'label': 'Item A7'
        }, {
          'id': 8,
          'label': 'Item A8'
        }
      ],
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
