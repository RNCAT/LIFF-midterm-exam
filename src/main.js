import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import Home from './views/Home.vue'
import About from './views/About.vue'
import Profile from './views/Profile.vue'
import Message from './views/Message.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
    },
    {
      path: '/message',
      name: 'Message',
      component: Message,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
  ],
})

createApp(App).use(router).mount('#app')
