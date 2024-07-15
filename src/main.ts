import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import pinia from './stores'

// 在main.css之前引入，后面需要去覆盖vant
import 'vant/lib/index.css'
import './styles/main.scss'

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
