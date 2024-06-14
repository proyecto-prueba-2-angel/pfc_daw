<template>
  <header v-bind="$attrs" class="h-28 w-full bg-zinc-950 flex items-center border-gray-900 shadow-lg">
    <nav class="animate-fade-right animate-delay-200 w-full">
      <div class="max-w-screen-xl flex items-center justify-between mx-auto px-4 py-2">
        <!-- Botón del menú burger (visible solo en móviles) -->
        <button class="md:hidden mr-4" @click="toggleMenu">
          <font-awesome-icon class="w-8 h-8 text-gray-200 active:animate-pulse" icon="bars-staggered" />
        </button>

        <!-- Logo de la empresa -->
        <a href="/" class="shrink-0">
          <img :src="headerData.logoUrl" class="h-8" alt="Eurostone Logo" />
        </a>

        <!-- Menú de navegación -->
        <ul class="hidden md:flex flex-col md:flex-row items-center md:space-x-2 lg:space-x-4 xl:space-x-8 2xl:space-x-10">
          <li v-for="(item, index) in headerData.navItems" :key="index">
            <NuxtLink :to="item.link" class="py-2 px-3 text-xl text-white font-bold nav-link" active-class="nuxt-link-active">{{ item.text }}</NuxtLink>
          </li>
        </ul>

        <!-- Botón que redirigirá a la página de pedir cita -->
        <div class="hidden md:flex items-center justify-center px-3 py-2 bg-red-800 shadow-md shadow-red-700 hover:bg-gray-900 hover:text-white hover:shadow-md hover:shadow-gray-800 transition duration-500 focus:outline-none font-semibold leading-6 text-gray-50 md:ml-10 rounded-full">
          <NuxtLink :to="headerData.ctaLink" class="flex items-center justify-center">
            <span class="hidden md:inline md:max-w-xs md:overflow-hidden md:text-sm">{{ headerData.ctaText }}</span>
            <font-awesome-icon icon="comment" class="md:ml-2 pt-1" />
          </NuxtLink>
        </div>
      </div>
    </nav>
  </header>

  <!-- Menú lateral (visible en dispositivos móviles cuando se activa) -->
  <transition name="slide">
    <div v-if="mobileMenuOpen" class="fixed inset-0 bg-black bg-opacity-50 z-50" @click="toggleMenu"></div>
  </transition>
  <transition name="slide">
    <nav v-if="mobileMenuOpen" class="fixed top-28 inset-y-0 left-0 w-64 bg-gray-950 z-50">
      <ul class="pt-10">
        <li>
          <a href="/" class="block py-2 px-4 text-lg text-gray-50 hover:text-custom-orange hover:bg-gray-200">INICIO</a>
        </li>
        <hr class="mx-4 my-2 shadow-zinc-50 shadow-sm">
        <li v-for="(item, index) in headerData.navItems" :key="index">
          <a :href="item.link" class="block py-2 px-4 ml-2 text-lg font-bold text-gray-50 hover:text-custom-orange hover:bg-gray-200">{{ item.text }}</a>
        </li>
        <hr class="mx-4 my-2 shadow-zinc-50 shadow-sm">
        <li>
          <a :href="headerData.ctaLink" class="block py-2 px-4 text-lg font-bold text-gray-50 hover:text-custom-orange hover:bg-gray-200">{{ headerData.ctaText }} <font-awesome-icon icon="comments" /></a>
        </li>
      </ul>
    </nav>
  </transition>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBarsStaggered, faComments } from '@fortawesome/free-solid-svg-icons';

library.add(faBarsStaggered, faComments);

const isTransitioning = ref(false); // Nuevo estado para controlar la transición
const mobileMenuOpen = ref(false);
const headerData = ref({
  logoUrl: '',
  navItems: [],
  ctaText: '',
  ctaLink: ''
});

async function fetchHeaderData() {
  try {
    const response = await fetch('http://localhost/PFC/server.php?headerData=true');
    const data = await response.json();
    headerData.value = data;
  } catch (error) {
    console.error('Error fetching header data:', error);
  }
}

onMounted(() => {
  fetchHeaderData();
});

function toggleMenu() {
  if(!isTransitioning.value) {
    isTransitioning.value = true;
    mobileMenuOpen.value = !mobileMenuOpen.value;
    setTimeout(() => {
      isTransitioning.value = false;
    }, 500); // Asegúrate de que este tiempo coincida con la duración de tu transición más larga
  }
}
</script>

<style scoped>
header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: #090b0f;
  width: 100%;
  opacity: 0.98;
}

.nav-link {
  position: relative;
  display: inline-block;
  padding: 2px 0;
}

.nav-link::after, .nuxt-link-active::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: white;
  transition: width 0.3s ease-in-out, background-color 0.3s ease;
}

.nav-link:hover::after, .nuxt-link-active::after {
  width: 100%;
}

.nuxt-link-active::after {
  width: 100%; /* Asegura que el subrayado permanezca para el enlace activo */
  background-color: #f13d31; /* Cambio de color para el enlace activo */
  box-shadow: 0 2px 5px rgba(131, 130, 130, 0.589)}

.slide-enter-active, .slide-leave-active {
  transition: opacity 0.5s, transform 0.5s ease;
}

.slide-enter-from, .slide-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.slide-enter-to, .slide-leave-from {
  opacity: 1;
  transform: translateX(0%);
}
</style>
