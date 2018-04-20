<template>
    <el-container>
      <v-contextmenu ref="sidemenu">
        <v-contextmenu-item>保存</v-contextmenu-item>
        <v-contextmenu-item>菜单</v-contextmenu-item>
      </v-contextmenu>
      <v-contextmenu ref="mainmenu">
        <v-contextmenu-item @click="modal = true">保存</v-contextmenu-item>
        <v-contextmenu-item>菜单2</v-contextmenu-item>
        <v-contextmenu-submenu title="子菜单">
          <v-contextmenu-item>子菜单1</v-contextmenu-item>
          <v-contextmenu-item>子菜单2</v-contextmenu-item>
        </v-contextmenu-submenu>
      </v-contextmenu>
      <Modal v-model="modal" title="Title" :loading="loading" @on-ok="asyncOK">
        <p>After you click ok, the dialog box will close in 2 seconds.</p>
      </Modal>
        <el-header>Header</el-header>
        <el-container>
            <el-aside>
              <div v-contextmenu:sidemenu>
                <ListView :list='list'/>
              </div>
            </el-aside>
            <el-main>
              <div v-contextmenu:mainmenu>
                <MainView :mainData='mainData' v-show="mainData.id>=0"/>
              </div>
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
      modal: false,
      loading: true,
      mainData: {}
    }
  },
  components: { ListView, MainView },
  methods: {
    asyncOK () {
      setTimeout(() => {
        this.modal = false
      }, 2000)
    }
  },
  created () {
    this.$bus.$on('reciveData', (data) => {
      console.log('father', data)
      this.mainData = data
    })
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
}
</style>
