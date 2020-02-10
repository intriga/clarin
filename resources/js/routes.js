import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from './components/views/Home.vue'
import About from './components/views/About'
import Contact from './components/views/Contact.vue'

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        }
    ],
    
    mode: 'history',
})