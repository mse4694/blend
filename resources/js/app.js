require('./bootstrap');

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import PrimeVue from 'primevue/config';

import 'primevue/resources/themes/saga-blue/theme.css';   // theme
//import 'primevue/resources/themes/vela-blue/theme.css';   // theme
//import 'primevue/resources/themes/nova/theme.css';          // theme

import 'primevue/resources/primevue.min.css';             // core css
import 'primeicons/primeicons.css';                       // icons

InertiaProgress.init();

createInertiaApp({
  resolve: name => require(`./Pages/${name}`),
  setup({ el, App, props, plugin, }) {
    createApp({ render: () => h(App, props) })
      .use(plugin, PrimeVue, {ripple: true})
      .mount(el)
  },
});