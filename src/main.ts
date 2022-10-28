import { createApp } from 'vue';
import App from './App.vue';

// Vue-Router
import router from './router';

// Element-Plus UI
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

// Element-Plus-Icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

import './style.css';

const app = createApp(App);

// 注册 Element-Plus-Icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}

app.use(router).use(ElementPlus);

app.mount('#app');
