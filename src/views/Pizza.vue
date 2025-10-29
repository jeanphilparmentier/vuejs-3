<script setup>
import { ref, watch } from 'vue'

import Commande from '@/components/Commande.vue'

import JSConfetti from 'js-confetti'
const confetti = new JSConfetti()

const nombreTotalClient = ref()
const commandes = ref([])
const attenteMoyenneParClient = ref(0)

let erreur = false
let message = ''
let attenteTotale = 0
let tempsCuissonClientsPrécédents = 0
let tableauCommandesOptimisées = []
let attenteMoyenneOptimiséeNew = 0

function tempsAttenteMoyen(tableauCommande) {
  initialisation()

  tableauCommande.forEach((commandeClient) => {
    // Je peux utiliser une fonction classique dans le .forEach(),
    // mais je vais utiliser une fonction fléchée pour profiter de ES6.
    // La formule pour calculer le temps d'attente pour 1 client est:
    // tempsCuissonClientsPrecedent - arrivéeA + tempsCuisson
    attenteTotale +=
      tempsCuissonClientsPrécédents -
      Number(commandeClient.arrivéA) +
      Number(commandeClient.tempsCuisson)
    tempsCuissonClientsPrécédents += Number(commandeClient.tempsCuisson)
  })

  // Calcule de l'attente moyenne par client (attente totale divisée par le nombre total de clients)
  attenteMoyenneParClient.value = (attenteTotale / tableauCommande.length).toFixed(2)

  // Maintenant je vais calculer le temps moyen optimisé
  attenteTotale = 0
  tempsCuissonClientsPrécédents = 0

  // On commence par faire un tableau des commandes optimisées:
  tableauCommandesOptimisées = créerTableauCommandesOptimisées(tableauCommande)

  // Calcule l'attente totale optimisée pour tous les clients
  tableauCommandesOptimisées.forEach((commandeClient) => {
    // Là aussi fonction fléchée,
    // mais le plus adéquat aurait été d'appeler une fonction classique.
    // Car on fait 2 fois ce bloc d'instruction.
    attenteTotale +=
      tempsCuissonClientsPrécédents -
      Number(commandeClient.arrivéA) +
      Number(commandeClient.tempsCuisson)
    tempsCuissonClientsPrécédents += Number(commandeClient.tempsCuisson)
  })

  // Calcule de l'attente moyenne optimisée par client
  attenteMoyenneOptimiséeNew = (attenteTotale / tableauCommandesOptimisées.length).toFixed(2)

  confetti.addConfetti()
}

function créerTableauCommandesOptimisées(tableauCommande) {
  let tabOptimisé = 0

  // Spread Operator pour copier le tableau
  tabOptimisé = [...tableauCommande]
  tabOptimisé.sort((a, b) => a.tempsCuisson - b.tempsCuisson)

  return tabOptimisé
}

function initialisation() {
  attenteMoyenneParClient.value = 0
  attenteTotale = 0
  tempsCuissonClientsPrécédents = 0
}

watch(nombreTotalClient, (newNombreTotalClient) => {
  // Utilisons une bonne vieille regex 😱😉 pour determiner si il s'agit d'un entier
  const regex = /^-?\d+$/
  if (newNombreTotalClient.length > 0) {
    if (regex.test(newNombreTotalClient)) {
      // C'est un entier
      // On respecte la règle 1 ≤ N ≤ 10^2
      if (nombreTotalClient.value > 100) {
        message = 'Le nombre de client doit être inférieur à 100'
        erreur = true
        commandes.value = []
      } else if (nombreTotalClient.value < 1) {
        message = 'Le nombre de client doit être supérieur à 0'
        erreur = true
        commandes.value = []
      } else {
        // C'est un entier et on respecte les règles
        erreur = false
        message = ''
        //On prépare le tableau contenant la liste des clients, leur temps d'arrivé et le temps de cuisson de la pizza
        commandes.value = []
        for (let i = 1; i <= nombreTotalClient.value; i++) {
          commandes.value.push({ id: i, arrivéA: '', tempsCuisson: '' })
        }
      }
    } else {
      // Ce n'est pas un entier
      erreur = true
      message = 'Vous devez enter un entier'
      commandes.value = []
    }
  } else {
    erreur = false
    message = ''
    commandes.value = []
    initialisation()
  }
})
</script>

