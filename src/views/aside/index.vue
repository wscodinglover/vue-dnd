<template>
    <Scroll :on-reach-bottom="handleReachBottom" :height='650'>
      <transition-group name="list-complete" tag="ul">
        <Card class='item-content list-complete-item' dis-hover v-for="(item, index) in list" :key="index" v-dragging="{ item: item, list: list, group: 'item' }">
           <div  @click="show">Content {{ item }}</div> 
        </Card>
      </transition-group>
    </Scroll>
</template>
<script>
export default {
  data () {
    return {
      list1: ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10']
    }
  },
  props: {
    list: {
      type: Array
    }
  },
  methods: {
    handleReachBottom () {
      return new Promise(resolve => {
        setTimeout(() => {
          const last = this.list1[this.list1.length - 1]
          for (let i = 1; i < 11; i++) {
            this.list1.push(last + i)
          }
          resolve()
        }, 2000)
      })
    },
    show(){
      console.log('ssssss')
    }
  },
  mounted () {
    this.$dragging.$on('dragged', (value) => {
      console.log('dragged', value)
      this.$bus.$emit('reciveData', value)
    })
    this.$dragging.$on('touchstart', (value) => {
      console.log('click', value)
    })
  }
}
</script>
<style scoped>
.item-content {
  height: 100px;
  margin: 20px auto;
  background: black;
  color: #fff;
}
.item-content.dragging {
  transform: scale(1.1);
}
.item-content-move {
  transition: transform 1s;
}

.list-complete-item {
  transition: all 1s;
  /* display: inline-block; */
  /* margin-right: 10px; */
}
.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}
</style>
