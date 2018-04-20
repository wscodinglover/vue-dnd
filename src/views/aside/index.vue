<template>
    <Scroll :on-reach-bottom="handleReachBottom" :height='670'>
      <vddl-list class="panel-list" :list="list" :horizontal="false">
          <vddl-draggable class="panel-item" v-for="(item, index) in list" :key="item.id" :draggable="item" :index="index" :wrapper="list" effect-allowed="move" :selected="show">
            <img :src="item.avatar" alt="" class="list-img">
          </vddl-draggable>
          <vddl-placeholder class="bg-color"></vddl-placeholder>
      </vddl-list>
    </Scroll>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  props: {
    list: {
      type: Array
    }
  },
  methods: {
    handleReachBottom () {},
    show (item) {
      this.$bus.$emit('reciveData', item)
    }
  }
}
</script>
<style scoped>
.vddl-list, .vddl-draggable {
  position: relative;
}
.vddl-list {
  min-height: 44px;
}
.vddl-dragging{
  opacity: 0.7;
  border:2px solid blue;
}
.vddl-dragging-source {
  display: none;
}
.panel-item{
  width: 200px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  margin: 10px auto;
  background: #fff;
}
.bg-color{
  width: 200px;
  height: 100px;
  /* text-align: center; */
  margin: 10px auto;
  /* background: #fff; */
}
.list-img{
  display: block;
  width: 200px;
  height: 100px;
}
</style>
