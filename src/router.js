import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import About from './components/About.vue';
import Counter from './components/Counter.vue';
import NotFound from './components/NotFound.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/counter',
      name: 'Counter',
      component: Counter
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
});
