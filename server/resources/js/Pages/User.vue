<script setup>
import { useInertia, plugin as inertiaPlugin } from 'formkit-addon-inertia'
import { useToast } from 'vue-toastification'

const toast = useToast()

const toastOnSuccess = (page) => {
  toast.success(page.props.success)
}

const submit = (fields, node) => {
  useInertia(node).post('/users', fields, { onSuccess: toastOnSuccess })
}
</script>

<template>
  <div class="container">
    <h1>Using with Composition</h1>
    <FormKit type="form" @submit="submit">
      <FormKit type="text" name="name" label="Name" validation="required" />
      <FormKit type="email" name="email" label="E-mail" validation="required|email" />
    </FormKit>

    <h1>Using with Context Plugin</h1>
    <FormKit
      type="form"
      :plugins="[inertiaPlugin]"
      @submit="
        (fields, node) =>
          node?.context?.inertia.post('/users', fields, { onSuccess: toastOnSuccess })
      "
    >
      <FormKit type="text" name="name" label="Name" validation="required" />
      <FormKit type="email" name="email" label="E-mail" validation="required|email" />
    </FormKit>

    <h1>Using with Global Context Plugin</h1>
    <FormKit
      type="form"
      @submit="
        (fields, node) =>
          node?.context?.inertia.post('/users', fields, { onSuccess: toastOnSuccess })
      "
    >
      <FormKit type="text" name="name" label="Name" validation="required" />
      <FormKit type="email" name="email" label="E-mail" validation="required|email" />
    </FormKit>
  </div>
</template>

<style>
.container {
  padding-top: 2rem;
  display: grid;
  justify-content: center;
}
</style>
