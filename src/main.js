// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
// import { Button, Carousel, CarouselItem } from 'element-ui';
import ElementUI from 'element-ui';
import RouterView from './router/index';

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.config.productionTip = false;
const router = new VueRouter({
  // mode: 'history',需要后台服务器配置
  routes: RouterView,
  base: '/webapp/kc/'
});
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.pageTitle;
  next();
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
