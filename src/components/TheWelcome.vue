<script setup></script>

<template>
  <div class="px-4 py-3 my-1 text-center wide-screen">
    <h1 class="display-5 fw-bold text-body-emphasis">Vue.js 3</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">
        Ce projet est un exercice d'algorithmie en Vue.js 3 (construit avec Vite). Le but est
        d'écrire un algorithme capable de calculer le temps moyen d'attente de clients arrivant à
        différents moments dans une pizzeria et commandant des pizzas aux temps de cuisson
        différents. L'algorithme va alors proposer un meilleur ordre pour traiter la file d'attente
        des clients de la pizzeria. La pizzeria ne dispose que d'un seul four et on ne peut en cuire
        qu'une seule à la fois. <br />Cuire les pizzas les unes après les autres, dans l'ordre
        d'arrivée des clients, n'est pas la solution optimale.<br />
        Ce projet est très basique et concis, mais il permet de mettre en place beaucoup de concepts
        de Vue 3 et ES6, il est en cours d'amélioration.
      </p>
    </div>
  </div>
</template>

<style scoped>
  .wide-screen {
    min-height: 598px;
    margin-top: 200px !important;
  }
  @media screen and (max-width: 1200px) {
    .wide-screen {
      min-height: 60px !important;
      margin-top: 20px !important;
    }
  }
</style>
