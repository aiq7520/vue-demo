import Vue from 'vue'
import App from './App.vue'
import UserInput from './views/UserInput.vue'
import router from './router'
import store from './store'
import axios from 'axios'

// 引入 element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.prototype.$http = axios
new Vue({
  router,
  store,
  UserInput,
  render: h => h(App)
}).$mount('#app')
