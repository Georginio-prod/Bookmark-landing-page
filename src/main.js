import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import CascadeSelect from 'primevue/cascadeselect';
import config from './presets/config';

const app = createApp(App);
app.component('CascadeSelect', CascadeSelect);
app.use(PrimeVue, {
    unstyled: true,
    pt: config
});
app.mount('#app');