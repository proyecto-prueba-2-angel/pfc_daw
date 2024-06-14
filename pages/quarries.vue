<template>
  <div class="canteras bg-gray-200">
    <Header />
    <Cookies />
    <SubirBoton />
    <AdminButton />
    <!-- Sección inicial con imagen de fondo y texto animado -->
    <div class="flex flex-col items-center justify-center min-h-screen">
      <div class="relative w-full">
        <!-- Imagen de fondo con brillo controlado dinámicamente -->
        <img :class="brightnessClass" src="/images/fotos/03.jpg" alt="Luxurious Marble Interior" class="w-full h-screen object-cover animate-fade transition-all duration-1000">
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
          <button class="bg-gray-950 text-gray-300 font-bold rounded-lg p-4 my-8 animate-jump-in animate-delay-[1500ms]" @click="scrollToSection('galeria')">
            EXPLORA NUESTRAS CANTERAS
          </button>
          <p class="text-xl text-white max-w-3xl mx-auto animate-fade-up animate-delay-1000">
            Explora la elegancia y versatilidad de nuestros exclusivos materiales de mármol, perfectos para cualquier proyecto arquitectónico o de diseño interior.
          </p>
        </div>
      </div>
    </div>
    <!-- Sección de la galería de imágenes -->
    <div id="galeria" class="container mx-auto p-5 my-12">
      <h1 class="text-2xl font-bold text-center mb-8">Galería de Canteras</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div v-for="(image, index) in images" :key="index" class="cursor-pointer">
          <img :src="image.src" :alt="image.alt" class="w-full h-auto shadow-lg transition duration-300 hover:shadow-2xl" @click="openModal(index)">
          <p class="text-center mt-2 font-semibold">{{ image.title }}</p>
        </div>
      </div>

      <!-- Modal para ver la imagen ampliada -->
      <TransitionRoot as="template" :show="isModalOpen">
        <Dialog as="div" class="fixed inset-0 z-10 overflow-y-auto" @close="isModalOpen = false">
          <div class="min-h-screen px-4 text-center">
            <TransitionChild as="template" enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
              <DialogOverlay class="fixed inset-0 bg-black bg-opacity-30" />
            </TransitionChild>
            <span class="inline-block h-screen align-middle" aria-hidden="true"></span>
            <TransitionChild as="template" enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
              <div class="inline-block w-full max-w-7xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <DialogPanel>
                  <div class="flex flex-col md:flex-row">
                    <img :src="currentImage.src" class="max-w-full md:w-1/2 h-auto rounded animate-fade-right">
                    <div class="md:ml-4 mt-4 md:mt-0 md:w-1/2 animate-fade-left">
                      <h2 class="text-3xl font-bold mb-4">{{ currentImage.title }}</h2>
                      <p class="mb-4">{{ currentImage.description }}</p>
                      <p class="mb-4">{{ currentImage.description2 }}</p>
                      <button class="bg-gray-950 text-gray-300 font-bold rounded-lg p-4 mt-4 animate-fade" @click="goToMaterials(image.title)">
                        CONSULTAR MATERIAL
                      </button>

                    </div>
                  </div>
                  <div class="mt-8">
                    <button type="button" class="animate-fade-up inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-orange-800 border border-transparent rounded-md hover:bg-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-500" @click="isModalOpen = false">
                      CERRAR
                    </button>
                  </div>
                </DialogPanel>
              </div>
            </TransitionChild>
          </div>
        </Dialog>
      </TransitionRoot>
    </div>
    <Footer />
  </div>

</template>

<script setup>
import { ref } from 'vue';
import { Dialog, DialogOverlay, DialogPanel, TransitionRoot, TransitionChild } from '@headlessui/vue';

const titleChars = 'CANTERAS'.split('');
const router = useRoute();
const brightnessClass = ref('brightness-100'); // Inicia con brillo al 100%

setTimeout(() => {
  brightnessClass.value = 'brightness-50'; // Cambia a brillo 50% después de 1 segundo
}, 200);

const images = ref([
  { src: '/images/fotos/02.jpg', alt: 'Descripción de la imagen 1', title: 'MONTE COTO', description: 'Desde nuestra cantera del Monte Coto, ubicada en las localidades de Pinoso y Algueña en Alicante - España -, obtenemos la materia prima de mármol Crema Marfil en bloques que, posteriormente elaboramos en nuestra fábrica de Novelda.', description2: 'Se localiza en el término municipal de Monóvar, en la provincia de Alicante, y posee una superficie de 763,75ha. Monte Coto se encuentra ubicado en la sierra del Reclot. Dicha sierra ocupa una extensión aproximada de 2.400 ha, de las cuales aproximadamente 760 ha pertenecen al término de Monóvar.' },
  { src: '/images/fotos/12.jpg', alt: 'Descripción de la imagen 2', title: 'LA ENCINA', description: 'Esta es nuestra cantera de Marron Emperador, también conocida como Dark Emperador. Ubicada en la provincia de Alicante, se obtiene material de primera calidad elaborado en nuestra fábrica de Novelda.', description2: 'Control de calidad. Procedimientos respetuosos con el medioambiente. Exportación. Experiencia. Proceso propio de extracción.' },
  { src: '/images/fotos/13.jpg', alt: 'Descripción de la imagen 3', title: 'ZARCILLA DE RAMOS', description: 'Nuestra cantera de material Rosa Zarci, ubicada en Murcia, nos aporta material de estas características para ser elaborado en la fábrica de Novelda manteniendo nuestros estándares de calidad.', description2: 'Control de calidad. Procedimientos respetuosos con el medioambiente. Exportación. Experiencia. Proceso propio de extracción.' },
  { src: '/images/fotos/12.jpg', alt: 'Descripción de la imagen 4', title: 'LOS GUILLENES', description: 'Este material lo obtenemos de nuestra cantera ubicada en la Provincia de Almería. El tipo de material es una marca registrada de EUROSTONE S.A., y se comercializa en exclusividad por nosotros.', description2: 'Control de calidad. Procedimientos respetuosos con el medioambiente. Exportación. Experiencia. Proceso propio de extracción.' },
  { src: '/images/fotos/02.jpg', alt: 'Descripción de la imagen 5', title: 'MARAVILLAS', description: 'Otra de nuestras canteras, aunque sea más pequeña pero igualmente importante, es la Cantera de Crema Magdala ubicada en la provincia de Murcia.', description2: 'Control de calidad. Procedimientos respetuosos con el medioambiente. Exportación. Experiencia. Proceso propio de extracción.' },
  { src: '/images/fotos/13.jpg', alt: 'Descripción de la imagen 6', title: 'LA REPLANA', description: 'Disponemos de cantera propia de mármol Rojo Alicante. En el apartado acabados podrán ver las terminaciones que fabricamos para nuestros clientes.', description2: 'Control de calidad. Procedimientos respetuosos con el medioambiente. Exportación. Experiencia. Proceso propio de extracción.' }
]);

const isModalOpen = ref(false);
const currentImage = ref({});

function openModal(index) {
  currentImage.value = images.value[index];
  isModalOpen.value = true;
}

function goToMaterials(materialTitle) {
  $router.push({ path: '/materials', query: { material: materialTitle } });
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if(section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
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
