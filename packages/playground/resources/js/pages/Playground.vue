<template>
  <FormKit
    type="form"
    submit-label="Add todo"
    @submit="(fields, _, inertiaOptions) => $inertia.post('/add-todo', fields, inertiaOptions)"
  >
    <h1>Add Todo</h1>
    <FormKit type="text" name="title" label="Title" validation="required" />
  </FormKit>

  <FormKit
    type="form"
    submit-label="Add todo"
    @submit="(fields) => $inertia.post('/add-todo', fields)"
  >
    <h1>Add Todo</h1>
    <FormKit type="text" name="title" label="Title" validation="required" />
  </FormKit>

  <ul>
    <li v-for="todo in todos">{{ todo.title }}</li>
  </ul>

  <FormKit
    type="button"
    @click="(_, inertiaOptions) => $inertia.delete('/delete-todos', {}, inertiaOptions)"
    label="Delete All"
  />
</template>

<script setup>
defineProps(['todos']);
</script>
