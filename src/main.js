import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import NewsList from './components/NewsList.vue';
import NewsDetail from './components/NewsDetail.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: NewsList },
    { path: '/news/:id', component: NewsDetail }
  ]
});

const app = createApp(App);
app.use(router);
app.mount('#app');