<template>
  <header class="h-28 w-full bg-zinc-950 flex items-center border-gray-900 shadow-lg">
    <nav class="animate-fade-right w-full">
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
        <!-- Botón que redirigirá a la página de pedir presupuesto -->
        <div class="hidden md:flex items-center justify-center px-3 py-2 bg-red-800 shadow-md shadow-red-700 hover:bg-gray-900 hover:text-white hover:shadow-md hover:shadow-gray-800 transition duration-500 focus:outline-none font-semibold leading-6 text-gray-50 md:ml-10 rounded-full">
          <NuxtLink :to="headerData.ctaLink" class="flex items-center justify-center">
            <span class="hidden md:inline md:max-w-xs md:overflow-hidden md:text-sm">{{ headerData.ctaText }}</span>
            <font-awesome-icon icon="comment-dots" class="md:ml-2 pt-1 mb-1" />
          </NuxtLink>
        </div>
      </div>
    </nav>
    <!-- Menú lateral (visible en dispositivos móviles cuando se activa) -->
    <transition name="slide ">
      <div v-if="mobileMenuOpen" class="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50" @click="closeMenu"></div>
    </transition>
    <transition name="slide">
      <nav v-if="mobileMenuOpen" class="lg:hidden fixed top-28 inset-y-0 left-0 w-64 bg-gray-950 z-50">
        <ul class="pt-10">
          <li v-for="(item, index) in headerData.navItems" :key="index">
            <a :href="item.link" class="block py-2 px-4 ml-2 text-lg font-bold text-gray-50 hover:text-custom-orange hover:bg-gray-200">{{ item.text }}</a>
          </li>
          <br>

          <hr class="lg:hidden w-4/5 mx-auto">

          <br>
          <li>
            <a href="/contacto" class="block py-2 px-4 ml-2 text-lg font-bold text-gray-50 hover:text-custom-orange hover:bg-gray-200 uppercase">Contacto</a>
          </li>
          <li>
            <a href="/presupuesto" class="block py-2 px-4 ml-2 text-lg font-bold text-gray-50 hover:text-custom-orange hover:bg-gray-200 mb-4 uppercase">Pedir Presupuesto</a>
          </li>

          <hr class="lg:hidden w-4/5 mx-auto mb-4">

          <li>
            <a href="/nosotros" class="block py-2 px-4 ml-2 text-lg font-bold text-gray-50 hover:text-custom-orange hover:bg-gray-200 uppercase">Sobre Nosotros</a>
          </li>
          <li>
            <a href="/dondestamos" class="block py-2 px-4 ml-2 text-lg font-bold text-gray-50 hover:text-custom-orange hover:bg-gray-200 uppercase">Dónde Estamos</a>
          </li>
        </ul>
      </nav>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBarsStaggered, faComments } from '@fortawesome/free-solid-svg-icons';
library.add(faBarsStaggered, faComments);

const mobileMenuOpen = ref(false);

// Datos estáticos para el header
const headerData = ref({
  logoUrl: 'https://marmoleseurostone.com/images/EUROSTONE_MARMOLES_PIDRAS_300_rv01.png', // URL del logo
  navItems: [
    { text: 'MATERIALES', link: '/materials' },
    { text: 'CANTERAS', link: '/quarries' },
    { text: 'ACABADOS', link: '/finishes' }
  ],
  ctaText: 'Pedir Presupuesto',
  ctaLink: '/presupuesto'
});

function toggleMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value;
}

function closeMenu() {
  mobileMenuOpen.value = false;
}
</script>

<style scoped>
header {
  position: sticky;
  top: 0;
  z-index: 1000;
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
  width: 100%;
  background-color: #f13d31;
  box-shadow: 0 2px 5px rgba(131, 130, 130, 0.589);
}

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
