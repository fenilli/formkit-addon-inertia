<template>
  <FormKit type="form" submit-label="Login"
    @submit="(fields, node) => { node?.context?.inertia.post('/login', fields) }">
    <FormKit type="text" label="E-mail" name="email" validation="required|email" />
    <FormKit type="password" label="Password" name="password" validation="required" autocomplete />
  </FormKit>
</template>
