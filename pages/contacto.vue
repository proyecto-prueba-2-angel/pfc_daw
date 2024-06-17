<template>
  <div>
    <Header />
    <SubirBoton />
    <AdminButton />
    <Cookies />

    <!-- Imagen de fondo -->
    <div class="hero-image relative z-0 overflow-hidden h-full min-h-screen flex items-center justify-center">
      <img src="/public/images/fotos/03.jpg" class="absolute w-full h-full object-cover brightness-75">
      <div class="relative z-10 w-full max-w-4xl bg-gray-300 p-8 rounded-lg shadow-lg mb-4 mt-4">
        <div class="mx-auto my-4 text-center">
          <h2 class="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">SOLICITUD DE CONTACTO</h2>
          <p class="mt-2 text-lg leading-8 text-gray-600">Déjanos tus datos y nosotros nos encargaremos en entrar en contacto contigo.</p>
        </div>
        <form class="mx-auto mt-8 py-4 max-w-xl sm:mt-8" @submit.prevent="validateForm">
          <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <!-- Campos del formulario -->
            <div>
              <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-800">Nombre</label>
              <div class="mt-2.5">
                <input id="first-name" v-model="nombre" type="text" class="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                <span v-if="errors.nombre" class="text-red-500 text-sm">{{ errors.nombre }}</span>
              </div>
            </div>
            <div>
              <label for="last-name" class="block text-sm font-semibold leading-6 text-gray-800">Apellidos</label>
              <div class="mt-2.5">
                <input id="last-name" v-model="apellido" type="text" class="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                <span v-if="errors.apellido" class="text-red-500 text-sm">{{ errors.apellido }}</span>
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="email" class="block text-sm font-semibold leading-6 text-gray-800">Email</label>
              <div class="mt-2.5">
                <input id="email" v-model="email" type="email" class="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                <span v-if="errors.email" class="text-red-500 text-sm">{{ errors.email }}</span>
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="phone-number" class="block text-sm font-semibold leading-6 text-gray-800">Número de teléfono</label>
              <div class="relative mt-2.5">
                <input id="phone-number" v-model="telefono" type="tel" class="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                <span v-if="errors.telefono" class="text-red-500 text-sm">{{ errors.telefono }}</span>
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="message" class="block text-sm font-semibold leading-6 text-gray-800">Mensaje (Opcional)</label>
              <div class="mt-2.5">
                <textarea id="message" v-model="mensaje" rows="4" class="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                <span v-if="errors.mensaje" class="text-red-500 text-sm">{{ errors.mensaje }}</span>
              </div>
            </div>
            <div class="sm:col-span-2 flex items-center sm:items-center sm:flex-row flex-col">
              <input id="aceptarPolit" v-model="aceptarPolit" type="checkbox" class="max-w-4 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 mt-1">
              <label for="aceptarPolit" class="ml-2 text-sm leading-6 text-gray-600">
                Al seleccionar esto, también aceptarás nuestra
                <a href="/politicapriv" target="_blank" class="font-semibold text-indigo-600">política&nbsp;de&nbsp;privacidad</a>.
              </label>
              <span v-if="errors.aceptarPolit" class="text-red-500 text-sm ml-2">{{ errors.aceptarPolit }}</span>
            </div>
          </div>
          <div class="mt-4">
            <div class="g-recaptcha" data-sitekey="6LcZVfopAAAAAKdChmU5wSIIMSdmohjJxxWg1SlJ"></div>
            <span v-if="errors.recaptcha" class="text-red-500 text-sm">{{ errors.recaptcha }}</span>
          </div>
          <div class="mt-10">
            <button type="submit" class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              <span v-if="!isSubmitting">Envía tu Mensaje</span>
              <span v-else>Enviando...</span>
            </button>
          </div>
        </form>

        <!-- Modal de confirmación -->
        <div v-if="showModal" class="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
          <div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 class="text-xl font-bold mb-4">Confirmación de contacto</h2>
            <p class="text-gray-600 mb-4">Información recibida con éxito. Enseguida nos pondremos en contacto contigo. Gracias.</p>
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
import { ref, onMounted } from 'vue';
useHead({
  title: 'Contáctanos  - Eurostone',
  meta: [
    {
      name: 'description',
      content: 'Establece contacto con nosotros a través de un formulario'
    },
    {
      property: 'og:title',
      content: 'Contáctanos - Eurostone'
    },
    {
      property: 'og:description',
      content: 'Descubre qué canteras tenemos y qué materiales producen'
    },
    {
      property: 'og:image',
      content: 'https://example.com/path/to/your/image.jpg'
    }
  ]
})
const showModal = ref(false);
const isSubmitting = ref(false);
const nombre = ref('');
const apellido = ref('');
const email = ref('');
const telefono = ref('');
const mensaje = ref('');
const aceptarPolit = ref(false);
const errors = ref({});

