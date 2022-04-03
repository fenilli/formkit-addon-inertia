# FormKit Inertify

A plugin for integrating [InertiaJS](https://inertiajs.com/) with [FormKit](https://github.com/formkit/formkit).

## How to use

```bash
npm i formkit-inertify
```

```ts
import formkitInertify from 'formkit-inertify';

// formkit.config.js
const config = {
    plugins: [formkitInertify]
}

<FormKit
    type="form"
    submit-label="Login"
    // You can use the new inertia property inside the context to make inertia visits
    @submit="(fields, node) => node.context.inertia.post('/login', fields)"
>
    <FormKit type="email" name="email" label="E-mail" />
    <FormKit type="password" name="password" label="Password" />
</FormKit>
```

For more information about the plugin check out the plugin's [README](https://github.com/gustavofenilli/formkit-inertify/blob/main/packages/lib/README.md)

## Contributing

Any contribution is welcomed, be it an issue found, a feature you would like to see, to any pull request you wish to make.

[ [Checkout how to do it](https://github.com/GustavoFenilli/formkit-inertify/blob/main/CONTRIBUTING.md) ]
