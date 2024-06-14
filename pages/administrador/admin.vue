<template>
  <div>
    <Header class="sticky top-0 left-0 w-full bg-white text-white p-2.5 z-50" />
    <div class="bg-color-megahogar px-12">
      <div class="container mx-auto px-4 py-10 bg-gray-50">
        <div class="text-center">
          <h1 class="text-3xl font-bold mb-8">
            Panel de Administración
          </h1>
          <button class="bg-red-500 text-white px-4 py-2 rounded" @click="logOut">Salir</button>
          <div class="flex flex-col items-center mt-8">
            <div class="relative">
              <div class="flex justify-center gap-10 flex-wrap">
                <div
                  v-for="item in items" :key="item.id"
                  class="cursor-pointer bg-color-megahogar hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg p-6 flex flex-col items-center justify-center w-40 h-40 transition-all duration-300 transform"
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

definePageMeta({
  middleware: 'admin'
});

const authStore = useAuthStore();
const router = useRouter();

const items = ref([
  { id: 1, name: 'Editar Header', icon: 'bars', route: '/administrador/editHeader' },
  { id: 2, name: 'Editar Footer', icon: 'pen-to-square', route: '/administrador/editFooter' },
  { id: 3, name: 'Actualizar Imágenes', icon: 'images', route: '/administrador/updateImages' }
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

.bg-color-megahogar {
background-color: #2a2a2a; /* Cambia esto al color que desees */
}

.flex-col {
flex-direction: column;
}
</style>
