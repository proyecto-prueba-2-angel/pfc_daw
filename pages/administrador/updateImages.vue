<template>
  <div>
    <Header class="sticky top-0 left-0 w-full bg-white text-white p-2.5 z-50" />
    <div class="container mx-auto px-4 py-10 bg-gray-50">
      <div class="text-center">
        <h1 class="text-3xl font-bold mb-8">Actualizar Imágenes</h1>
        <form @submit.prevent="updateImages">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="image">
              Subir Imagen
            </label>
            <input type="file" class="form-input mt-1 block w-full" @change="onFileChange" />
          </div>
          <div class="flex items-center justify-between">
            <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Subir
            </button>
          </div>
        </form>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '~/stores/auth';

const file = ref(null);
const router = useRouter();
const authStore = useAuthStore();

const url = 'http://localhost/PFC/server.php'; // URL del servidor

const onFileChange = (event) => {
  file.value = event.target.files[0];
};

const updateImages = async () => {
  const formData = new FormData();
  formData.append('updateImages', true);
  formData.append('image', file.value);

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: formData
    });

    if(!response.ok) {
      throw new Error('Network response was not ok');
    }

    const result = await response.json();

    if(result.success) {
      alert('Imagen subida exitosamente');
    } else {
      alert('Error al subir la imagen');
    }
  } catch (error) {
    console.error('Error uploading image:', error);
    alert('Error al subir la imagen');
  }
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
  </style>
