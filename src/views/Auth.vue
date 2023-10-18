<script setup lang="ts" >
import AuthWindow from '../components/AuthWindow.vue';
import ThemeToggleButton from '../components/ThemeToggleButton.vue';
</script>

<template>
  <v-app>
    <v-row no-gutters justify="start">
      <ThemeToggleButton></ThemeToggleButton>
    </v-row>
    <AuthWindow></AuthWindow>
  </v-app>
</template>

<style scoped>
</style>