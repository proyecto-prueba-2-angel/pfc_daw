<template>
  <div class="flex flex-col min-h-screen">
    <Header class="sticky top-0 left-0 w-full bg-black text-white p-2.5 z-50" />
    <div class="flex-grow bg-gray-50">
      <div class="container mx-auto px-4 py-16 bg-gray-300 shadow-lg rounded-lg mt-6">
        <div class="text-center">
          <h1 class="text-3xl font-bold mb-8 text-gray-800 uppercase">
            Panel de Administrador
          </h1>
          <button class="btn-logout mb-10" @click="logOut">
            <font-awesome-icon icon="sign-out-alt" class="mr-2" />
            Salir
          </button>
          <div class="flex flex-col items-center mt-8">
            <div class="relative">
              <div class="flex justify-center gap-10 flex-wrap">
                <div
                  v-for="item in items" :key="item.id"
                  class="cursor-pointer bg-gray-800 hover:bg-gray-600 text-white font-bold rounded-lg shadow-lg p-6 flex flex-col items-center justify-center w-40 h-40 transition-all duration-300 transform"
                  @click="navigateTo(item.route)"
                >
                  <font-awesome-icon :icon="item.icon" class="text-4xl mb-2" />
                  <span>{{ item.name }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '~/stores/auth';
useHead({
  title: 'Panel de administrador - Eurostone',
  meta: [
    {
      name: 'description',
      content: 'Realizar consultas y solicitudes, desde aquí.'
    },
    {
      property: 'og:title',
      content: 'Panel de administrador - Eurostone'
    },
    {
      property: 'og:description',
      content: 'Realizar consultas y solicitudes, desde aquí.'
    },
    {
      property: 'og:image',
      content: 'https://example.com/path/to/your/image.jpg'
    }
  ]
})
definePageMeta({
  middleware: 'admin'
});

const authStore = useAuthStore();
const router = useRouter();

const items = ref([
  { id: 1, name: 'Mensajes de Contacto', icon: 'bars', route: '/administrador/adminContacto' },
  { id: 2, name: 'Solicitudes de Presupuesto', icon: 'pen-to-square', route: '/administrador/adminPresupuesto' }
]);

function logOut() {
  authStore.logout();
  router.push('/login');
}

function navigateTo(route) {
  router.push(route);
}
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}

.bg-gray-800 {
  background-color: #2a2a2a; /* Cambia esto al color que desees */
}

.flex-col {
  flex-direction: column;
}

.flex-grow {
  flex-grow: 1;
}

.container {
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.btn-logout {
  background: linear-gradient(to right, #ff283a, #ffbc5e);
  color: white;
  font-weight: bold;
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease; /* Añadida transición suave */
  display: inline-flex;
  align-items: center;
}

.btn-logout:hover {
  background: linear-gradient(to right, #ffc371, #ff5f6d);
  transform: scale(1.05); /* Añadido un ligero zoom al hacer hover */
}
</style>
