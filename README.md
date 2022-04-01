# inertiajs-formkit-plugin

A plugin for integrating [FormKit's](https://github.com/formkit/formkit) and [InertiaJS](https://inertiajs.com/).

## Installation

```bash
npm i inertiajs-formkit-plugin
```

```ts
import inertiaFormkitPlugin from 'inertiajs-formkit-plugin'

// formkit.config.js
const config = {
    plugins: [inertiaFormkitPlugin]
}
```

## Usages

This plugins adds some FormKit states to Inertia hooks.

```js
<FormKit
    type="form"
    submit-label="Login"
    // When calling a $inertia visit it adds states via inertia hooks
    @submit="(fields) => $inertia.post($route('yourRouter'), fields)"
>
    <FormKit type="email" name="email" label="E-mail" />
    <FormKit type="password" name="password" label="Password" />
</FormKit>
```
