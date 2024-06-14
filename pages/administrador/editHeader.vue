<template>
  <div>
    <Header />
    <div class="container mx-auto px-4 py-10 bg-gray-50">
      <h1 class="text-3xl font-bold mb-8 text-center">Editar Header</h1>
      <Cortina />

      <form @submit.prevent="saveChanges">
        <div class="mb-4">
          <label for="logoUrl" class="block text-gray-700">Logo URL</label>
          <input id="logoUrl" v-model="form.logoUrl" type="text" class="mt-1 block w-full" />
        </div>
        <div class="mb-4">
          <label for="navItems" class="block text-gray-700">Items de Navegación</label>
          <div v-for="(item, index) in form.navItems" :key="index" class="mb-2 flex">
            <input v-model="item.text" placeholder="Texto" type="text" class="mt-1 block w-full mr-2" />
            <input v-model="item.link" placeholder="Enlace" type="text" class="mt-1 block w-full mr-2" />
            <button type="button" class="bg-red-500 text-white px-2 py-1 rounded" @click="removeNavItem(index)">Eliminar</button>
          </div>
          <button type="button" class="bg-green-500 text-white px-2 py-1 rounded" @click="addNavItem">Agregar Item</button>
        </div>
        <div class="mb-4">
          <label for="ctaText" class="block text-gray-700">Texto del Botón de CTA</label>
          <input id="ctaText" v-model="form.ctaText" type="text" class="mt-1 block w-full" />
        </div>
        <div class="mb-4">
          <label for="ctaLink" class="block text-gray-700">Enlace del Botón de CTA</label>
          <input id="ctaLink" v-model="form.ctaLink" type="text" class="mt-1 block w-full" />
        </div>
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Guardar Cambios</button>
      </form>
      <Header class=" my-8" />

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const form = ref({
  logoUrl: '',
  navItems: [],
  ctaText: '',
  ctaLink: ''
});

const router = useRouter();
const serverUrl = 'http://localhost/PFC/server.php?headerData=true'; // Asegúrate de que la URL sea correcta

onMounted(async () => {
  try {
    const response = await fetch(serverUrl);
    if(!response.ok) { throw new Error('Failed to fetch'); }
    const data = await response.json();
    if(data.error) {
      console.error('Error fetching header data:', data.error);
    } else {
      form.value = data;
    }
  } catch (error) {
    console.error('Error fetching header data:', error.message);
  }
});

function addNavItem() {
  if(!form.value.navItems) {
    form.value.navItems = []; // Asegúrate de que navItems es un array
  }
  form.value.navItems.push({ text: '', link: '' });
}

function removeNavItem(index) {
  form.value.navItems.splice(index, 1);
}

async function saveChanges() {
  try {
    const response = await fetch(serverUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form.value)
    });
    console.log('Sending data:', JSON.stringify(form.value));

    const data = await response.json();
    if(data.success) {
      alert('Cambios guardados exitosamente');
    } else {
      console.error('Error guardando los cambios:', data.error);
      alert('Error guardando los cambios: ' + data.error);
    }
  } catch (error) {
    console.error('Error saving header data:', error);
    alert('Error guardando los cambios: ' + error);
  }
}
</script>

  <style scoped>
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
  </style>
