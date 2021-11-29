import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/Home.vue'),
    meta: {
      title: 'Главная страница',
      metaTags: [
        {
          name: 'description',
          content: 'Главная страница сайта neworia. Научно популярный блог про электронику, программирования, психологию, филосовские рассуждения разных авторов, так же и автора сайта.'
        },
        {
          property: 'og:description',
          content: 'Главная страница сайта neworia.'
        }
      ]
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../pages/About.vue'),
    metaInfo () {
      return {
        title: 'О сайте',
        meta: [
          {
            name: 'description',
            content: 'О сайте',
          },
          {
            name: 'keywords',
            content: 'О сайте'
          }
        ]
      }
    }
  }
];

const router = createRouter({
  mode: 'history',
  history: createWebHistory(),
  routes
});

export default router;
