<template>
  <div class="acabados bg-gray-200 min-h-screen flex flex-col">
    <Header class="sticky top-0 left-0 w-full bg-white bg-opacity-95 text-white p-2.5 z-50" />
    <SubirBoton />
    <Cookies />
    <AdminButton />
    <div class="flex flex-col items-center justify-center flex-grow">
      <div class="relative w-full">
        <!-- Imagen de fondo con brillo controlado dinámicamente -->
        <img :class="brightnessClass" src="/images/fotos/19_clasificar.jpg" alt="Luxurious Marble Interior" class="w-full h-screen object-cover animate-fade transition-all duration-1000">
        <!-- Contenedor de texto con animación de revelación de caracteres -->
        <div class="absolute top-1/4 w-full text-center">
          <h1 class="shine-effect text-6xl md:text-9xl font-bold text-white mb-16">
            <span
              v-for="(char, index) in titleChars" :key="index"
              :class="['revealText', index % 2 === 0 ? 'animate-fade-in-down' : 'animate-fade-in-up']"
              class="inline-block opacity-0"
            >
              {{ char }}
            </span>
          </h1>
          <button class="bg-gray-950 text-gray-300 font-bold rounded-lg p-4 my-8 animate-jump-in animate-delay-[1500ms]" @click="scrollToAcabados">
            CONTEMPLA NUESTROS ACABADOS
          </button>
          <p class="text-xl text-white max-w-3xl mx-auto animate-fade-up animate-delay-1000">
            Explora la elegancia y versatilidad de nuestros exclusivos materiales de mármol, perfectos para cualquier proyecto arquitectónico o de diseño interior.
          </p>
        </div>
      </div>
    </div>
    <div class="acabados-seccion my-12 container mx-auto">
      <div class="grid grid-cols-1 gap-8">
        <!-- Envejecido -->
        <div v-for="(acabado, key) in ['envejecido', 'pulido', 'otroAcabado']" :key="key" class="bg-white p-6 shadow-lg rounded-lg">
          <h3 class="text-xl font-bold mb-4">{{ acabado }}</h3>
          <img :src="`/images/fotos/${acabado}.jpg`" :alt="acabado" class="w-full h-64 object-cover rounded mb-4">
          <p class="text-gray-600 mb-4">Descripción del acabado {{ acabado }}.</p>
          <button class="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-900 transition duration-300" @click="toggleInfo(acabado)">
            Ver más
          </button>
          <div v-if="showMoreInfo[acabado]">
            <p class="text-gray-800 mt-4">Información detallada sobre el acabado {{ acabado }}.</p>
          </div>
        </div>

        <!-- Pulido -->
        <div class="bg-white p-6 shadow-lg rounded-lg">
          <h3 class="text-xl font-bold mb-4">Pulido</h3>
          <img src="/images/fotos/13.jpg" alt="Pulido" class="w-full h-64 object-cover rounded mb-4">
          <p class="text-gray-600 mb-4">El acabado pulido ofrece una superficie lisa y brillante que resalta los colores y vetas naturales del mármol, perfecto para un look elegante.</p>
          <button class="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-900 transition duration-300">
            Ver más
          </button>
        </div>
        <!-- Otro Acabado -->
        <div class="bg-white p-6 shadow-lg rounded-lg">
          <h3 class="text-xl font-bold mb-4">Otro Acabado</h3>
          <img src="/images/fotos/12.jpg" alt="Otro Acabado" class="w-full h-64 object-cover rounded mb-4">
          <p class="text-gray-600 mb-4">Este acabado ofrece características únicas que aportan un estilo distintivo y personalizado a cualquier proyecto.</p>
          <button class="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-900 transition duration-300">
            Ver más
          </button>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const titleChars = 'ACABADOS'.split('');
const brightnessClass = ref('brightness-100'); // Inicia con brillo al 100%

setTimeout(() => {
  brightnessClass.value = 'brightness-50'; // Cambia a brillo 50% después de 1 segundo
}, 200);

function scrollToAcabados() {
  const acabadosSection = document.querySelector('.acabados-seccion');
  if(acabadosSection) {
    acabadosSection.scrollIntoView({ behavior: 'smooth' });
  }
}

const showMoreInfo = reactive({
  envejecido: false,
  pulido: false,
  otroAcabado: false
});

function toggleInfo(acabado) {
  showMoreInfo[acabado] = !showMoreInfo[acabado];
}
</script>

<style scoped>
.hero-container {
  position: relative;
  text-align: center;
  overflow: hidden;
}

@keyframes fade-in-down {
  from {
    opacity: 0;
    transform: translateY(-40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-down {
  animation: fade-in-down 1.5s ease forwards;
}

.animate-fade-in-up {
  animation: fade-in-up 1.5s ease forwards;
}
</style>
