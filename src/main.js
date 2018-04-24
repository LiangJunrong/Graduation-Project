// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引用Vuex
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    activeIndex: ''
  },
  mutations: {
    updateNavHeaderActiveIndex(state, activeIndex) {
      state.activeIndex = activeIndex
    }
  }
})

//引入Element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

//引入懒加载
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad, {
  loading: "/static/loading-svg/loading-bars.svg"
})

//引入瀑布流下拉底部加载
import infiniteScroll from 'vue-infinite-scroll'
Vue.use(infiniteScroll)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //vue-router
  router,
  //Vuex
  store,
  components: {
    App
  },
  template: '<App/>',
})
