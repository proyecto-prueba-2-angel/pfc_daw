<template>
  <div class="acabados bg-gray-300 min-h-screen flex flex-col">
    <Header />
    <SubirBoton />
    <Cookies />
    <AdminButton />
    <div class="flex flex-col items-center justify-center flex-grow">
      <div class="relative w-full">
        <img :class="brightnessClass" src="/images/fotos/19_clasificar.jpg" alt="Acabados en Fabrica" class="w-full h-screen object-cover animate-fade transition-all duration-1000">
        <div class="absolute top-1/4 w-full text-center">
          <h1 class="shine-effect text-6xl md:text-9xl font-bold text-white mb-16">
            <span v-for="(char, index) in titleChars" :key="index" :class="['revealText', index % 2 === 0 ? 'animate-fade-in-down' : 'animate-fade-in-up']" class="inline-block opacity-0">
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

    <div class="bg-white p-8 shadow-lg rounded-lg mx-6 md:mx-12 lg:mx-32 mt-16 acabados-seccion">
      <h2 class="text-2xl font-bold mb-4 text-gray-800 text-center">¿Qué es un Acabado?</h2>
      <p class="text-gray-700 text-lg leading-8 text-justify">
        Un acabado en mármol se refiere al tratamiento superficial que se le da a la piedra para obtener diversas texturas y apariencias. Existen numerosos tipos de acabados, cada uno con sus características únicas, diseñados para resaltar la belleza natural del mármol y adaptarse a distintos estilos y necesidades. Disponemos de 5 acabados exclusivos, cada uno cuidadosamente seleccionado para ofrecerte la mejor calidad y estética en tus proyectos.
      </p>
    </div>

    <div class="my-12 container mx-auto">
      <div class="grid grid-cols-1 gap-8">
        <div v-for="(acabado, key) in acabados" :key="key" class="bg-white p-6 shadow-lg rounded-lg">
          <h3 class="text-xl font-bold mb-4">{{ acabado.title }}</h3>
          <img :src="acabado.image" :alt="acabado.title" class="w-full h-64 object-cover rounded mb-4">
          <p class="text-gray-600 mb-4">{{ acabado.shortDescription }}</p>
          <button class="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-900 transition duration-300" @click="openModal(acabado)">
            {{ showMoreInfo[acabado.title] ? 'Ver menos' : 'Ver más' }}
          </button>
          <div v-if="showMoreInfo[acabado.title] && !isMobile">
            <p class="text-gray-800 mt-4">{{ acabado.detailedDescription }}</p>
          </div>
        </div>
      </div>
    </div>

    <TransitionRoot as="template" :show="isModalOpen">
      <Dialog as="div" class="fixed inset-0 z-10 overflow-y-auto" @close="closeModal">
        <div class="min-h-screen px-4 text-center flex items-center justify-center modal-container">
          <TransitionChild as="template" enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
            <DialogOverlay class="fixed inset-0 bg-black bg-opacity-30" />
          </TransitionChild>
          <span class="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>
          <TransitionChild as="template" enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
            <div class="inline-block w-full max-w-4xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <DialogPanel>
                <h2 class="text-3xl font-bold mb-4">{{ selectedAcabado.title }}</h2>
                <img :src="selectedAcabado.image" :alt="selectedAcabado.title" class="w-full h-64 object-cover rounded mb-4">
                <p class="text-gray-600 modal-paragraph mb-4" v-html="formattedDescription"></p>
                <div class="mt-8">
                  <button type="button" class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-gray-900 border border-transparent rounded-md hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500" @click="closeModal">
                    CERRAR
                  </button>
                </div>
              </DialogPanel>
            </div>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>
    <Footer />
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed, watch } from 'vue';
import { Dialog, DialogOverlay, DialogPanel, TransitionRoot, TransitionChild } from '@headlessui/vue';
useHead({
  title: 'Conoce Nuestros Acabados - Eurostone',
  meta: [
    {
      name: 'description',
      content: 'Disponemos de diferentes acabados para adaptar los materiales.'
    },
    {
      property: 'og:title',
      content: 'Conoce Nuestros Acabados - Eurostone'
    },
    {
      property: 'og:description',
      content: 'Disponemos de diferentes acabados para adaptar los materiales.'
    },
    {
      property: 'og:image',
      content: 'https://example.com/path/to/your/image.jpg'
    }
  ]
})
const titleChars = 'ACABADOS'.split('');
const brightnessClass = ref('brightness-100');

setTimeout(() => {
  brightnessClass.value = 'brightness-50';
}, 200);

function scrollToAcabados() {
  const acabadosSection = document.querySelector('.acabados-seccion');
  if(acabadosSection) {
    window.scrollTo({
      top: acabadosSection.offsetTop - 112, // Ajusta 112px por la altura del header sticky
      behavior: 'smooth'
    });
  }
}