<template>
  <div class="px-4 py-3 my-1 mb-5 d-flex flex-column align-items-center wide-screen">
    <div class="contain">
      <h1 class="fs-2 fw-bold text-body-emphasis text-center mb-5">
        Optimisation du temps d'attente:
      </h1>
      <div class="">
        <div class="lead mb-4">
          <div v-if="erreur" class="alert alert-danger" role="alert">
            {{ message }}
          </div>
          <div>Exemple de saisie pour 3 clients :</div>
          <div class="row mt-2 mb-2">
            <div class="col-12 col-md-9 col-sm-10">
              <table class="table fs-6">
                <thead>
                  <tr>
                    <th>Liste clients</th>
                    <th>Arrivé à (min)</th>
                    <th>Temps de cuisson (min)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Client #1</th>
                    <td>0</td>
                    <td>9</td>
                  </tr>
                  <tr>
                    <th>Client #2</th>
                    <td>1</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <th>Client #3</th>
                    <td>2</td>
                    <td>6</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <span class="saisir">Saisir un nombre de clients : </span>
            <input
              v-model="nombreTotalClient"
              class="col-4 col-sm-4 me-1"
              placeholder="Nombre de client"
            />
          </div>

          <!-- <span v-if="nombreTotalClient">Clients en attente: {{ nombreTotalClient }}</span> -->
          <!-- <br /> -->
        </div>
        <Commande :tabCommandes="commandes" :disableInput="false" />
        <button
          v-if="commandes.length > 0"
          type="button mt-1"
          class="btn btn-primary mt-3 mb-3"
          @click="tempsAttenteMoyen(commandes)"
        >
          Calcule temps moyen et optimise l'ordre de cuisson des pizzas
        </button>
        <div class="mt-2" v-if="attenteMoyenneParClient > 0">
          <!-- <div> -->
          <div class="alert alert-primary" role="alert">
            Temps d'attente moyen (non optimisé) pour chaque client :
            {{ attenteMoyenneParClient }} minutes
          </div>
          <!-- </div> -->
          <p class="lead mb-1 mt-4">Mais si on cuit les pizzas dans cet ordre :</p>
          <div class="row mt-2">
            <div class="col-12 col-md-10 col-sm-10">
              <table class="table">
                <thead>
                  <tr>
                    <th>Nouvel ordre</th>
                    <th>Était arrivé à (min)</th>
                    <th>Temps de cuisson (min)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="client in tableauCommandesOptimisées">
                    <th>Client #{{ client.id }}</th>
                    <td>{{ client.arrivéA }}</td>
                    <td>{{ client.tempsCuisson }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!-- <Commande :tabCommandes="tableauCommandesOptimisées" :disableInput=true /> -->
          <div class="">
            <div class="alert alert-primary mt-2" role="alert">
              Le temps moyen d'attente pour chaque client sera alors de :
              {{ attenteMoyenneOptimiséeNew }} minutes
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wide-screen {
  min-height: 648px;
  margin-top: 106px !important;
}
@media screen and (max-width: 1200px) {
  .wide-screen {
    min-height: 60px !important;
    margin-top: 20px !important;
  }
}
.contain {
  max-width: 580px;
  width: 100%;
}
.table-fs {
  font-size: 1rem;
}

@media (max-width: 545px) {
  input::placeholder {
    font: 0.85rem sans-serif;
  }
  input {
    font: 0.86rem sans-serif;
  }
}
@media (max-width: 428px) {
  input::placeholder {
    font: 0.82rem sans-serif;
  }
  input {
    font: 0.83rem sans-serif;
  }
  .saisir {
    font-size: 1.15rem;
  }
}
@media (max-width: 396px) {
  input::placeholder {
    font: 0.82rem sans-serif;
  }
  input {
    font: 0.83rem sans-serif;
  }
  .saisir {
    font-size: 1.1rem;
  }
}
@media (max-width: 391px) {
  input::placeholder {
    font: 0.77rem sans-serif;
  }
  input {
    font: 0.78rem sans-serif;
  }
  .saisir {
    font-size: 1rem;
  }
}
@media (max-width: 367px) {
  input::placeholder {
    font: 0.75rem sans-serif;
  }
  input {
    font: 0.76rem sans-serif;
  }
  .saisir {
    font-size: 0.85rem;
  }
}
@media (max-width: 354px) {
  input::placeholder {
    font: 0.7rem sans-serif;
  }
  input {
    font: 0.71rem sans-serif;
  }
  .saisir {
    font-size: 0.85rem;
  }
}
@media (max-width: 335px) {
  input::placeholder {
    font: 0.65rem sans-serif;
  }
  input {
    font: 0.66rem sans-serif;
  }
  .saisir {
    font-size: 0.84rem;
  }
}
</style>
