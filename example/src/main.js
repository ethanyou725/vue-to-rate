import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
import vrate from 'vue-to-rate'

Vue.use(vrate)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

