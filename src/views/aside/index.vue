<template>
  <draggable v-model="myarr" class="list-container" :options="{animation: 300, group:'list', ghostClass: 'ghost', chosenClass:'chosen', scroll: true, scrollSensitivity: 100}" @start="drag=true" @end="drag=false" @choose="choose" @update="datadragEnd">
    <div class="list-item" v-for="element in myarr" :key="element.id" @click='clickT(element.id)' @contextmenu="showMenu($event, element.id)">
      <img class="list-img" :src="element.picUrl" alt="图片丢失" >
      <vue-context-menu :contextMenuData="contextMenuData" @savedata="removedata" @newdata="newdata" />
    </div>
  </draggable>
</template>
<script>
import draggable from 'vuedraggable'
export default {
  data () {
    return {
      myarr: [],
      // contextmenu data (菜单数据)
      contextMenuData: {
      // the contextmenu name(@1.4.1 updated)
        menuName: 'demo',
        // The coordinates of the display(菜单显示的位置)
        axios: {
          x: null,
          y: null
        },
        // Menu options (菜单选项)
        menulists: [
          {
            fnHandler: 'newdata',
            icoName: 'fa fa-home fa-fw',
            btnName: 'New'
          },
          {
            fnHandler: 'savedata', // Binding events(绑定事件)
            icoName: 'fa fa-home fa-fw', // icon (icon图标 )
            btnName: 'Remove' // The name of the menu option (菜单名称)
          }
        ]
      },
      id: ''
    }
  },
  props: {
    list: {
      type: Array
    }
  },
  watch: {
    list () {
      this.myarr = this.list.concat()
      // console.log('myarr', this.myarr)
    }
  },
  components: {
    draggable
  },
  methods: {
    choose (item) {
      // let data = this.list[item.oldIndex].id
      // console.log('choose', item.oldIndex)
      // this.$bus.$emit('reciveData', item)
    },
    datadragEnd (evt) {
      // console.log('拖动前的索引 :' + evt.oldIndex)
      // console.log('拖动后的索引 :' + evt.newIndex)
      // console.log(this.myarr)
    },
    checkMove (data) {
      // console.log('checkMove', data)
    },
    clickT (id) {
      this.$store.commit('ITEM_ID', id)
      // this.$bus.$emit('reciveData', id)
    },
    showMenu (e, id) {
      event.preventDefault()
      var x = event.clientX
      var y = event.clientY
      // Get the current location
      this.contextMenuData.axios = {
        x, y
      }
      // id 为myarr提供查询对应 index
      this.id = id
    },
    removedata () {
      let id = this.id
      // console.log('newdata!', id)
      let arr = this.myarr
      // console.log('newdata!', arr)
      this.myarr.map((item, index) => {
        if (item.id === id) {
          arr = arr.splice(index, 1)
        }
      })
    },
    newdata () {
      let id = this.id
      // console.log('newdata!', id)
      let arr = this.myarr
      // console.log('newdata!', arr)
      this.myarr.map((item, index) => {
        if (item.id === id) {
          // console.log('index', index)
          arr = arr.splice(index + 1, 0, {id: '', des: ''})
        }
      })
    }
  }
}
</script>
<style scoped>
.list-container{
  overflow-y: scroll;
  height: 90vh;
}
.list-item{
  width: 200px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  margin: 10px auto;
  background: #fff;
}
.list-img{
  display: block;
  width: 200px;
  height: 100px;
}
.ghost {
  opacity: 0;
}
/* .chosen{
  border: 2px solid red;
} */

button,input,select,textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: 1;
}
</style>
