<script setup>
import { ref } from 'vue'
const visible = ref(false)
</script>

<template>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div class="container-fluid">
      <router-link @click="visible = !visible" class="nav-link me-auto navbar-brand" to="/" exact
        >Vue.js 3</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
        ref="navbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" :class="!visible ? 'collapse' : ''" id="navbarCollapse">
        <ul class="navbar-nav mr-auto slideDown">
          <li class="nav-item">
            <router-link class="nav-link" to="/features" @click="visible = !visible" exact
              >Features</router-link
            >
          </li>
          <li class="nav-item">
            <router-link @click="visible = !visible" class="nav-link" to="/code" exact
              >Code</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
#navbarCollapse {
  justify-content: flex-end;
}
@media screen and (min-width: 767px) {
  .navbar-nav {
    --bs-nav-link-padding-y: 0 !important;
  }
}
</style>
