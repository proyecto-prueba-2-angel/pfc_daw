<template>
  <div class="min-h-screen flex flex-col bg-no-repeat bg-cover bg-fixed">
    <Header />
    <SubirBoton />
    <Cookies />
    <AdminButton />
    <img src="/images/fotos/23.jpg" class="absolute h-full w-full object-cover -z-10 brightness-50" />

    <div class="flex-grow flex items-center justify-center p-4 z-20">
      <div class="bg-white rounded-lg p-8 max-w-4xl w-full shadow-md shadow-zinc-50">
        <h2 class="text-2xl font-bold text-center text-gray-700 mb-6 uppercase">Solicitud de Presupuesto</h2>

        <form class="space-y-6" @submit.prevent="validateForm">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="flex flex-col">
              <label class="text-sm font-semibold text-gray-700">Nombre</label>
              <div class="mt-1 flex rounded-md shadow-sm">
                <input v-model="nombre" type="text" required class="flex-1 min-w-0 block w-full px-3 py-2 rounded-md focus:ring-indigo-500 focus:border-indigo-500 border-gray-300">
              </div>
            </div>

            <div class="flex flex-col">
              <label class="text-sm font-semibold text-gray-700">Apellidos</label>
              <input v-model="apellidos" type="text" required class="mt-1 block w-full px-3 py-2 rounded-md focus:ring-indigo-500 focus:border-indigo-500 border-gray-300">
            </div>

            <div class="flex flex-col">
              <label class="text-sm font-semibold text-gray-700">Teléfono</label>
              <input v-model="telefono" type="tel" required class="mt-1 block w-full px-3 py-2 rounded-md focus:ring-indigo-500 focus:border-indigo-500 border-gray-300">
            </div>

            <div class="flex flex-col">
              <label class="text-sm font-semibold text-gray-700">E-mail</label>
              <input v-model="email" type="email" required class="mt-1 block w-full px-3 py-2 rounded-md focus:ring-indigo-500 focus:border-indigo-500 border-gray-300">
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="flex flex-col">
              <label class="text-sm font-semibold text-gray-700">Dirección</label>
              <input v-model="direccion" type="text" class="mt-1 block w-full px-3 py-2 rounded-md focus:ring-indigo-500 focus:border-indigo-500 border-gray-300">
            </div>

            <div class="flex flex-col">
              <label class="text-sm font-semibold text-gray-700">Código Postal</label>
              <input v-model="codigo_postal" type="text" class="mt-1 block w-full px-3 py-2 rounded-md focus:ring-indigo-500 focus:border-indigo-500 border-gray-300">
            </div>

            <div class="flex flex-col">
              <label class="text-sm font-semibold text-gray-700">Título del Mensaje</label>
              <input v-model="titulo_proyecto" type="text" required class="mt-1 block w-full px-3 py-2 rounded-md focus:ring-indigo-500 focus:border-indigo-500 border-gray-300">
            </div>
            <div class="flex flex-col">
              <label class="text-sm font-semibold text-gray-700">Seleccionar Acabado</label>
              <select v-model="acabado" class="block w-full mt-1 px-3 py-2 rounded-md focus:ring-indigo-500 focus:border-indigo-500 border-gray-300">
                <option value="" disabled>Seleccione un Acabado</option>
                <option value="envejecido">Envejecido</option>
                <option value="pulido">Pulido</option>
                <option value="en_bruto">En bruto</option>
                <option value="abujardado">Abujardado</option>
                <option value="apomazado">Apomazado</option>
                <option value="no_claro">No lo tengo claro</option>
              </select>
            </div>
          </div>

          <div>
            <label class="text-sm font-semibold text-gray-700">Breve concepto del presupuesto</label>
            <textarea v-model="descripcion" rows="4" class="mt-1 block w-full px-3 py-2 rounded-md focus:ring-indigo-500 focus:border-indigo-500 border-gray-300"></textarea>
          </div>

          <div class="flex justify-between">
            <button type="button" class="py-2 px-4 bg-gray-400 text-white font-bold rounded hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50" @click="resetForm">
              Borrar
            </button>
            <button type="submit" class="py-2 px-4 bg-indigo-600 text-white font-bold rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
              Enviar Solicitud
            </button>
          </div>
        </form>

        <!-- Modal de confirmación -->
        <div v-if="showModal" class="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
          <div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 class="text-xl font-bold mb-4">Confirmación de Presupuesto</h2>
            <p class="text-gray-600 mb-4">Tu solicitud de presupuesto se ha enviado correctamente. En breve nos pondremos en contacto contigo.</p>
            <div class="mt-8">
              <button type="button" class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500" @click="closeModal">
                CERRAR
              </button>
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

const showModal = ref(false);
const nombre = ref('');
const apellidos = ref('');
const email = ref('');
const telefono = ref('');
const direccion = ref('');
const codigo_postal = ref('');
const titulo_proyecto = ref('');
const acabado = ref('');
const descripcion = ref('');
const errors = ref({});

function closeModal() {
  showModal.value = false;
}

function openModal() {
  showModal.value = true;
}

function validateForm() {
  errors.value = {};

  if(!nombre.value || !apellidos.value || !email.value || !telefono.value) {
    errors.value.general = 'Todos los campos son obligatorios.';
    return;
  }

  if(!validEmail(email.value)) {
    errors.value.email = 'El correo electrónico no es válido.';
    return;
  }

  submitForm();
}

function validEmail(email) {
  const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  return re.test(email);
}

async function submitForm() {
  const formData = new FormData();
  formData.append('nombre', nombre.value);
  formData.append('apellidos', apellidos.value);
  formData.append('email', email.value);
  formData.append('telefono', telefono.value);
  formData.append('direccion', direccion.value);
  formData.append('codigo_postal', codigo_postal.value);
  formData.append('titulo_proyecto', titulo_proyecto.value);
  formData.append('acabado', acabado.value);
  formData.append('descripcion', descripcion.value);

  try {
    const response = await fetch('http://localhost/PFC/guardar_presupuesto.php', {
      method: 'POST',
      body: formData,
      mode: 'cors'
    });
    const result = await response.json();

    console.log('Result:', result);

    if(result.success) {
      showModal.value = true;
      console.log('Show Modal:', showModal.value);
      clearForm();
    } else {
      errors.value.general = 'Error al enviar el formulario: ' + result.message;
    }
  } catch (error) {
    console.error('Error:', error);
    errors.value.general = 'Error al enviar el formulario.';
  }
}

function clearForm() {
  nombre.value = '';
  apellidos.value = '';
  email.value = '';
  telefono.value = '';
  direccion.value = '';
  codigo_postal.value = '';
  titulo_proyecto.value = '';
  acabado.value = '';
  descripcion.value = '';
}
</script>

<style scoped>
/* Aquí puedes agregar estilos específicos si lo deseas */
</style>
