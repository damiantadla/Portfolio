import './assets/main.css'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */

import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas) // Solid
library.add(far) // Regular
library.add(fab) // Brands

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import Toast from 'vue-toastification'
// Import the CSS or use your own!
import 'vue-toastification/dist/index.css'

const app = createApp(App)
app.use(createPinia())
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(ElementPlus)

app.use(Toast, {
  timeout: 2000
})

app.use(router)

app.mount('#app')
