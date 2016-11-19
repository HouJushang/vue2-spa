import Vue from 'vue'
import './sass/main.sass'

import {router, routeDeep} from './router'
import Loading from 'components/Loading.vue'
import Prompt from 'components/Prompt.vue'
Vue.component('loading', Loading)
Vue.component('prompt', Prompt)
new Vue({
  router,
  data: {
    transitionName: 'slide-right'
  },
  watch: {
    '$route' (to, from) {
      const toDepth = routeDeep.indexOf(to.path)
      const fromDepth = routeDeep.indexOf(from.path)
      this.transitionName = toDepth > fromDepth ? 'slide-right' : 'slide-left'
    }
  }
}).$mount('#app')
