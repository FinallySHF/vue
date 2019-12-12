import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import HelloWorld1 from '@/components/test/HelloWorld1';
import HelloWorld2 from '@/components/test/HelloWorld2';
import login from '@/components/login/login';

Vue.use(Router);

export default new Router({
  // mode：history作用：去掉浏览器地址栏#号
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/HelloWorld1',
      name: 'HelloWorld1',
      component: HelloWorld1,
    },
    {
      path: '/HelloWorld2',
      name: 'HelloWorld2',
      component: HelloWorld2,
    },
  ],
});
