import { createApp } from 'vue'
import App from './App.vue'

// router 
import { createRouter, createWebHistory } from 'vue-router'
import Auth from "./views/Auth.vue"
import DashboardVue from './views/Dashboard.vue'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { md3 } from 'vuetify/blueprints/md3'
import { aliases } from 'vuetify/iconsets/fa-svg'
import { md } from 'vuetify/iconsets/md'

const router = createRouter ({
  history: createWebHistory(),
  routes: [
    {path: '/', name:'Home', component: Auth },
    {path: '/dash', name:'Dashboard', component: DashboardVue },
  ]
})

const vuetify = createVuetify({
  components,
  directives,
  blueprint: md3,
  theme: {
    defaultTheme: 'dark'
  },
  icons: {
    defaultSet: 'md',
    aliases,
    sets: {
      md,
    },
  },
})

createApp(App)
.use(vuetify)
.use(router)
.mount('#app')