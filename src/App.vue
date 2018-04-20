<template>
  <div id="app">
    <v-contextmenu ref="contextmenu">
      <v-contextmenu-item>菜单1</v-contextmenu-item>
      <v-contextmenu-item>菜单2</v-contextmenu-item> 
      <v-contextmenu-submenu title="子菜单">
        <v-contextmenu-item>子菜单1</v-contextmenu-item>
        <v-contextmenu-item>子菜单2</v-contextmenu-item>
      </v-contextmenu-submenu>
      
    </v-contextmenu>
    <div v-contextmenu:contextmenu><router-view/></div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  body{
    margin: 0;
    padding: 0;
  }
  #app {
    margin: 0;
    padding: 0;
  }
</style>
