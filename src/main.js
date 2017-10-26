import "./css/index.css"


import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import * as filters from "./utils/filters.js"
import Vuex from "vuex"


Vue.use(ElementUI)


Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		count: 0
	},

	mutations: {
		increment(dtate) {
			state.count++
		}
	}
})

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})


new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
