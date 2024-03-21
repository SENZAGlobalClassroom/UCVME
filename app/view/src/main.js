import './assets/main.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-purple/theme.css'

import Button from "primevue/button"
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import FloatLabel from 'primevue/floatlabel';
import Card from 'primevue/card';
import Footer from './components/Footer.vue';
import TopBarFT from './components/topBarFirstTime.vue';
import Steps from 'primevue/steps';
import InputMask from 'primevue/inputmask';
import Stepper from 'primevue/stepper';
import StepperPanel from 'primevue/stepperpanel';
import Chips from 'primevue/chips';
import Calendar from 'primevue/calendar';
import Divider from 'primevue/divider';
import ScrollPanel from 'primevue/scrollpanel';

const app = createApp(App)

app.component('Button', Button);
app.component('InputText', InputText);
app.component('Dropdown', Dropdown);
app.component('FloatLabel', FloatLabel);
app.component('Card', Card);
app.component('Footer', Footer);
app.component('TopBarFT', TopBarFT);
app.component('Steps', Steps);
app.component('Stepper', Stepper);
app.component('StepperPanel', StepperPanel);
app.component('InputMask', InputMask);
app.component('Chips', Chips);
app.component('Calendar', Calendar);
app.component('Divider', Divider);
app.component('ScrollPanel', ScrollPanel);

app.use(router)
app.use(PrimeVue);

app.mount('#app')
