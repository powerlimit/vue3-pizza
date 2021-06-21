import { createApp } from 'vue';
import VueClickAway from 'vue3-click-away';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/scss/main.scss';

const app = createApp(App);
app.use(VueClickAway);
app.use(store).use(router).mount('#app');
