<template>
  <FormKit type="form" submit-label="Add todo" @submit="submit">
    <h1>Add Todo</h1>
    <FormKit type="text" name="title" label="Title" validation="required" />
  </FormKit>

  <ul>
    <li v-for="todo in todos">{{ todo.title }}</li>
  </ul>
</template>

<script setup>
import { Inertia } from '@inertiajs/inertia';

defineProps(['todos']);

const submit = (fields) => Inertia.post('/todo', fields);
</script>
