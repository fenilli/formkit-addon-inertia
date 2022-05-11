import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import { plugin as formkitPlugin, defaultConfig } from '@formkit/vue';

import formkitInertify from 'lib';

import '@formkit/themes/genesis';

createInertiaApp({
  resolve: name => require(`./pages/${name}`),
  setup({ el, app, props, plugin }) {
    createApp({ render: () => h(app, props) })
      .use(plugin)
      .use(formkitPlugin, defaultConfig({
        plugins: [formkitInertify]
      }))
      .mount(el);
  }
});

InertiaProgress.init();
