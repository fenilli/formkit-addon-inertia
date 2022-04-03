<template>
  <FormKit
    type="form"
    submit-label="Add todo"
    @submit="(fields, node) => node.context.inertia.post('/add-todo', fields)"
  >
    <h1>Add Todo</h1>
    <FormKit type="text" name="title" label="Title" validation="required" />
  </FormKit>

  <FormKit
    type="form"
    submit-label="Add todo too"
    @submit="(fields, node) => node.context.inertia.post('/add-todo', fields)"
  >
    <h1>Add Todo Too</h1>
    <FormKit type="text" name="title" label="Title" validation="required" />
  </FormKit>

  <ul>
    <li v-for="todo in todos">{{ todo.title }}</li>
  </ul>

  <FormKit type="button" @click="$inertia.delete('/delete-todos')" label="Delete All" />
</template>

<script setup>
defineProps(['todos']);
</script>
