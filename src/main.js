import { createApp } from 'vue'

import App from './App.vue'
import router from './router';
import store from './store';
import mitt from 'mitt'

import './assets/styles/_index.scss'
import './assets/styles/tailwind.css'

const emitter = mitt()
const app = createApp(App);

import notify from "./shared/notify.vue";
import icon from "./shared/icon.vue";

app.component('notify', notify);
app.component('icon', icon);

app.use(router);
app.use(store);
app.config.globalProperties.emitter = emitter
app.mount('#app');
