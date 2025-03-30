import { createApp } from 'vue'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import App from './App.vue'
import Router from './router'
import './style.css'
import './styles/index.scss'

createApp(App).use(Router).mount('#app')
