<template>
  <div v-if="isAuthenticated" class="admin-button cursor-pointer hover:shine-effect">
    <a class="flex items-center justify-center bg-red-600 hover:bg-red-800 text-white hover:text-gray-200 font-bold py-2 px-4 rounded-full shadow-lg" @click.prevent="goToAdmin">
      <font-awesome-icon icon="screwdriver-wrench" />
      &nbsp; Administrador
    </a>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '~/stores/auth';

const authStore = useAuthStore();
const router = useRouter();
const isAuthenticated = ref(authStore.isAuthenticated);

const checkAuthentication = () => {
  authStore.initialize();
  isAuthenticated.value = authStore.isAuthenticated;
};

const goToAdmin = () => {
  if(authStore.isAuthenticated) {
    router.push('/administrador/admin');
  } else {
    router.push('/login');
  }
};

onMounted(() => {
  checkAuthentication();
});
</script>

  <style scoped>
  .admin-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000; /* nos aseguramos que esté encima siempre */
  }
  </style>
