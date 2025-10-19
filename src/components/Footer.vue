<script>
const currYear = new Date().getFullYear()

export default {
  name: 'Contenu',
  data() {
    return {
      currYear,
    }
  },
}
</script>

<template>
  <footer class="bg-dark p-4 relative z-0 mt-auto">
    <div class="d-flex">
      <div class="flex-grow-1">
        <span class="text-light text-sm fw-bold">DEV</span>
        <ul class="list-unstyled mt-3">
          <li class="flex-row mb-2 lh-sm">
            <a
              class="text-decoration-none text-secondary text-sm-special font-semibold"
              href="https://nbalovers.fr"
              >Symfony</a
            >
          </li>
          <li class="flex-row mb-2 lh-sm">
            <a
              class="text-decoration-none text-secondary text-sm-special font-semibold"
              href="https://nbalovers.fr/download"
              >React Native</a
            >
          </li>
          <li class="flex-row mb-2 lh-sm">
            <a
              class="text-decoration-none text-secondary text-sm-special font-semibold"
              href="https://jean-phil.gitlab.io/react/"
              >React</a
            >
          </li>
          <li class="flex-row mb-2 lh-sm">
            <a
              class="text-decoration-none text-secondary text-sm-special font-semibold"
              href="https://jean-phil.gitlab.io/vuejs-3/"
              >Vue 3</a
            >
          </li>
          <li class="flex-row mb-2 lh-sm">
            <a
              class="text-decoration-none text-secondary text-sm-special font-semibold"
              href="https://jp-parmentier-next.vercel.app/"
              >Next</a
            >
          </li>
          <li class="flex-row mb-2 lh-sm">
            <a
              class="text-decoration-none text-secondary text-sm-special font-semibold"
              href="https://jean-phil.gitlab.io/nuxt/"
              >Nuxt</a
            >
          </li>
          <li class="flex-row mb-2 lh-sm">
            <a
              class="text-decoration-none text-secondary text-sm-special font-semibold"
              href="https://rentacomic.ovh"
              >Symfony (ancien)</a
            >
          </li>
          <li class="flex-row mb-2 lh-sm">
            <a
              class="text-decoration-none text-secondary text-sm-special font-semibold"
              href="https://jean-phil.gitlab.io/react-project/"
              >React (ancien)</a
            >
          </li>
          <li class="flex-row mb-2 lh-sm">
            <a
              class="text-decoration-none text-secondary text-sm-special font-semibold"
              href="https://jean-phil.gitlab.io/my-vuejs-project/"
              >Vue 2 (ancien)</a
            >
          </li>
          <li class="flex-row mb-2 lh-sm">
            <a
              class="text-decoration-none text-secondary text-sm-special font-semibold"
              href="https://old.nbalovers.fr"
              >Php (ancien)</a
            >
          </li>
        </ul>
        <span class="text-light text-sm fw-bold">APP</span>
        <ul class="list-unstyled mt-3">
          <li class="flex-row mb-2 lh-sm">
            <a
              class="text-decoration-none text-secondary text-sm-special font-semibold"
              href="https://nbalovers.fr/download"
              >Android</a
            >
          </li>
          <li class="flex-row mb-2 lh-sm">
            <a
              class="text-decoration-none text-secondary text-sm-special font-semibold"
              href="https://nbalovers.fr/download"
              >iOS</a
            >
          </li>
        </ul>
      </div>
      <div class="flex-grow-1">
        <span class="text-light text-sm fw-bold">CONTACT</span>
        <ul class="list-unstyled mt-3">
          <li class="flex-row mb-2 lh-sm">
            <a
              class="text-decoration-none text-secondary text-sm-special font-semibold"
              href="https://www.linkedin.com/in/jean-philippe-parmentier/"
            >
              LinkedIn
            </a>
          </li>
          <li class="flex-row mb-2 lh-sm">
            <a class="text-decoration-none text-secondary text-sm-special font-semibold">
              Contact
            </a>
          </li>
        </ul>
        <span class="text-light text-sm fw-bold">LEGAL</span>
        <ul class="list-unstyled mt-3">
          <li class="flex-row mb-2 lh-sm">
            <a class="text-decoration-none text-secondary text-sm-special font-semibold">
              Terms of use
            </a>
          </li>
          <li class="flex-row mb-2 lh-sm">
            <a class="text-decoration-none text-secondary text-sm-special font-semibold">
              Privacy policy
            </a>
          </li>
          <li class="flex-row mb-2 lh-sm">
            <a class="text-decoration-none text-secondary text-sm-special font-semibold">
              Cookie policy
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="mb-2 mt-2 special-hr"></div>
    <p class="text-light rounded-md py-2 fw-bold special-p text-special">
      A Vue.js 3 project, built with Vite.
      <br />&copy; {{ currYear }} Jean-Philippe Parmentier - All right reserved.<br />
    </p>
  </footer>
</template>

<style scoped>
.text-sm-special {
  font-size: 0.9rem;
}
.font-semibold {
  font-weight: 600;
}
.special-hr {
  border-bottom: 1px solid #4b5563;
}
</style>
