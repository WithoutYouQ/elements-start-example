import "./css/index.css"


import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import * as filters from "./utils/filters.js"

Vue.use(ElementUI)


Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})


new Vue({
  el: '#app',
  render: h => h(App)
})
