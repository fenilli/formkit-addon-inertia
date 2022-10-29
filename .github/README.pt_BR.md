# FormKit Addon Inertia

Addon para integrar [InertiaJS](https://inertiajs.com/) com [FormKit](https://formkit.com/)

- 🇺🇸 [English](./README.md)
- 🇧🇷 [Português](./README.pt_BR.md)

## Sumário

- 🚀 [Primeiros Passos](#primeiros-passos)
- 🛠 [Opções](#opções)
- 👏 [Contribuindo](#contribuindo)
- 📝 [Licença](#licença)

## Primeiros Passos

Existem duas maneiras de usar este addon, primeiramente existe a composition, e também existe um plugin para o formkit.

> No final das contas, o plugin usa a função da composition com o node correto para facilitar o uso.

```bash
npm i formkit-addon-inertia
```

### 1. Composition

A função `useInertia` recebe um `FormKit` node e retorna todos metodos HTTP disponíveis pelo Inertia.
Estes sendo `visit`, `get`, `post`, `put`, `patch`, `delete` e `reload`.

```html
<script setup>
  import { useInertia } from "formkit-addon-inertia";
</script>

<template>
  <FormKit
    type="form"
    @submit="(fields, node) => useInertia(node).post('/users', fields)"
  >
    <FormKit type="text" name="nome" label="Nome" />
    <FormKit type="email" name="email" label="E-mail" />
  </FormKit>
</template>
```

### 2. Plugin

A propriedade `inertia` dentro do contexto conta tom todos os metodos HTTP disponíveis pelo Inertia.
Estes sendo `visit`, `get`, `post`, `put`, `patch`, `delete` e `reload`.

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
    <FormKit type="text" name="nome" label="Nome" />
    <FormKit type="email" name="email" label="E-mail" />
  </FormKit>
</template>
```

> Você pode adicionar o plugin de forma global para que todos os forms do FormKit tenham acesso as propriedades do Inertia, em vez de manualmente usar como no example acima.
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

## Opções

Você pode usar todos os [callbacks](https://inertiajs.com/manual-visits#event-callbacks) do InertiaJS, e nós adicionamos o node do FormKit para facil integração com suas funcionalidades.

> Por padrão nos adicionamos algumas funcionalidades dentro dos callbacks do Inertia para que o uso seja mais simples.
>
> Existem 4 funcionalidades, carregamento, prop disabled automatico, data attribute com progresso e automaticamento mostrar erros nos campos.
> Você pode disabilitar qualquer um deles passando qualquer uma dessas propriedades nas opções.
>
> { disableLoading: true, disableDisabled: true, disableProgress: true, disableErrors: true }

```html
<script setup>
  const onSuccess = (page, node) => {
    // Qualquer logica dentro do onSuccess
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
    <FormKit type="text" name="nome" label="Nome" />
    <FormKit type="email" name="email" label="E-mail" />
  </FormKit>
</template>
```

## Contribuindo

Todas contribuições são bem vindas e apreciadas!

- Você sempre pode clicar na estrelinha!
- Qualquer bug que você encontrar pode ser reportado abrindo um [chamado](https://github.com/GustavoFenilli/formkit-addon-inertia/issues/new?assignees=GustavoFenilli&labels=bug)
- Se você tem uma ideia legal ou funcionalidade que você quer adicionado, abra uma [discussão](https://github.com/GustavoFenilli/formkit-addon-inertia/discussions/new?category=ideas) sobre ela
- Você pode abrir um pull request com soluçoes ou funcionalidades, leia nosso [guia de contribuição](./CONTRIBUTING.pt_BR.md) para começar

## Licença

[MIT](https://github.com/GustavoFenilli/formkit-addon-inertia/blob/main/LICENSE)
