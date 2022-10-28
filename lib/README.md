# FormKit Addon Inertia

Plugin for integrating <a href="https://inertiajs.com/">InertiaJS</a> with <a href="https://formkit.com/">FormKit</a>

You can check out the full documentation [here](https://github.com/GustavoFenilli/formkit-addon-inertia)

## Getting Started

There are two ways to use this addon, firstly there is the composable way, and there is also a formkit plugin.

> In the end, the plugin uses the composable inside of it with the correct form node for easy of use.

```bash
npm i formkit-addon-inertia
```

### 1. Composable

The `useInertia` is a function that receives a `FormKit` node and returns all Inertia HTTP methods.
Those are `visit`, `get`, `post`, `put`, `patch`, `delete` and `reload`.

```html
<script setup>
  import { useInertia } from "formkit-addon-inertia";
</script>

<template>
  <FormKit
    type="form"
    @submit="(fields, node) => useInertia(node).post('/user', fields)"
  >
    <FormKit type="text" name="name" label="Name" />
    <FormKit type="email" name="email" label="E-mail" />
  </FormKit>
</template>
```

### 2. Plugin

The `inertia` context property has all Inertia HTTP methods.
Those are `visit`, `get`, `post`, `put`, `patch`, `delete` and `reload`.

```html
<script setup>
  import inertiaPlugin from "formkit-addon-inertia";
</script>

<template>
  <FormKit
    type="form"
    :plugins="[inertiaPlugin]"
    @submit="(fields, node) => node.context.inertia.post('/user', fields)"
  >
    <FormKit type="text" name="name" label="Name" />
    <FormKit type="email" name="email" label="E-mail" />
  </FormKit>
</template>
```

> You can add this plugin as a global formkit plugin so every form has it, instead of defining manually like the example above
>
> ```js
> import { createApp } from "vue";
> import App from "App.vue";
> import { plugin, defaultConfig } from "@formkit/vue";
> import inertiaPlugin from "formkit-addon-inertia";
>
> createApp(App)
>   .use(plugin, defaultConfig({ plugins: [inertiaPlugin] }))
>   .mount("#app");
> ```

## License

[MIT](https://github.com/GustavoFenilli/formkit-addon-inertia/blob/main/LICENSE)
