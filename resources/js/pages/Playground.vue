<template>
  <FormKit type="form" submit-label="Login"
    @submit="(fields, node) => { node.context?.inertia.post('/dummy-create', fields) }">
    <FormKit type="text" label="E-mail" validation="required|email" />
    <FormKit type="password" label="Password" validation="required" autocomplete />
  </FormKit>
</template>
