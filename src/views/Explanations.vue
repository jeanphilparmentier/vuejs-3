<script setup></script>

<template>
  <main>
    <div class="px-4 py-3 my-1 mb-5">
      <div class="div-desc col-12 col-sm-10 col-lg-7 col-xl-8 ms-auto me-auto mb-5">
        <h1 class="fs-2 fw-bold text-body-emphasis text-center mb-5">Features</h1>
        <p className="mt-5">
          Ce petit projet permet de mettre en place différentes fonctionnalités propres à Vue 3 et
          ES6. Voici la liste des features utilisées:
        </p>
        <ul className="ul-desc">
          <li class="mb-2">
            De la gestion d'événements avec la directive <b>v-on</b> et plus précisément sa syntax
            abrégée <b>@</b> par exemple: @click. Le but est d'écouter des événements de DOM tel que
            le clic sur un élément de la page html.
          </li>
          <li class="mb-2">
            De la liaison bidirectionnelle en utilisant les directives <b>v-bind</b> et
            <b>v-on</b> ensemble. Mais plutôt la version simplifiée de cette association de
            directives: <b>v-model</b> (sucre syntaxique). Cela permet d'associer automatiquement la
            valeur d'un input avec le state lié 💪.
          </li>
          <li class="mb-2">
            Du rendu conditionnel avec l'utilisation de la directive <b>v-if</b> pour afficher un
            élément en fonction d'une condition.
          </li>
          <li class="mb-2">
            Du rendu de liste avec l'utilisation de la directive <b>v-for</b>. Permet d'itérer un
            tableau comme ceci par exemple: <b> v-for="commande in commandes"</b>.
          </li>
          <li class="mb-2">
            Un observateur <b>watch()</b> qui permet d'observer un champ et d'exécuter un effet/une
            action dès que cette valeur change.
          </li>
          <li class="mb-2">
            Des composants imbriqués. Un composant parent peut "render" un composant enfant dans son
            template. Le composant enfant peut accepter des données venant du parent via des
            <b>props</b>.
          </li>
        </ul>
        <p className="mt-4">Concernant JavaScript moderne (ES6) j'utilise:</p>
        <ul className="ul-desc">
          <li class="mb-2">
            Une fonction d'ordre supérieur: la méthode <b>forEach()</b> elle peut prendre une autre
            fonction en argument (une fonction callback). Elle permet de faire une boucle sur les
            éléments d'un tableau est d'executer une fonction sur chacun de ses éléments.
          </li>
          <li class="mb-2">Une fonction fléchée <b>() => {}</b>.</li>
          <li class="mb-2">Le Spread Operator <b>...arr</b> pour copier un tableau par exemple.</li>
          <li class="mb-2">
            Enfin <b>let</b> et <b>const</b> qui sont block scoped et const n'est pas ré-assignable.
          </li>
        </ul>
        <p className="mt-4">Ce que je n'utilise pas ici mais que j'adore utiliser:</p>
        <ul className="ul-desc">
          <li class="mb-2">L'opérateur ternaire <b>test ? "true" : "false"</b>.</li>
          <li class="mb-2">Le Short-Circuit Operator <b>test && "true"</b>.</li>
        </ul>
      </div>
    </div>
  </main>
</template>
