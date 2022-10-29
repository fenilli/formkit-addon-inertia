# FormKit Addon Inertia

Addon for integrating [InertiaJS](https://inertiajs.com/) with [FormKit](https://formkit.com/)

- 🇺🇸 [English](./README.md)
- 🇧🇷 [Português](./README.pt_BR.md)

## Table of contents

- 🚀 [Getting Started](#getting-started)
- 🛠 [Options](#options)
- 👏 [Contributing](#contributing)
- 📝 [License](#license)

## Getting Started

There are two ways to use this addon, firstly there is the composition way, and there is also a formkit plugin.

> In the end, the plugin uses the composable inside of it with the correct form node for easy of use.

```bash
npm i formkit-addon-inertia
```

### 1. Composition

The `useInertia` is a function that receives a `FormKit` node and returns all Inertia HTTP methods.
Those are `visit`, `get`, `post`, `put`, `patch`, `delete` and `reload`.

```html
<script setup>
  import { useInertia } from "formkit-addon-inertia";
</script>

<template>
  <FormKit
    type="form"
    @submit="(fields, node) => useInertia(node).post('/users', fields)"
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
    @submit="(fields, node) => node.context.inertia.post('/users', fields)"
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

## Options

You can use all of InertiaJS [callbacks](https://inertiajs.com/manual-visits#event-callbacks), and we add the FormKit node as the last argument for easy integration of your features.

> We by default add some features inside Inertia callbacks to make the use smoother.
>
> There are four features, loading message, disabled prop, progress data attribute and automatic field errors.
> You can disable any of these by passing any of these properties to the options.
>
> { disableLoading: true, disableDisabled: true, disableProgress: true, disableErrors: true }

```html
<script setup>
  const onSuccess = (page, node) => {
    // Do any onSuccess logic here
  };

  const submit = (fields, node) => {
    node.context.inertia.post("/users", fields, {
      onSuccess,
      disableProgress: true,
    });
  };
</script>

<template>
  <FormKit type="form" @submit="submit">
    <FormKit type="text" name="name" label="Name" />
    <FormKit type="email" name="email" label="E-mail" />
  </FormKit>
</template>
```

## Contributing

All contributions are welcomed and appreciated!

- You can always star it!
- Any bug you found can be reported by opening an [issue](https://github.com/GustavoFenilli/formkit-addon-inertia/issues/new?assignees=GustavoFenilli&labels=bug)
- If you have any cool ideas or features you want to be added just open a [discussion](https://github.com/GustavoFenilli/formkit-addon-inertia/discussions/new?category=ideas) about it
- You can make pull request with fixes or features, read out the [contributing guide](./CONTRIBUTING.md) to get started

## License

[MIT](https://github.com/GustavoFenilli/formkit-addon-inertia/blob/main/LICENSE)
