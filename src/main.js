import { createApp } from 'vue'
import App from './App.vue'

// Import Css
import './index.css'

// Import Router
import router from './router/index.js';

// Import Pinia
import { createPinia } from 'pinia';
const pinia = createPinia();

const app = createApp(App)

app.use(router);
app.use(pinia);

app.mount('#app')