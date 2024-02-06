import { createApp } from 'vue'
import App from '@/App.vue'

// Import Css
import '@/index.css'

// Import Router
import router from './router/index.js';

// Import Pinia
import { createPinia } from 'pinia';
const pinia = createPinia();

// Import Validation Plugin
import validations from '@/plugins/validations.js'
import MessageToastPlugin from '@/plugins/message_toast.js';

// Create App
const app = createApp(App)



app.use(router);
app.use(pinia);
app.use(validations);
app.use(MessageToastPlugin);

app.mount('#app')
