import './sass/style.scss';

import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue';

import App from './App.vue'
import Layout from "./components/layouts/Layout";
import Home from './components/pages/Home.vue'

Vue.use(Router);
Vue.use(BootstrapVue);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      children: [
        {
          path: '/',
          name: 'home',
          component: Home,
        }
      ]
    }
  ]
});

new Vue({
  el: '#app',
  render: h => h(App),
  router
});
