import '../css/app.css'
import 'vue-toastification/dist/index.css'
import '@formkit/themes/genesis'

import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import { plugin as formkitPlugin, defaultConfig } from '@formkit/vue'
import Toast from 'vue-toastification'

createInertiaApp({
  resolve: (name) => require(`./Pages/${name}`),
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(formkitPlugin, defaultConfig())
      .use(Toast)
      .mount(el)
  },
})
