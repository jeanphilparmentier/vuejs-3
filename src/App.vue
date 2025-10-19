<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <header>
    <Navbar />
  </header>

  <RouterView />
  <Footer />
</template>

<style scoped></style>
