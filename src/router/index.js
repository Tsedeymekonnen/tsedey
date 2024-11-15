import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import ExperiencePage from '../views/ExperiencePage.vue';
import AboutPage from '../views/AboutPage.vue';
import ContactPage from '../views/ContactPage.vue';

const routes = [
  { path: '/tsedey/', component: HomePage },
  { path: '/experience', component: ExperiencePage },
  { path: '/about', component: AboutPage },
  { path: '/contact', component: ContactPage },
];

const router = createRouter({
  history: createWebHistory(), // Leave this as default
  routes,
});

export default router;