function closeModal() {
  showModal.value = false;
}

function openModal() {
  showModal.value = true;
}

function validateForm() {
  errors.value = {};

  if(!nombre.value) {
    errors.value.nombre = 'El nombre es obligatorio.';
  }
  if(!apellido.value) {
    errors.value.apellido = 'El apellido es obligatorio.';
  }
  if(!email.value) {
    errors.value.email = 'El correo electrónico es obligatorio.';
  } else if(!validEmail(email.value)) {
    errors.value.email = 'El correo electrónico no es válido.';
  }
  if(!telefono.value) {
    errors.value.telefono = 'El número de teléfono es obligatorio.';
  }
  if(!aceptarPolit.value) {
    errors.value.aceptarPolit = 'Debes aceptar la política de privacidad.';
  }
  if(!grecaptcha.getResponse()) {
    errors.value.recaptcha = 'Por favor, completa el reCAPTCHA.';
  }

  if(Object.keys(errors.value).length === 0) {
    submitForm();
  }
}

function validEmail(email) {
  const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  return re.test(email);
}

async function submitForm() {
  isSubmitting.value = true;
  const formData = new FormData();
  formData.append('nombre', nombre.value);
  formData.append('apellido', apellido.value);
  formData.append('email', email.value);
  formData.append('telefono', telefono.value);
  formData.append('mensaje', mensaje.value);
  formData.append('aceptar_polit', aceptarPolit.value ? 1 : 0);
  formData.append('g-recaptcha-response', grecaptcha.getResponse());

  try {
    const response = await fetch('http://localhost/PFC/guardar_contacto.php', {
      method: 'POST',
      body: formData,
      mode: 'cors'
    });
    const result = await response.json();

    if(result.success) {
      showModal.value = true; // Esto abre el modal
      clearForm();
    } else {
      errors.value = result.errors || {};
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    isSubmitting.value = false;
  }
}

function clearForm() {
  nombre.value = '';
  apellido.value = '';
  email.value = '';
  telefono.value = '';
  mensaje.value = '';
  aceptarPolit.value = false;
  grecaptcha.reset();
  errors.value = {};
}

onMounted(() => {
  const script = document.createElement('script');
  script.src = 'https://www.google.com/recaptcha/api.js';
  script.async = true;
  document.head.appendChild(script);
});
</script>

<style scoped>
.hero-image {
  position: relative;
  text-align: center;
  overflow: hidden;
  height: 100vh;
}

.hero-image img {
  filter: brightness(50%);
  height: 100%;
  object-fit: cover;
}

.form-card {
  background-color: rgba(238, 238, 238, 0.928);
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  padding: 20px;
  margin: 0 auto;
  max-width: 800px;
  background-size: cover;
  background-position: center;
}

input, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 16px;
}

button:hover {
  background-color: #434190;
}

@media (max-width: 768px) {
  .hero-image {
    height: auto;
  }
  .form-card {
    width: 100%;
    padding: 15px;
  }
  .contenedor {
    padding: 1rem;
  }
  .sm\\:col-span-2.flex.items-start {
    flex-direction: column;
  }
}

.text-red-500 {
  color: #f56565;
}
</style>
