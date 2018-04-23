<template>
  <div class="main-container">
    <p>
      <el-upload
      class="avatar-uploader"
      action="https://jsonplaceholder.typicode.com/posts/"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload">
      <img v-if="content.picUrl" :src="content.picUrl" class="main-img">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </p>
    <el-input class="main-des" v-model="temp" type="textarea" :autosize="true" placeholder="Enter something..." @blur="open"/>
  </div>
</template>
<script>
// import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      modalEdit: false,
      changeData: '',
      id: 1,
      contents: {
        picUrl: 'https://raw.githubusercontent.com/wscodinglover/picture-store/master/picStore/14.jpg', des: 'gitHub是一个面向开源及私有软件项目的托管平台，因为只支持git 作为唯一的版本库格式进行托管，故名gitHub。gitHub于2008年4月10日正式上线，除了git代码仓库托管及基本的 Web管理界面以外，还提供了订阅、讨论组、文本渲染、在线文件编辑器、协作图谱（报表）、代码片段分享（Gist）等功能。目前，其注册用户已经超过350万，托管版本数量也是非常之多，其中不乏知名开源项目 Ruby on Rails、jQuery、python 等'
      },
      src: 'https://raw.githubusercontent.com/wscodinglover/picture-store/master/picStore/0.jpg',
      temp: ''
    }
  },
  methods: {
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
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
        type: 'warning'
      }).then(() => {
        this.$store.commit('SAVE_ITEM', {id: this.id, des: this.temp})
        this.$message({
          type: 'success',
          message: '保存成功!'
        })
      }).catch(() => {
        this.temp = this.content.des
        this.$message({
          type: 'info',
          message: '已取消更改'
        })
      })
    }
  },
  computed: {
    content () {
      let id = this.$store.state.app.id
      let data = this.$store.getters.item(id)
      if (!data) return false
      return data
    }
  },
  watch: {
    content () {
      this.temp = this.content.des
    }
  }
}
</script>
<style scoped>
.main-container{
  display:flex;
  flex-direction: column;
  align-items: center;
}
.edit-container{
  width: 100%;
  height: 80px;
}
.main-img{
  display: block;
  width: 500px;
  height: 300px;
  margin-top: 10px;
}
.main-des{
  display: block;
  width: 600px;
  margin-top: 20px;
  font-size: 20px;
  font-family: 'Courier New', Courier, monospace;
}
</style>
