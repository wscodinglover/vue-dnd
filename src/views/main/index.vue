<template>
  <div class="main-container" @mousemove="mouseMove" @mouseup="mouseUp">
    <section class="contents" ref="contents">
      <p>
        <el-upload
        class="avatar-uploader"
        action="/api/b/posts/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :on-progress="handleAvatarProgress"
        :on-error="handleAvatarError"
        :before-upload="beforeAvatarUpload">
        <img v-if="content.picUrl" :src="content.picUrl" class="main-img" ref="img">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </p>
      <el-input class="main-des" v-model="temp" type="textarea" :autosize="true" placeholder="Enter something..." @change="showBtn=true"/>
      <el-button type="info" size="mini" round v-show="showBtn" @click="open" class="save-btn">save</el-button>
      <!-- <textarea class="txt-msg" name="" id="" cols="" rows=""></textarea> -->
    </section>
    <section class="msg" ref="msg">
      <div class="msg-border" ref="msgBorder" @mousedown="mouseDown"></div>
      <div contenteditable="true" class="msg-content"></div>
    </section>
  </div>
</template>
<script>
// import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      showBtn: false,
      id: 1,
      temp: '',
      down: false,
      dx: 0,
      dy: 0,
      msgH: 0,
      contentsH: 0,
      imgH: 0,
      imgW: 0
    }
  },
  methods: {
    handleAvatarSuccess (res, file) {
      this.$message({type: 'success', message: '更新成功!'})
      this.content.picUrl = URL.createObjectURL(file.raw)
    },
    handleAvatarProgress (res, file) {
      this.$message({type: 'info', message: '上传中。。'})
    },
    handleAvatarError (res, file) {
      this.$message({type: 'info', message: '上传失败!'})
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    open () {
      this.$confirm('修改', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then(() => {
        this.$store.commit('SAVE_ITEM', {id: this.id, des: this.temp})
        this.showBtn = false
        this.$message({
          type: 'success',
          message: '保存成功!'
        })
      }).catch(() => {
        this.temp = this.content.des
        this.showBtn = false
        this.$message({
          type: 'info',
          message: '已取消更改'
        })
      })
    },
    mouseDown () {
      // console.log('mousedown', this.$refs.contents.clientHeight)
      this.msgH = this.$refs.msg.clientHeight
      this.dy = event.clientY
      this.contentsH = this.$refs.contents.clientHeight
      this.imgH = this.$refs.img.clientHeight
      this.imgW = this.$refs.img.clientWidth
      if (!this.down) {
        this.down = true
      }
    },
    mouseMove () {
      let msg = this.$refs.msg
      let contents = this.$refs.contents
      let img = this.$refs.img
      let dy = this.dy
      let h = this.msgH
      let down = this.down
      let contentsH = this.contentsH
      let imgH = this.imgH
      let imgW = this.imgW
      document.onmousemove = function (e) {
        if (down) {
          let ev = e || event
          let i = (contentsH + ev.clientY - dy) / contentsH
          msg.style.height = dy - ev.clientY + h + 'px'
          contents.style.height = contentsH - dy + ev.clientY + 'px'
          img.style.height = imgH * i + 'px'
          img.style.width = imgW * i + 'px'
        }
      }
    },
    mouseUp () {
      let self = this
      document.onmouseup = function () {
        if (self.down) {
          self.down = false
        }
      }
    }
  },
  computed: {
    content () {
      let id = this.$store.state.app.id
      const data = this.$store.getters.item(id)
      if (!data) { return false }
      return data
    }
  },
  watch: {
    content () {
      this.showBtn = false
      this.temp = this.content.des
      this.id = this.content.id
    }
  }
}
</script>
<style scoped>
.main-container{
  height: 100%;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
}
.contents{
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.edit-container{
  width: 100%;
  height: 80px;
}
.main-img{
  display: block;
  width: 500px;
  max-height: 300px;
  min-width: 50px;
  min-height: 30px;
  margin-top: 10px;
}
.main-des{
  display: block;
  width: 600px;
  margin-top: 20px;
  font-size: 20px;
  font-family: 'Courier New', Courier, monospace;
}
.txt-msg{
  margin-top: 20px;
  width: 100%;
  resize: vertical
}
.save-btn{
  margin-top: 10px;
}
.msg{
  /* flex: 1; */
  width: 100%;
  height: 100px;
  min-height: 5px;
  max-height: 600px;
  margin-top: 10px;
  background: #99e;
}
.msg-border{
  width: 100%;
  height: 5px;
  background: #000;
}
.msg-border:hover {
  cursor: n-resize;
}
.msg-content{
  height: 100%;
}
</style>
