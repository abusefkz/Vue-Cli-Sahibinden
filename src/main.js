import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './createRouter'
import "@/assets/bootstrap.min.css"
import navbarTag from "@/components/navbarTag"
import sideBarTag from './components/sideBarTag.vue'
// import selectOption from "@/components/selectOption"
import "@/assets/style.css"
import store from './vuexStore'

loadFonts()

const app =createApp(App)
app.use(vuetify)
app.component('navbarTag', navbarTag)
app.component('sideBarTag', sideBarTag)
// app.component('selectOption', selectOption)
app.use(router)
app.use(store)
app.mount('#app')
