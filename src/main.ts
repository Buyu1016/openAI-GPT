import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import './global.css'
import { setSDKConfig } from "@codegorgeous/sdk";

import.meta.env.VITE_MICRO_ID && setSDKConfig({
    baseUrl: import.meta.env.VITE_APP_BASE_URL,
    microID: import.meta.env.VITE_MICRO_ID
});
createApp(App).use(router).use(ElementPlus).mount('#app')
