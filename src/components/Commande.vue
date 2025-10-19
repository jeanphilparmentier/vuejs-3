<script setup>
const props = defineProps({
  tabCommandes: Array,
  disableInput: Boolean,
})
</script>

<template>
  <ul class="mb-2">
    <li class="mt-2 list-unstyled" v-for="commande in tabCommandes" :key="commande.id">
      <span class="me-2">Client #{{ commande.id }}</span>
      <input
        class="col-3 col-sm-3 col-md-2 col-lg-2"
        v-model="commande.arrivéA"
        placeholder="Arrivé à"
        :disabled="disableInput"
        :readonly="disableInput"
      />
      <input
        class="ms-1 col-5 col-sm-5 col-md-4 col-lg-4"
        v-model="commande.tempsCuisson"
        placeholder="Temps de cuisson"
        :disabled="disableInput"
        :readonly="disableInput"
      />
    </li>
  </ul>
</template>

<style scoped>
@media (max-width: 545px) {
  input::placeholder {
    font: 0.85rem sans-serif;
  }
}
</style>
