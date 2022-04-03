# FormKit Inertify

A plugin for integrating [InertiaJS](https://inertiajs.com/) with [FormKit](https://github.com/formkit/formkit).

## Installation

```bash
npm i formkit-inertify
```

```ts
import formkitInertify from 'formkit-inertify';

// formkit.config.js
const config = {
    plugins: [formkitInertify]
}
```

## How to use

This plugins adds to formkit's context an inertia property to be used for visits adding visit callbacks to change formkit's state.

```html
<!-- You can use the new inertia property inside the context to make inertia visits -->
<FormKit
    type="form"
    submit-label="Login"
    @submit="(fields, node) => node.context.inertia.post('/login', fields)"
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

- [x] Add formkit and inertia typescript types to the plugin
- [x] Make sure that only that formkit node is changed when inertia makes a visit

## Changelog

You can check any version change and its commits by the [changelog](https://github.com/gustavofenilli/formkit-inertify/blob/main/packages/lib/CHANGELOG.md)
