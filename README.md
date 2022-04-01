# inertiajs-formkit-plugin

A plugin for integrating [FormKit's](https://github.com/formkit/formkit) and [InertiaJS](https://inertiajs.com/).

## Improvements

- [ ] Add a playground with inertia for easy testing and implementing new features
- [ ] Make sure that only the formkit node is changed when inertia makes a visit
- [ ] Add progress state to formkit so it can be tracked and used if needed
- [ ] Remove the event when the node is also removed
- [ ] Add cancelable visits when possible via schema or function

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
