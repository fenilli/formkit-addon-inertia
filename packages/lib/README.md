# InertiaJS Formkit Plugin

A plugin for integrating [FormKit](https://github.com/formkit/formkit) and [InertiaJS](https://inertiajs.com/).

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

This plugins uses the inertia hooks to add to the formkit node the states like loading and disabled.

```js
<FormKit
    type="form"
    submit-label="Login"
    // Now when you call any inertia visit it adds to formkit node the states like loading and disabled
    @submit="(fields) => $inertia.post($route('yourRouter'), fields)"
>
    <FormKit type="email" name="email" label="E-mail" />
    <FormKit type="password" name="password" label="Password" />
</FormKit>
```

## Functionalities

- [x] Loading state when submiting
- [x] Disabled state when submiting
- [ ] Progress percentage added to the state
- [ ] Cancel visits function via schema and node
- [ ] Set and remove backend validation errors automaticaly

## Improvements

- [ ] Add formkit typescript types to the plugin parameter
- [ ] Make sure that only that formkit node is changed when inertia makes a visit
- [ ] Remove inertia event when the node is also removed

## Changelog

You can check any version change and its commits by the [changelog](https://github.com/gustavofenilli/inertiajs-formkit-plugin/blob/main/packages/lib/CHANGELOG.md)