const acabados = ref([
  {
    title: 'En bruto',
    image: '/images/bruto2.jpg',
    shortDescription: 'El mármol en su estado natural, sin ningún tratamiento.',
    detailedDescription: 'El mármol en bruto muestra su belleza natural sin ningún tipo de tratamiento. Ideal para proyectos rústicos y naturales, combina bien con elementos de madera y vegetación para un ambiente orgánico y auténtico. Además, este acabado permite apreciar las imperfecciones y la verdadera esencia de la piedra, ofreciendo una estética única y sin artificios. Se utiliza comúnmente en espacios exteriores, jardines y patios, donde se busca un aspecto más natural y menos refinado.'
  },
  {
    title: 'Envejecido',
    image: '/images/fotos/marmol-travertino.png',
    shortDescription: 'Superficie tratada para parecer antigua y desgastada.',
    detailedDescription: 'El acabado envejecido proporciona una apariencia rústica y desgastada, agregando carácter y antigüedad a cualquier espacio. Perfecto para decoraciones vintage o industriales, combina excelentemente con metales oxidados y maderas envejecidas. Este acabado se logra mediante técnicas que simulan el desgaste natural del mármol a lo largo del tiempo, ofreciendo una superficie con texturas y tonalidades que evocan la historia y el paso de los años. Es ideal para su uso en ambientes interiores como salas de estar, cocinas y baños, donde se desea una apariencia antigua y acogedora.'
  },
  {
    title: 'Pulido',
    image: '/images/acabado1.jpg',
    shortDescription: 'Superficie lisa y brillante que resalta los colores y vetas.',
    detailedDescription: 'El acabado pulido ofrece una superficie lisa y brillante que realza los colores y las vetas del mármol. Ideal para espacios elegantes y sofisticados, queda perfecto en cocinas modernas y baños lujosos, reflejando la luz y ampliando visualmente el espacio. Este proceso involucra el lijado y pulido de la superficie del mármol hasta lograr un brillo espejo, resaltando así su riqueza cromática y patrones naturales. Además de su atractivo estético, el mármol pulido es fácil de limpiar y mantener, siendo una opción popular para encimeras, suelos y paredes en proyectos de alto nivel.'
  },
  {
    title: 'Apomazado',
    image: '/images/pomaz2.jpg',
    shortDescription: 'Superficie mate y suave, menos brillante que el pulido.',
    detailedDescription: 'El acabado apomazado presenta una superficie mate y suave, ofreciendo un aspecto más sutil y contemporáneo. Es perfecto para interiores minimalistas y modernos, combinando bien con muebles de líneas limpias y colores neutros. Este acabado se obtiene mediante un proceso de lijado que deja la superficie lisa pero sin brillo, permitiendo que el mármol mantenga su color y textura naturales sin reflejar la luz. Es ideal para suelos y revestimientos donde se busca una apariencia sofisticada pero sin el brillo intenso del mármol pulido, creando un ambiente sereno y elegante.'
  },
  {
    title: 'Abujardado',
    image: '/images/abu3.jpg',
    shortDescription: 'Superficie rugosa con textura uniforme.',
    detailedDescription: 'El acabado abujardado crea una superficie rugosa con textura uniforme, proporcionando excelente agarre. Ideal para suelos exteriores y áreas húmedas como piscinas y baños, se combina bien con otros materiales antideslizantes para mayor seguridad. Este acabado se logra mediante la aplicación de una herramienta llamada bujarda, que martillea la superficie del mármol creando pequeños cráteres uniformes. Además de su funcionalidad en términos de seguridad, el acabado abujardado añade una dimensión táctil al mármol, haciendo que sea visualmente atractivo y práctico para áreas de alto tránsito y exposición a la humedad.'
  }
]);

const showMoreInfo = reactive({
  'En bruto': false,
  Envejecido: false,
  Pulido: false,
  Apomazado: false,
  Abujardado: false
});

const isModalOpen = ref(false);
const selectedAcabado = ref({});
const isMobile = ref(false);
const expandedAcabado = ref(null);

function openModal(acabado) {
  if(window.innerWidth < 768) {
    selectedAcabado.value = acabado;
    isModalOpen.value = true;
  } else {
    toggleInfo(acabado);
  }
}

function closeModal() {
  isModalOpen.value = false;
}

function toggleInfo(acabado) {
  if(expandedAcabado.value && expandedAcabado.value.title !== acabado.title) {
    showMoreInfo[expandedAcabado.value.title] = false;
  }
  showMoreInfo[acabado.title] = !showMoreInfo[acabado.title];
  expandedAcabado.value = showMoreInfo[acabado.title] ? acabado : null;
}

onMounted(() => {
  isMobile.value = window.innerWidth < 768;
  window.addEventListener('resize', () => {
    isMobile.value = window.innerWidth < 768;
    if(!isMobile.value) {
      closeModal();
    }
  });

  watch(() => isModalOpen.value, (newValue) => {
    if(newValue && !isMobile.value) {
      closeModal();
    }
  });
});

const formattedDescription = computed(() => {
  return selectedAcabado.value.detailedDescription.replace(/\n/g, '<br />');
});
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

.dialog-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 6rem;
}

.dialog-panel {
  max-height: 90vh;
  overflow-y: auto;
}

.modal-paragraph {
  line-height: 1.6;
  margin-bottom: 1rem;
  text-align: justify;
  font-size: 1.1rem;
  text-indent: 1em;
  padding: 0.5rem 0;
}

@media (max-width: 768px) {
  .modal-container {
    padding-top: 7rem;
  }

  .modal-paragraph {
    font-size: 1rem;
  }
}
</style>
