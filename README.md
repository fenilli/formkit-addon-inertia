# InertiaJS Formkit Plugin

A plugin for integrating [FormKit](https://github.com/formkit/formkit) and [InertiaJS](https://inertiajs.com/).

## How to use

```bash
npm i inertiajs-formkit-plugin
```

```js
import inertiaFormkitPlugin from 'inertiajs-formkit-plugin'

// formkit.config.js
const config = {
    plugins: [inertiaFormkitPlugin]
}

<FormKit
    type="form"
    submit-label="Login"
    // Now when you call inertia visit passing the new inertiaOptions it adds to formkit node the states like loading and disabled
    @submit="(fields, _, inertiaOptions) => $inertia.post($route('yourRouter'), fields, inertiaOptions)"
>
    <FormKit type="email" name="email" label="E-mail" />
    <FormKit type="password" name="password" label="Password" />
</FormKit>
```

For more information about the plugin check out the plugin's [README](https://github.com/gustavofenilli/inertiajs-formkit-plugin/blob/main/packages/lib/README.md)
