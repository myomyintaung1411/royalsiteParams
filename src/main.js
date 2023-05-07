import { createApp } from 'vue'
import './tailwind.css'
import App from './App.vue'
import { routes } from './routes.js'
import { createRouter, createWebHistory } from 'vue-router'
import store from './store'
import i18n from './config/index'
import VueQrcode from '@chenfengyuan/vue-qrcode';
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
const app = createApp(App)

// window.addEventListener('keydown', function(e) {
//   if (e.ctrlKey && (e.key === '+' || e.key === '-')) {
//     e.preventDefault();
//   }
// });

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const options = {
  confirmButtonColor: '#3B82F6',
  cancelButtonColor: '#ff7674',
  color: "#b95c13"
};

const defaultDocumentTitle = 'Royal International Casino'

router.afterEach(to => {
  /* Set document title from route meta */
  if (to.meta && to.meta.title) {
    document.title = `${to.meta.title} — ${defaultDocumentTitle}`
  } else {
    document.title = defaultDocumentTitle
  }
})

app.use(VueSweetalert2, options)
app.use(router)
app.use(store)
app.use(i18n)
app.component(VueQrcode.name, VueQrcode);
app.mount('#app')
