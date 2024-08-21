import { createPinia } from "pinia"
import { createApp } from "vue"

import App from "./App.vue"

import "./style.scss"

createApp(App).use(createPinia()).mount("#app")
