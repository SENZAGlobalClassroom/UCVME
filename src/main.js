import './assets/main.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import './flags.css'

import Button from "primevue/button"
import 'primevue/resources/themes/aura-light-purple/theme.css'
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import FloatLabel from 'primevue/floatlabel';
import Card from 'primevue/card';
import Footer from './components/Footer.vue';
import TopBarFT from './components/topBarFirstTime.vue';
import Steps from 'primevue/steps';

import Stepper from 'primevue/stepper';
import StepperPanel from 'primevue/stepperpanel';

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

app.use(router)
app.use(PrimeVue);

app.mount('#app')
