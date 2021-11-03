import { createApp } from 'vue'
import App from './App.vue'
import VueSplide from '@splidejs/vue-splide'
import './index.css'
import '@splidejs/splide/dist/css/splide.min.css'

// createApp(App).mount('#app')
// App.use(VueSplide)

const app = createApp( App );
app.use( VueSplide );
app.mount( '#app' );