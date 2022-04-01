import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import { plugin as formkitPlugin, defaultConfig } from '@formkit/vue';
import inertiaFormkitPlugin from 'inertiajs-formkit-plugin';

import "../css/app.css";

createInertiaApp({
  resolve: name => require(`./pages/${name}`),
  setup({ el, app, props, plugin }) {
    createApp({ render: () => h(app, props) })
      .use(plugin)
      .use(formkitPlugin, defaultConfig({
        plugins: [inertiaFormkitPlugin]
      }))
      .mount(el);
  }
});

InertiaProgress.init();
