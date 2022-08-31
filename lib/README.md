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

## Inertia options

You can pass any of inertia options to it, event callbacks also get the node as the second parameter as a bonus.

```html
<!-- You can pass any inertia property and events callback to it -->
<FormKit
    type="form"
    submit-label="Login"
    @submit="(fields, node) => node.context.inertia.post('/login', fields, { onBefore: (visit, node) => { console.log(visit, node); }})"
>
    <FormKit type="email" name="email" label="E-mail" />
    <FormKit type="password" name="password" label="Password" />
</FormKit>
```

## Disable inertify behaviour

If you want to disable the default behaviour of inertify at a given event you can by setting its disable callback name to false.

```html
<FormKit
    type="form"
    submit-label="Login"
    @submit="(fields, node) => node.context.inertia.post('/login', fields, { onBefore: (visit, node) => { console.log(visit, node); }, disable: { onError: false } })"
>
    <FormKit type="email" name="email" label="E-mail" />
    <FormKit type="password" name="password" label="Password" />
</FormKit>
```

## Functionalities

- [x] Loading state when submiting
- [x] Disabled state when submiting
- [x] Progress percentage added to the state
- [x] Set and remove backend validation errors automaticaly

## Changelog

You can check any version change and its commits by the [changelog](https://github.com/gustavofenilli/formkit-inertify/blob/main/CHANGELOG.md)

## Contributing

Any contribution is welcomed, be it an issue found, a feature you would like to see, to any pull request you wish to make.

[ [Checkout how to do it](https://github.com/GustavoFenilli/formkit-inertify/blob/main/CONTRIBUTING.md) ]
