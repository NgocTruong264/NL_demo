<template>
  <div>
    <LoginForm />
  </div>
</template>
<script setup>
import LoginForm from '@/components/Authenticate/LoginForm.vue';
import { defineComponent } from 'vue';
defineComponent({ LoginForm })
</script>