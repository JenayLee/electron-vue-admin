import Vue from 'vue'
import axios from 'axios'
import Antd from 'ant-design-vue'
import App from './App'
import router from './router'
import store from './store'
import XParticles from 'x-particles'
import 'ant-design-vue/dist/antd.css'
import './styles/j.common.less'
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(Antd)
Vue.use(XParticles)
/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
