<template>
  <div>
    <Header class="sticky top-0 left-0 w-full bg-white text-white p-2.5 z-50" />
    <div class="container mx-auto px-4 py-10 bg-gray-50">
      <div class="text-center">
        <h1 class="text-3xl font-bold mb-8">Editar Footer</h1>
        <form @submit.prevent="updateFooter">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="footer">
              Footer
            </label>
            <textarea v-model="footer" class="form-textarea mt-1 block w-full" rows="5"></textarea>
          </div>
          <div class="flex items-center justify-between">
            <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '~/stores/auth';

const footer = ref('');
const router = useRouter();
const authStore = useAuthStore();

const url = 'http://localhost/PFC/server.php'; // URL del servidor

const fetchFooter = async () => {
  try {
    const response = await fetch(`${url}?getFooter=true`);
    const result = await response.json();
    footer.value = result.footer;
  } catch (error) {
    console.error('Error fetching footer:', error);
  }
};

const updateFooter = async () => {
  const formData = new URLSearchParams();
  formData.append('updateFooter', true);
  formData.append('footer', footer.value);

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formData
    });

    if(!response.ok) {
      throw new Error('Network response was not ok');
    }

    const result = await response.json();

    if(result.success) {
      alert('Footer actualizado exitosamente');
    } else {
      alert('Error al actualizar el footer');
    }
  } catch (error) {
    console.error('Error updating footer:', error);
    alert('Error al actualizar el footer');
  }
};

onMounted(() => {
  fetchFooter();
});
</script>

  <style scoped>
  .form-textarea {
    border: 1px solid #ccc;
    padding: 0.5rem;
    border-radius: 0.25rem;
    transition: border-color 0.3s;
  }

  .form-textarea:focus {
    border-color: #1e00ff;
  }
  </style>
