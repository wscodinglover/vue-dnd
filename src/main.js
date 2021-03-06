// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import iView from 'iview'
// import 'iview/dist/styles/iview.css'
// import VueBus from 'vue-bus'
// import Vddl from 'vddl'
// import contentmenu from 'v-contextmenu'
// import 'v-contextmenu/dist/index.css'
import store from './store'
import VueContextMenu from 'vue-contextmenu'
import 'vue-contextmenu/style/css/font-awesome.min.css'
Vue.use(VueContextMenu)
// Vue.use(contentmenu)
// Vue.use(Vddl)
Vue.use(ElementUI)
// Vue.use(iView)
// Vue.use(VueBus)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
