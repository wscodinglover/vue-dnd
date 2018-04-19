// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import VueDND from 'awe-dnd'
import VueBus from 'vue-bus'
import Vddl from 'vddl'
Vue.use(Vddl)
Vue.use(ElementUI)
Vue.use(iView)
Vue.use(VueDND)
Vue.use(VueBus)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
