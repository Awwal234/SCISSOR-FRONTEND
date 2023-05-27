<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import RefreshSystem from './components/RefreshSystem.vue'
</script>

<template>
    <RouterView/>
    <RefreshSystem/>
</template>

<style>
html{
  height: 100%;
}
body, main{
  min-height: 100%;
}
.font-anton{
  font-family: 'Anton', sans-serif;
}
.font-inter{
  font-family: 'Inter', sans-serif;
}
</style>
