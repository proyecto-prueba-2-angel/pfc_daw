<template>
  <div class="flex flex-col min-h-screen">
    <Header class="sticky top-0 left-0 w-full bg-white bg-opacity-95 text-white p-2.5 z-50" />
    <Cookies />
    <div class="flex-grow">
      <div class="flex flex-col items-center justify-center py-12">
        <div class="w-full max-w-2xl px-4 text-center rounded-lg">
          <h2 class="text-gray-900 text-3xl md:text-5xl font-bold mb-5">
            Bienvenid@ a <span class="text-xl text-white md:text-3xl bg-color-megahogar underline decoration-yellow-500 underline-offset-8">Eurostone</span>
          </h2>
          <p class="text-lg mb-1">Si formas parte de nuestro equipo, <strong>accede</strong> con tu usuario.</p>
          <p class="text-lg">Dispondrás de las <strong>opciones de administrador.</strong></p>
        </div>
        <div class="mt-10 w-full px-4 max-w-md">
          <div class="bg-gray-100 rounded-lg shadow-xl p-6">
            <div class="text-lg text-center text-white bg-color-megahogar font-bold mb-4 capitalize">Iniciar sesión</div>
            <form class="space-y-4" @submit.prevent="loginUser">
              <input v-model="email" type="email" class="form-input w-full" placeholder="E-mail" required>
              <input v-model="password" :type="showPassword ? 'text' : 'password'" class="form-input w-full" placeholder="Contraseña" required>
              <div class="flex items-center justify-between">
                <button type="button" class="text-sm text-gray-600 hover:text-gray-800" @click="togglePasswordVisibility">
                  Mostrar/Ocultar <font-awesome-icon :icon="showPassword ? 'eye-slash' : 'eye'" />
                </button>
              </div>
              <button type="submit" class="w-full bg-gradient-to-r from-yellow-500 to-orange-400 text-white font-bold mt-6 py-2 px-4 border-b-4 border-yellow-400 rounded mb-6 transition duration-300">ENTRAR</button>
            </form>
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

const email = ref('');
const password = ref('');
const showPassword = ref(false);
const router = useRouter();
const authStore = useAuthStore();

const url = 'http://localhost/PFC/server.php';

async function loginUser() {
  const formData = new URLSearchParams();
  formData.append('loginUser', true);
  formData.append('email', email.value);
  formData.append('password', password.value);

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formData
    });

    if(!response.ok) {
      throw new Error('Network response was not ok: ' + response.statusText);
    }

    const result = await response.json();

    if(result.success) {
      authStore.login(result);
      router.push('/administrador/admin');
    } else {
      alert('Error de inicio de sesión: ' + result.message);
    }
  } catch (error) {
    alert('Error, usuario y/o contraseña incorrectos');
  }
}

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};
</script>

  <style scoped>
  .form-input {
    border: 1px solid #ccc;
    padding: 0.5rem;
    border-radius: 0.25rem;
    transition: border-color 0.3s;
  }

  .form-input:focus {
    border-color: #1e00ff;
  }

  @media (min-width: 768px) {
    .text-center h2 {
      font-size: 2.25rem;
    }
  }
  </style>
