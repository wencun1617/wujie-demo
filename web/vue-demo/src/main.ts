import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementUi from 'element-plus'
import 'element-plus/dist/index.css'
import router from "./router";

declare global {
    interface Window {
        $wujie: {
            props: Record<string, any>
            bus: {
                $emit: any
            }
        }
        // 是否存在无界
        __POWERED_BY_WUJIE__?: boolean;
        // 子应用mount函数
        __WUJIE_MOUNT: () => void;
        // 子应用unmount函数
        __WUJIE_UNMOUNT: () => void;
        // 子应用无界实例
        __WUJIE: { mount: () => void };
    }
}

let instace: any
if (window.__POWERED_BY_WUJIE__) {
    window.__WUJIE_MOUNT = () => {
        instace = createApp(App).use(ElementUi).use(router)
        instace.mount('#app')
    }
    window.__WUJIE_UNMOUNT = () => {
        instace.unmount()
    }
} else {
    const app = createApp(App)
    app.use(ElementUi).use(router)
    app.mount('#app')
}
