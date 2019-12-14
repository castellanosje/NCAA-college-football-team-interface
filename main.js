import Vue from 'vue'
import App from './App.vue'
//https://www.npmjs.com/package/vue-router
import VueRouter from 'vue-router'
//https://www.npmjs.com/package/vue-resource
import VueResource from 'vue-resource'
import { rutas } from './rutas.js'
//https://www.npmjs.com/package/vue-lodash
import _ from 'lodash';
//https://www.npmjs.com/package/v-tooltip#style-examples
import VTooltip from 'v-tooltip'
 
Vue.use(VTooltip)
Vue.use(_);
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.http.options.root ='https://api.collegefootballdata.com'

const enrutador = new VueRouter({
	routes:rutas,
	mode:'history'
})

new Vue({
  el: '#app',
  router: enrutador,
  render: h => h(App)
})
