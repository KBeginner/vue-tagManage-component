import Vue from 'vue'
import App from './App.vue'

import './plugins/element.js'
import 'element-ui/lib/theme-chalk/index.css'

/* import { Button,Tag, Input } from 'element-ui'

Vue.use(Button)
Vue.use(Tag)
Vue.use(Input) */

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
