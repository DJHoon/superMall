import Vue from 'vue'
import App from './App'
import router from './router/index'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
Vue.config.productionTip = false
/* eslint-disable no-new */
Vue.use(Mint)
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
