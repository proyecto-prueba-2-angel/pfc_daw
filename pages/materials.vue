<template>
  <div class="materiales bg-gray-300 min-h-screen flex flex-col">
    <Header />
    <SubirBoton />
    <Cookies />
    <AdminButton />
    <!-- Sección inicial con imagen de fondo y texto animado -->
    <div class="flex flex-col items-center justify-center flex-grow">
      <div class="relative w-full">
        <!-- Imagen de fondo con brillo controlado dinámicamente -->
        <img :class="brightnessClass" src="/images/fotos/07.jpg" alt="Luxurious Marble Interior" class="w-full h-screen object-cover animate-fade transition-all duration-1000">
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
          <button class="bg-gray-950 text-gray-300 font-bold rounded-lg p-4 my-8 animate-jump-in animate-delay-[1500ms]" @click="scrollToMateriales">
            DESCUBRE LOS MATERIALES
          </button>
          <p class="text-xl text-white max-w-3xl mx-auto animate-fade-up animate-delay-1000">
            Explora la elegancia y versatilidad de nuestros exclusivos materiales de mármol, perfectos para cualquier proyecto arquitectónico o de diseño interior.
          </p>
        </div>
      </div>
    </div>
    <div class="mat_seccion"></div>
    <div class="my-12">
      <div class="flex items-center justify-center bg-gray-100 p-4 mt-8">
        <div class="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 bg-white shadow-lg p-6 rounded-lg">
          <!-- Contenedor de imagen -->
          <div class="w-full md:w-1/4">
            <img src="/images/fotos/07.jpg" alt="Random Image from Unsplash" class="w-full rounded-lg shadow-md">
          </div>
          <!-- Contenedor de texto -->
          <div class="w-full md:w-2/3">
            <h2 class="text-xl md:text-2xl font-bold text-gray-800">Materiales</h2>
            <p class="text-gray-600 text-justify mt-2">
              Brindamos una selección variada de materiales para proyectos de construcción y decoración.
              Nuestro catálogo incluye desde mármoles elegantes hasta granitos duraderos y cuarzos modernos.
              Cada tipo de piedra es seleccionado por su calidad y estética, ideal para ambientes que
              buscan combinar funcionalidad con un buen diseño. Descubre nuestros materiales y cómo pueden transformar cualquier espacio de manera efectiva y atractiva.
            </p>
          </div>
        </div>
      </div>

      <!-- Contenido de cortinas -->
      <!-- Primer div con imagen y transición de derecha a izquierda -->
      <div class="full-screen-image-container hidden md:flex my-8 mx-8 border-1 border-zinc-950 rounded-lg shadow-zinc-950 shadow-md">
        <img src="/images/marfilxl.jpg" alt="Imagen" class="full-screen-image" />
        <div id="cortina" :class="{ 'show': showContent }" class="content text-justify relative">
          <h1 class="uppercase transition-transform duration-500 ease-in-out transform cursor-pointer shine-effect hover:translate-x-2 hover:opacity-90 text-2xl md:text-4xl">
            CREMA MARFIL
          </h1>
          <p class="mt-4 text-lg">
            Mármol de tonalidad cálida y suave, ideal para diversas aplicaciones decorativas.          </p>
        </div>
      </div>

      <!-- Cuadro de información sobre el material, oculto para móviles -->
      <div id="detalles-crema-marfil" class="hidden md:flex flex-row text-gray-50 bg-zinc-950 shadow-md p-8 mt-5 mb-6 mx-0 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed relative">
        <div class="w-1/2 space-y-4">
          <h1 class="shine-effect font-extrabold uppercase text-xl lg:text-2xl">CREMA MARFIL</h1>
          <hr class="border-gray-300 my-2">
          <div class="flex flex-col items-center bg-zinc-800 p-4 rounded-md">
            <p class="text-justify text-gray-50 p-3 rounded-lg shadow-inner">
              Desde nuestra cantera del Monte Coto, obtenemos la materia prima de mármol Crema Marfil en bloques. Este mármol se caracteriza por su tonalidad cálida y suave, con vetas sutiles que añaden un toque de elegancia a cualquier espacio. Es ideal para una amplia variedad de aplicaciones, desde encimeras de cocina hasta suelos y revestimientos de paredes.
              <br><br>
              Este material no solo es visualmente atractivo sino también altamente funcional, proporcionando una durabilidad y resistencia excepcionales, lo que lo hace perfecto para proyectos tanto residenciales como comerciales.
              <br><br>
              <b class="underline">Características técnicas:</b>
              <ul class="list-disc list-inside mt-2">
                <li>Densidad: 2,68 gr/cm³</li>
                <li>Coeficiente de absorción: 0,07 %</li>
                <li>Porosidad: 1,30 %</li>
                <li>Resistencia a compresión: 1.557 kg/cm²</li>
                <li>Resistencia a flexión: 148 Kg/cm²</li>
              </ul>
            </p>
            <div class="flex justify-center space-x-12 mt-12">
              <!-- Aquí puedes agregar iconos si lo deseas -->
            </div>

          </div>
        </div>
        <div class="w-1/2 p-8 space-y-4">
          <img src="/images/marfil2.jpg" alt="CREMA MARFIL" class="brightness-90 rounded-lg shadow-xl mx-auto">
          <p class="text-justify">
            El mármol Crema Marfil es una excelente elección para proyectos que requieren una estética refinada y sofisticada. Su durabilidad y resistencia lo hacen ideal para aplicaciones tanto en interiores como en exteriores.
          </p>
        </div>
      </div>

      <div class="mb-8">
        <!-- Segundo div con imagen y transición de izquierda a derecha -->
        <div class="second-image-container hidden md:flex mx-8 my-16 border-1 border-zinc-950 rounded-lg shadow-zinc-950 shadow-md">
          <img src="/images/marron2xl.jpg" alt="Otra Imagen" class="second-image" />
          <div id="second-cortina" :class="{ 'show': secondShowContent }" class="content2 text-justify relative">
            <div class="second-text">
              <h1 class="uppercase transition-transform duration-500 ease-in-out transform shine-effect cursor-pointer text-left hover:translate-x-2 hover:opacity-90 text-2xl md:text-4xl">MARRON EMPERADOR</h1>
              <p class="mt-4 text-lg">
                Mármol de tonalidad cálida y suave, ideal para diversas aplicaciones decorativas.
              </p>

            </div>
          </div>
        </div>

      </div>

      <!-- Cuadro de informacion sobre el material -->
      <div id="detalles-marron-emperador" class="hidden md:flex flex-row text-gray-50 bg-zinc-950 shadow-md p-8 mt-5 mb-6 mx-0 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed relative">
        <div class="w-1/2 p-8 space-y-4">
          <img src="/images/marremp1.jpg" alt="MARRON EMPERADOR" class="brightness-90 rounded-lg shadow-xl mx-auto" style="max-height: 400px; object-fit: cover;">
          <p class="text-justify">
            El mármol Marron Emperador es una excelente elección para proyectos que requieren una estética refinada y sofisticada. Su durabilidad y resistencia lo hacen ideal para aplicaciones tanto en interiores como en exteriores.
          </p>
        </div>
        <div class="w-1/2 space-y-4">
          <h1 class="shine-effect font-extrabold uppercase text-xl lg:text-2xl text-right">MARRON EMPERADOR</h1>
          <hr class="border-gray-300 my-2">
          <p class="text-justify text-gray-200 bg-zinc-800 p-4 rounded-lg shadow-inner">
            Nuestra cantera de Marron Emperador, también conocida como Dark Emperador, ubicada en Alicante. Este mármol se caracteriza por su tonalidad cálida y suave, ideal para una amplia variedad de aplicaciones decorativas.
            <br><br>
            Este material no solo es visualmente atractivo sino también altamente funcional, proporcionando una durabilidad y resistencia excepcionales, lo que lo hace perfecto para proyectos tanto residenciales como comerciales.
            <br><br>
            <b class="underline">Características técnicas:</b>
            <ul class="list-disc list-inside mt-2">
              <li>Densidad: 2,70 gr/cm³</li>
              <li>Coeficiente de absorción: 0,08 %</li>
              <li>Porosidad: 1,40 %</li>
              <li>Resistencia a compresión: 1.600 kg/cm²</li>
              <li>Resistencia a flexión: 150 Kg/cm²</li>
            </ul>
          </p>
        </div>
      </div>

      <!-- <PromoSection /> -->
      <div class="mb-8">
        <!-- Tercer div, similar al primero -->
        <div class="third-image-container hidden md:flex mx-8 my-16 border-1 border-zinc-950 rounded-lg shadow-zinc-950 shadow-md">
          <img src="/images/rosa1.jpg" alt="Imagen" class="third-image" />
          <div id="third-cortina" :class="{ 'show': thirdShowContent }" class="content text-justify relative">
            <h1 class="uppercase transition-transform duration-500 ease-in-out transform cursor-pointer shine-effect text-left hover:translate-x-2 hover:opacity-90 text-2xl md:text-4xl">
              ROSA ZARCI
            </h1>
            <p class="mt-4 text-lg">
              Mármol de tonalidad cálida y suave, ideal para diversas aplicaciones decorativas.
            </p>

          </div>
        </div>

      </div>

      <!-- Cuadro de información sobre el material -->
      <div id="detalles-rosa-zarci" class="hidden md:flex flex-row text-gray-50 bg-zinc-950 shadow-md p-8 mt-5 mb-6 mx-0 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed relative">
        <div class="w-1/2 space-y-4">
          <h1 class="shine-effect font-extrabold uppercase text-xl lg:text-2xl">ROSA ZARCI</h1>
          <hr class="border-gray-300 my-2">
          <div class="flex flex-col items-center bg-zinc-800 p-4 rounded-md">
            <p class="text-justify text-gray-50 p-3 rounded-lg shadow-inner">
              Nuestra cantera de material Rosa Zarci, ubicada en Murcia, nos aporta material de alta calidad. Este mármol se caracteriza por su tonalidad cálida y suave, ideal para una amplia variedad de aplicaciones decorativas.
              <br><br>
              Este material no solo es visualmente atractivo sino también altamente funcional, proporcionando una durabilidad y resistencia excepcionales, lo que lo hace perfecto para proyectos tanto residenciales como comerciales.
              <br><br>
              <b class="underline">Características técnicas:</b>
              <ul class="list-disc list-inside mt-2">
                <li>Densidad: 2,75 gr/cm³</li>
                <li>Coeficiente de absorción: 0,09 %</li>
                <li>Porosidad: 1,50 %</li>
                <li>Resistencia a compresión: 1.650 kg/cm²</li>
                <li>Resistencia a flexión: 155 Kg/cm²</li>
              </ul>
            </p>

          </div>
        </div>
        <div class="w-1/2 p-8 space-y-4">
          <img src="/public/images/rosa1.jpg" alt="ROSA ZARCI" class="brightness-90 rounded-lg shadow-xl mx-auto">
          <p class="text-justify">
            El mármol Rosa Zarci es una excelente elección para proyectos que requieren una estética refinada y sofisticada. Su durabilidad y resistencia lo hacen ideal para aplicaciones tanto en interiores como en exteriores.
          </p>
        </div>
      </div>

      <div class="mb-8">
        <!-- Cuarto div, similar al segundo -->
        <div class="fourth-image-container hidden md:flex mx-8 my-16 border-1 border-zinc-950 rounded-lg shadow-zinc-950 shadow-md">
          <img src="/images/fotos/marmol-travertino.png" alt="Otra Imagen" class="fourth-image" />
          <div id="fourth-cortina" :class="{ 'show': fourthShowContent }" class="content2 text-justify relative">
            <div class="fourth-text">
              <h1 class="uppercase transition-transform duration-500 ease-in-out transform shine-effect cursor-pointer text-left hover:translate-x-2 hover:opacity-90 text-2xl md:text-4xl">ORVELL</h1>
              <p class="mt-4 text-lg">
                Material exclusivo de tonalidad cálida y suave, ideal para diversas aplicaciones decorativas.
              </p>

            </div>
          </div>
        </div>

      </div>

      <!-- Cuadro de información sobre el material -->
      <div id="detalles-orvell" class="hidden md:flex flex-row  text-gray-50 bg-zinc-950 shadow-md p-8 mt-5 mb-6 mx-0 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed relative">
        <div class="w-1/2 p-8 space-y-4">
          <img src="/images/fondo1.png" alt="ORVELL" class="brightness-90 rounded-lg shadow-xl mx-auto" style="max-height: 400px; object-fit: cover;">
          <p class="text-justify">
            El material Orvell es una excelente elección para proyectos que requieren una estética refinada y sofisticada. Su durabilidad y resistencia lo hacen ideal para aplicaciones tanto en interiores como en exteriores.
          </p>
        </div>
        <div class="w-1/2 space-y-4">
          <h1 class="shine-effect  uppercase text-xl lg:text-2xl text-right">ORVELL</h1>
          <hr class="border-gray-300 my-2">
          <p class="text-justify text-gray-200 bg-zinc-800 p-4 rounded-lg shadow-inner">
            Este material lo obtenemos de nuestra cantera en Almería, comercializado en exclusiva por EUROSTONE. Se caracteriza por su tonalidad cálida y suave, ideal para una amplia variedad de aplicaciones decorativas.
            <br><br>
            Este material no solo es visualmente atractivo sino también altamente funcional, proporcionando una durabilidad y resistencia excepcionales, lo que lo hace perfecto para proyectos tanto residenciales como comerciales.
            <br><br>
            <b class="underline">Características técnicas:</b>
            <ul class="list-disc list-inside mt-2">
              <li>Densidad: 2,72 gr/cm³</li>
              <li>Coeficiente de absorción: 0,10 %</li>
              <li>Porosidad: 1,35 %</li>
              <li>Resistencia a compresión: 1.590 kg/cm²</li>
              <li>Resistencia a flexión: 152 Kg/cm²</li>
            </ul>
          </p>
        </div>
      </div>

      <div class="mb-8">
        <!-- Quinto div, similar al primero -->
        <div class="fifth-image-container hidden md:flex mx-8 my-16 border-1 border-zinc-950 rounded-lg shadow-zinc-950 shadow-md">
          <img src="/images/marfil2.jpg" alt="Imagen" class="fifth-image" />
          <div id="fifth-cortina" :class="{ 'show': fifthShowContent }" class="content text-justify relative">
            <h1 class="uppercase transition-transform duration-500 ease-in-out transform cursor-pointer shine-effect text-left hover:translate-x-2 hover:opacity-90 text-2xl md:text-4xl">
              CREMA MAGDALA
            </h1>
            <p class="mt-4 text-lg">
              Mármol de tonalidad cálida y suave, ideal para diversas aplicaciones decorativas.
            </p>
          </div>
        </div>
      </div>

      <!-- Cuadro de información sobre el material -->
      <div id="detalles-crema-magdala" class="hidden md:flex flex-row text-gray-50 bg-zinc-950 shadow-md p-8 mt-5 mb-6 mx-0 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed relative">
        <div class="w-1/2 space-y-4">
          <h1 class="shine-effect font-extrabold uppercase text-xl lg:text-2xl">CREMA MAGDALA</h1>
          <hr class="border-gray-300 my-2">
          <div class="flex flex-col items-center bg-zinc-800 p-4 rounded-md ">
            <p class="text-justify text-gray-200  p-3 rounded-lg shadow-inner">
              La cantera de Crema Magdala, ubicada en Murcia, nos ofrece un material valioso para nuestros clientes. Este mármol se caracteriza por su tonalidad cálida y suave, ideal para una amplia variedad de aplicaciones decorativas.
              <br><br>
              Este material no solo es visualmente atractivo sino también altamente funcional, proporcionando una durabilidad y resistencia excepcionales, lo que lo hace perfecto para proyectos tanto residenciales como comerciales.
              <br><br>
              <b class="underline">Características técnicas:</b>
              <ul class="list-disc list-inside mt-2">
                <li>Densidad: 2,69 gr/cm³</li>
                <li>Coeficiente de absorción: 0,06 %</li>
                <li>Porosidad: 1,25 %</li>
                <li>Resistencia a compresión: 1.580 kg/cm²</li>
                <li>Resistencia a flexión: 149 Kg/cm²</li>
              </ul>
            </p>

          </div>
        </div>
        <div class="w-1/2 p-8 space-y-4">
          <img src="/images/marfil2.jpg" alt="CREMA MAGDALA" class="brightness-90 rounded-lg shadow-xl mx-auto">
          <p class="text-justify">
            El mármol Crema Magdala es una excelente elección para proyectos que requieren una estética refinada y sofisticada. Su durabilidad y resistencia lo hacen ideal para aplicaciones tanto en interiores como en exteriores.
          </p>
        </div>
      </div>

      <div class="sixth-image-container hidden md:flex mx-8 my-16 border-1 border-zinc-950 rounded-lg shadow-zinc-950 shadow-md">
        <img src="/images/rojoalc1.jpg" alt="Rojo Alicante" class="sixth-image" />
        <div id="sixth-cortina" :class="{ 'show': sixthShowContent }" class="content2 text-justify relative">
          <div class="sixth-text">
            <h1 class="uppercase transition-transform duration-500 ease-in-out transform shine-effect cursor-pointer text-left hover:translate-x-2 hover:opacity-90 text-2xl md:text-4xl">ROJO ALICANTE</h1>
            <p class="mt-4 text-lg">
              Cantera propia de mármol Rojo Alicante, con acabados de alta calidad para nuestros clientes.
            </p>
          </div>
        </div>
      </div>

      <!-- Cuadro de información sobre el material -->
      <div id="detalles-rojo-alicante" class="hidden md:flex flex-row  text-gray-50 bg-zinc-950 shadow-md p-8 mt-5 mb-6 mx-0 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed relative">
        <div class="w-1/2 p-8 space-y-4">
          <img src="/images/rojoalc1.jpg" alt="Rojo Alicante" class="brightness-90 rounded-lg shadow-xl mx-auto" style="max-height: 400px; object-fit: cover;">
          <p class="text-justify">
            El material Rojo Alicante es una excelente elección para proyectos que requieren una estética vibrante y llamativa. Su durabilidad y resistencia lo hacen ideal para aplicaciones tanto en interiores como en exteriores.
          </p>
        </div>
        <div class="w-1/2 space-y-4">
          <h1 class="shine-effect font-extrabold uppercase text-xl lg:text-2xl text-right">ROJO ALICANTE</h1>
          <hr class="border-gray-300 my-2">
          <p class="text-justify text-gray-200 bg-zinc-800 p-4 p-3 rounded-lg shadow-inner">
            El mármol Rojo Alicante lo obtenemos de nuestra cantera en La Replana. Este mármol se caracteriza por su tonalidad rojiza y vibrante, ideal para una amplia variedad de aplicaciones decorativas.
            <br><br>
            Este material no solo es visualmente atractivo sino también altamente funcional, proporcionando una durabilidad y resistencia excepcionales, lo que lo hace perfecto para proyectos tanto residenciales como comerciales.
            <br><br>

            <b class="underline">Características técnicas:</b>
            <ul class="list-disc list-inside mt-2">
              <li>Densidad: 2,73 gr/cm³</li>
              <li>Coeficiente de absorción: 0,07 %</li>
              <li>Porosidad: 1,40 %</li>
              <li>Resistencia a compresión: 1.610 kg/cm²</li>
              <li>Resistencia a flexión: 153 Kg/cm²</li>
            </ul>
          </p>
        </div>
      </div>

      <!-- Contenedor de la tabla con 6 filas y 3 columnas -->
      <div class="container mx-auto my-12 block md:hidden">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(material, index) in materials" :key="index" class="bg-white p-6 shadow-lg rounded-lg">
            <h3 class="text-xl font-bold mb-4">{{ material.name }}</h3>
            <img :src="material.image" :alt="material.name" class="w-full h-32 object-cover rounded mb-4">
            <p class="text-gray-600 mb-4">{{ material.description }}</p>
            <button class="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-zinc-900 transition duration-300" @click="openModal(material)">
              Consultar material
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal para mostrar las características técnicas, visible solo en móviles -->
    <div class="block md:hidden">
      <TransitionRoot as="template" :show="isModalOpen">
        <Dialog as="div" class="fixed inset-0 z-10 overflow-y-auto" @close="closeModal">
          <div class="min-h-screen px-4 text-center">
            <TransitionChild as="template" enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
              <DialogOverlay class="fixed inset-0 bg-black bg-opacity-30" />
            </TransitionChild>
            <span class="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>
            <TransitionChild as="template" enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
              <div class="inline-block w-full max-w-4xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl modal-container">
                <DialogPanel>
                  <h2 class="text-3xl font-bold mb-4">{{ selectedMaterial.name }}</h2>
                  <img :src="selectedMaterial.image" :alt="selectedMaterial.name" class="w-full h-64 object-cover rounded mb-4">
                  <p class="text-gray-600 mb-4">{{ selectedMaterial.description }}</p>
                  <p class="font-bold mb-2">Características Técnicas:</p>
                  <ul class="list-disc list-inside text-sm md:text-base">
                    <li v-for="(spec, index) in selectedMaterial.specifications" :key="index">{{ spec }}</li>
                  </ul>
                  <div class="mt-8">
                    <button type="button" class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-zinc-900 border border-transparent rounded-md hover:bg-zinc-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500" @click="closeModal">
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

    <div class="relative w-full">
      <img src="/images/fotos/03.jpg" alt="Ver acabados" class="w-full object-cover h-64">
      <button class="absolute bottom-4 right-4 bg-gray-200 text-black font-bold py-2 px-4 rounded hover:bg-zinc-900 hover:text-white transition duration-300" @click="$router.push('/finishes')">
        Ver acabados
      </button>
    </div>

    <Footer />

  </div>
</template>

<script setup>
import { Dialog, DialogOverlay, DialogPanel, TransitionRoot, TransitionChild } from '@headlessui/vue';
import { ref, onMounted, onUnmounted, watch } from 'vue'

const titleChars = 'MATERIALES'.split('');
const brightnessClass = ref('brightness-100'); // Inicia con brillo al 100%

setTimeout(() => {
  brightnessClass.value = 'brightness-50'; // Cambia a brillo 50% después de 1 segundo
}, 200);

const materials = ref([
  {
    name: 'CREMA MARFIL',
    image: '/images/crema_background1.jpg',
    description: 'Desde nuestra cantera del Monte Coto, obtenemos la materia prima de mármol Crema Marfil en bloques.',
    specifications: [
      'Densidad: 2,68 gr/cm³',
      'Coeficiente de absorción: 0,07 %',
      'Porosidad: 1,30 %',
      'Resistencia a compresión: 1.557 kg/cm²',
      'Resistencia a flexión: 148 Kg/cm²'
    ]
  },
  {
    name: 'MARRON EMPERADOR',
    image: '/images/marron1.jpg',
    description: 'Nuestra cantera de Marron Emperador, también conocida como Dark Emperador, ubicada en Alicante.',
    specifications: [
      'Densidad: 2,70 gr/cm³',
      'Coeficiente de absorción: 0,08 %',
      'Porosidad: 1,40 %',
      'Resistencia a compresión: 1.600 kg/cm²',
      'Resistencia a flexión: 150 Kg/cm²'
    ]
  },
  {
    name: 'ROSA ZARCI',
    image: '/images/rosa1.jpg',
    description: 'Nuestra cantera de material Rosa Zarci, ubicada en Murcia, nos aporta material de alta calidad.',
    specifications: [
      'Densidad: 2,75 gr/cm³',
      'Coeficiente de absorción: 0,09 %',
      'Porosidad: 1,50 %',
      'Resistencia a compresión: 1.650 kg/cm²',
      'Resistencia a flexión: 155 Kg/cm²'
    ]
  },
  {
    name: 'ORVELL',
    image: '/images/fondo1.png',
    description: 'Este material lo obtenemos de nuestra cantera en Almería, comercializado en exclusiva por EUROSTONE.',
    specifications: [
      'Densidad: 2,72 gr/cm³',
      'Coeficiente de absorción: 0,10 %',
      'Porosidad: 1,35 %',
      'Resistencia a compresión: 1.590 kg/cm²',
      'Resistencia a flexión: 152 Kg/cm²'
    ]
  },
  {
    name: 'CREMA MAGDALA',
    image: '/images/marfil2.jpg',
    description: 'La cantera de Crema Magdala, ubicada en Murcia, nos ofrece un material valioso para nuestros clientes.',
    specifications: [
      'Densidad: 2,69 gr/cm³',
      'Coeficiente de absorción: 0,06 %',
      'Porosidad: 1,25 %',
      'Resistencia a compresión: 1.580 kg/cm²',
      'Resistencia a flexión: 149 Kg/cm²'
    ]
  },
  {
    name: 'ROJO ALICANTE',
    image: '/images/rojoalc1.jpg',
    description: 'Cantera propia de mármol Rojo Alicante, con acabados de alta calidad para nuestros clientes.',
    specifications: [
      'Densidad: 2,73 gr/cm³',
      'Coeficiente de absorción: 0,07 %',
      'Porosidad: 1,40 %',
      'Resistencia a compresión: 1.610 kg/cm²',
      'Resistencia a flexión: 153 Kg/cm²'
    ]
  }
]);

const isModalOpen = ref(false);
const selectedMaterial = ref({});

useHead({
  title: 'Explora Nuestros Materiales - Eurostone',
  meta: [
    {
      name: 'description',
      content: 'Encuentra las localizaciones de nuestras tiendas Megahogar. Visítanos en Babel y Vistahermosa para descubrir los mejores productos para tu hogar.'
    },
    {
      property: 'og:title',
      content: 'Explora Nuestras Cocinas - Megahogar'
    },
    {
      property: 'og:description',
      content: 'Encuentra las localizaciones de nuestras tiendas Megahogar. Visítanos en Babel y Vistahermosa para descubrir los mejores productos para tu hogar.'
    },
    {
      property: 'og:image',
      content: 'https://example.com/path/to/your/image.jpg'
    }
  ]
})

const showContent = ref(true)
const secondShowContent = ref(false)
const thirdShowContent = ref(false)
const fourthShowContent = ref(false)
const fifthShowContent = ref(false)
const sixthShowContent = ref(false)

const showInfo = ref(false)

const showModernKitchenMoreInfo = ref(false)
const showMinimalistKitchenMoreInfo = ref(false)
const showRusticKitchenMoreInfo = ref(false)
const showContemporaryKitchenMoreInfo = ref(false)
const showVintageKitchenMoreInfo = ref(false)

const text1 = ref('COCINAS')
const lines = ref([
  'En MegaHogar Cocinas, disponemos de varios estilos y clases de cocinas, para que tú puedas decidir, a tu elección, cómo organizar y distribuir tu espacio para cocinar. Tómate un respiro, y el tiempo que quieras visitando nuestras cocinas disponibles, y escoge el modelo más indicado para ti'
])

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  showContent.value = true
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

function toggleInfo(show) {
  showInfo.value = show
}

function handleScroll() {
  const scrollPosition = window.scrollY
  const windowHeight = window.innerHeight
  const animationOffset = 800
  const breakpoint = windowHeight - animationOffset
  const secondDivOffset = document.querySelector('.second-image-container').offsetTop - windowHeight + 200
  const thirdDivOffset = document.querySelector('.third-image-container').offsetTop - windowHeight + 200
  const fourthDivOffset = document.querySelector('.fourth-image-container').offsetTop - windowHeight + 200
  const fifthDivOffset = document.querySelector('.fifth-image-container').offsetTop - windowHeight + 200
  const sixthDivOffset = document.querySelector('.sixth-image-container').offsetTop - windowHeight + 200;

  if(scrollPosition + breakpoint > secondDivOffset) {
    secondShowContent.value = true
  }
  if(scrollPosition + breakpoint > thirdDivOffset) {
    thirdShowContent.value = true
  }
  if(scrollPosition + breakpoint > fourthDivOffset) {
    fourthShowContent.value = true
  }
  if(scrollPosition + breakpoint > fifthDivOffset) {
    fifthShowContent.value = true
  }
  if(scrollPosition + breakpoint > sixthDivOffset) {
    sixthShowContent.value = true;
  }
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId)
  if(section) {
    window.scrollTo({
      top: section.offsetTop - 100,
      behavior: 'smooth'
    })
  }
}
function scrollToMateriales() {
  const materialsSection = document.querySelector('.mat_seccion'); // Asegúrate de que este selector coincida con tu sección de materiales
  if(materialsSection) {
    materialsSection.scrollIntoView({ behavior: 'smooth' });
  }
}

function openModal(material) {
  selectedMaterial.value = material;
  isModalOpen.value = true;
}

function closeModal() {
  isModalOpen.value = false;
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

.mat_seccion {
  padding-bottom: 4rem; /* Añade un padding al fondo para empujar el footer hacia abajo */
}
/* Estilos para el contenido de pages > *cocinas.vue*/

  /* Estilo del hero container */

  /* Estilos para los textos de los divs */
  .content,
  .second-content,
  .third-content,
  .fourth-content,
  .fifth-content {
    padding: 20px;
    opacity: 0; /* Inicialmente, los textos están invisibles */
    transition: opacity 2s ease; /* Agregar transición para la opacidad */
  }

  /* Establecer opacidad a 1 cuando la clase 'show' está activada */
  .content.show,
  .second-content.show,
  .third-content.show,
  .fourth-content.show,
  .fifth-content.show {
    opacity: 1;
  }

  /* Estilos para el primer div */
.full-screen-image-container {
  position: relative;
  height: 50vh;
  overflow: hidden;
}

.full-screen-image {
  width: 100%;
  height: 50vh; /* Ajusta la altura de la imagen para que coincida con el contenedor */
  object-fit: cover;
}

#cortina {
  position: absolute;
  top: 20%;
  right: -50%; /* Mueve el elemento fuera del contenedor */
  width: 50%;
  height: auto; /* Ajusta la altura automáticamente al contenido */
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Ajusta los elementos a la izquierda */
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.85); /* Aumenta la opacidad */
  text-shadow: 1px 1px 2px black; /* Añade sombra al texto para mejorar la legibilidad */
  color: white;
  padding: 20px;
  box-shadow: 0 0 20px rgba(10, 10, 10, 0.957); /* Agrega una sombra blanca semitransparente alrededor del contenedor */
  opacity: 0; /* Establece la opacidad inicial en 0 */
  transition: opacity 1s ease, transform 1s ease, right 1s ease; /* Ajustamos la velocidad de la transición */
}

#cortina.show {
  opacity: 1; /* Muestra el div cambiando la opacidad */
  right: 0; /* Mueve el elemento hacia la posición original */
}

.content {
  background: rgba(0, 0, 0, 0.8); /* Fondo oscuro para mejorar la legibilidad */
  color: white;
  padding: 20px; /* Aumenta el padding para más espacio alrededor del contenido */
  border-left: 5px solid #ff0707; /* Un toque de color */
  transition: background-color 0.3s ease;
}
.content2 {
  position: absolute;
  top: 20%;
  left: -50%; /* Mueve el elemento fuera del contenedor */
  width: 50%;
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.65);
  color: white;
  padding: 20px;
  box-shadow: 0 0 20px rgba(10, 10, 10, 0.957);
  opacity: 0; /* Establece la opacidad inicial en 0 */
  transition: opacity 1s ease, transform 1s ease, left 1s ease; /* Ajustamos la velocidad de la transición */
}
h1 {
  margin-bottom: 10px; /* Agrega margen inferior para separación del texto */
}

p {
  margin-bottom: 20px; /* Agrega margen inferior para separación del botón */
}

  /* Media queries para dispositivos con un ancho máximo de 768px */
  @media (max-width: 768px) {
    .content, .content2 {
      display: hidden;
    }
  }
  .content:hover {
    background: rgba(0, 0, 0, 0.9);
  }
  /* Mejorar la legibilidad del texto con sombra */
  .text {
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
  }

  /* Estilos para el segundo div */
  .second-image-container {
    position: relative;
    height: 60vh; /* Mismo tamaño que los otros divs de imagen */
    overflow: hidden;
  }

  .second-image {
    width: 100%; /* Haz que la imagen ocupe todo el ancho del contenedor */
    height: 100%; /* Haz que la imagen ocupe todo el alto del contenedor */
    object-fit: cover;
  }

  #second-cortina {
    position: absolute;
    top: 20%;
    left: -50%; /* Mueve el elemento fuera del contenedor */
    width: 50%;
    height: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.959);
    color: white;
    box-shadow: 0 0 20px rgba(10, 10, 10, 0.957); /* Agrega una sombra blanca semitransparente alrededor del contenedor */
    padding: 20px;
    opacity: 0; /* Establece la opacidad inicial en 0 */
    transition: opacity 1s ease, transform 1s ease, left 1s ease; /* Ajustamos la velocidad de la transición */
  }

  #second-cortina.show {
    opacity: 1; /* Muestra el div cambiando la opacidad */
    left: 0; /* Mueve el elemento hacia la posición original */
  }

  .second-text {
    text-align: center; /* Centra el texto horizontalmente */
  }

  /* Estilos para el tercer div */
  .third-image-container {
    position: relative;
    height: 60vh;
    overflow: hidden;
  }

  .third-image {
    width: 100%;
    height: 85vh;
    object-fit: cover;
  }

  #third-cortina {
    position: absolute;
    top: 20%;
    right: -50%; /* Mueve el elemento fuera del contenedor */
    width: 50%;
    height: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.842);
    color: white;
    padding: 20px;
    box-shadow: 0 0 20px rgba(10, 10, 10, 0.957); /* Agrega una sombra blanca semitransparente alrededor del contenedor */
    opacity: 0; /* Establece la opacidad inicial en 0 */
    transition: opacity 1s ease, transform 1s ease, right 1s ease; /* Ajustamos la velocidad de la transición */
  }

  #third-cortina.show {
    opacity: 1; /* Muestra el div cambiando la opacidad */
    right: 0; /* Mueve el elemento hacia la posición original */
  }

  /* Estilos para el cuarto div */
  .fourth-image-container {
    position: relative;
    height: 60vh; /* Ajusta la altura para que sea del mismo tamaño que los otros divs de imagen */
    overflow: hidden;
    justify-content: center;
    align-items: center;
  }

  .fourth-image {
    width: 100%; /* Haz que la imagen ocupe todo el ancho del contenedor */
    height: 100%; /* Haz que la imagen ocupe todo el alto del contenedor */
    object-fit: cover;
  }

  #fourth-cortina {
    position: absolute;
    top: 20%;
    left: -50%; /* Mueve el elemento fuera del contenedor */
    width: 50%;
    height: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.877);
    color: white;
    box-shadow: 0 0 20px rgba(10, 10, 10, 0.957); /* Agrega una sombra blanca semitransparente alrededor del contenedor */
    padding: 20px;
    opacity: 0; /* Establece la opacidad inicial en 0 */
    transition: opacity 1s ease, transform 1s ease, left 1s ease; /* Ajustamos la velocidad de la transición */
  }

  #fourth-cortina.show {
    opacity: 1; /* Muestra el div cambiando la opacidad */
    left: 0; /* Mueve el elemento hacia la posición original */
  }

  /* Estilos para el quinto div */
  .fifth-image-container {
    position: relative;
    height: 60vh;
    overflow: hidden;
  }

  .fifth-image {
    width: 100%;
    height: 85vh;
    object-fit: cover;
  }

  #fifth-cortina {
    position: absolute;
    top: 20%;
    right: -50%; /* Mueve el elemento fuera del contenedor */
    width: 50%;
    height: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.856);
    color: white;
    box-shadow: 0 0 20px rgba(10, 10, 10, 0.957); /* Agrega una sombra blanca semitransparente alrededor del contenedor */
    padding: 20px;
    opacity: 0; /* Establece la opacidad inicial en 0 */
    transition: opacity 1s ease, transform 1s ease, right 1s ease; /* Ajustamos la velocidad de la transición */
  }

  #fifth-cortina.show {
    opacity: 1; /* Muestra el div cambiando la opacidad */
    right: 0; /* Mueve el elemento hacia la posición original */
  }

  .sixth-image-container {
  position: relative;
  height: 60vh;
  overflow: hidden;
}

.sixth-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

#sixth-cortina {
  position: absolute;
  top: 20%;
  right: -50%;
  width: 50%;
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.904);
  color: white;
  padding: 20px;
  box-shadow: 0 0 20px rgba(10, 10, 10, 0.957);
  opacity: 0;
  transition: opacity 1s ease, transform 1s ease, right 1s ease;
}

#sixth-cortina.show {
  opacity: 1; /* Muestra el div cambiando la opacidad */
  left: 0; /* Mueve el elemento hacia la posición original */
}

.sixth-text {
  text-align: center;
}

  #header1 {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #fffffff8;
    color: #fff; /* Cor do texto do cabeçalho */
    padding: 10px; /* Espaçamento interno */
    z-index: 1000; /* Certifique-se de que o cabeçalho esteja acima de outros elementos */
  }
  .fondo {
    background-color: #000000e3;
  }

  /* Media queries para dispositivos con un ancho máximo de 768px */
  @media screen and (max-width: 768px) {
    .full-screen-image, .second-image, .third-image, .fourth-image, .fifth-image
    {
      height: 90vh; /* Reducir la altura de las imágenes en dispositivos móviles */
    }

  }
  /* Estilos para el texto principal COCINAS */
  @keyframes fadeInFromBottom {
    0% {
      opacity: 0;
      transform: translateY(100%);
    }
    70% {
      transform: translateY(-10%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInFromTop {
    0% {
      opacity: 0;
      transform: translateY(-100%);
    }
    70% {
      transform: translateY(10%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .revealText {
    opacity: 0;
    display: inline-block;
    animation-duration: 1s;
    animation-timing-function: ease-in;
    animation-fill-mode: forwards;
  }

  .reveal1 {
    animation-name: fadeInFromBottom;
    animation-delay: calc(0.1s * var(--i));
  }

  .reveal2 {
    animation-name: fadeInFromTop;
    animation-delay: calc(0.1s * var(--i));
  }

  @keyframes textGlow {
    from {
      text-shadow: none;
    }
    to {
      text-shadow: 0 0 10px white;
    }
  }

  .shadow-effect:hover {
    animation: textGlow 0.5s ease forwards;
  }
  /* Estilos para las imágenes */
.full-screen-image,
.second-image,
.third-image,
.fourth-image,
.fifth-image {
  width: 100%; /* Asegura que la imagen ocupe todo el ancho del contenedor */
  height: 100%; /* Asegura que la imagen ocupe todo el alto del contenedor */
  object-fit: cover; /* Mantiene la proporción de la imagen */
  transition: transform 0.5s ease-in-out; /* Suaviza la transición del efecto de escala */
}

/* Efecto hover para las imágenes para indicar interactividad */
.full-screen-image-container:hover .full-screen-image,
.second-image-container:hover .second-image,
.third-image-container:hover .third-image,
.fourth-image-container:hover .fourth-image,
.fifth-image-container:hover .fifth-image {
  transform: scale(1.05); /* Ampliación ligera al hacer hover */
}
/* Estilos adicionales para los contenedores de imagen para asegurar el overflow correcto */
.full-screen-image-container,
.second-image-container,
.third-image-container,
.fourth-image-container,
.fifth-image-container {
  overflow: hidden; /* Oculta cualquier parte de la imagen que 'exceda' del contenedor */
  transition: all 0.3s ease-in-out; /* Transición suave para los cambios */
}

/* Media queries para dispositivos con un ancho máximo de 768px */
@media screen and (max-width: 768px) {
  .full-screen-image, .second-image, .third-image, .fourth-image, .fifth-image {
    height: 50vh;
  }

  /* Transición suavizada para las cortinas con IDs */
#cortina, #second-cortina, #third-cortina, #fourth-cortina, #fifth-cortina {
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;
  transform: translateX(-100%); /* Inicia desde fuera de la vista completamente a la izquierda */
  width: 100%;
  height: auto;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.65); /* Fondo semitransparente para mejorar la visibilidad del texto */
  color: white;
  padding: 20px;
  box-shadow: 0 0 20px rgba(10, 10, 10, 0.957);
}

#cortina.show, #second-cortina.show, #third-cortina.show, #fourth-cortina.show, #fifth-cortina.show {
  transform: translateX(0); /* Mueve las cortinas a la posición original suavemente */
  opacity: 1; /* Cambia la opacidad a visible */
}

/* Efecto hover para las imágenes para indicar interactividad */
.full-screen-image-container:hover .full-screen-image,
.second-image-container:hover .second-image,
.third-image-container:hover .third-image,
.fourth-image-container:hover .fourth-image,
.fifth-image-container:hover .fifth-image {
  transform: scale(1.05); /* Ampliación ligera al hacer hover */
}

/* Animaciones para los textos al aparecer, dando un efecto de entrada más dinámico */
@keyframes fadeInUp {
  from {
      opacity: 0;
      transform: translateY(20px);
  }
  to {
      opacity: 1;
      transform: translateY(0);
  }
}

#cortina h1, #cortina span, #second-cortina h1, #second-cortina span,
#third-cortina h1, #third-cortina span, #fourth-cortina h1, #fourth-cortina span,
#fifth-cortina h1, #fifth-cortina span {
    animation: fadeInUp 0.8s ease-out forwards;
    opacity: 0; /* Comienza invisibles */
    animation-delay: 0.5s; /* Retraso para sincronizar con la transición de la cortina */
}

#cortina.show, #second-cortina.show, #third-cortina.show, #fourth-cortina.show, #fifth-cortina.show {
  transform: translateX(0); /* Mueve las cortinas a la posición original suavemente */
  opacity: 1; /* Cambia la opacidad a visible */
}
.full-screen-image-container, .second-image-container, .third-image-container, .fourth-image-container, .fifth-image-container {
  height: auto;
}

h1 {
  font-size: 24px;
}

/* Ocultar elementos no esenciales en móviles */
.content span:not(:first-child), .second-content span:not(:first-child),
.third-content span:not(:first-child), .fourth-content span:not(:first-child),
.fifth-content span:not(:first-child),
.content font-awesome-icon, .second-content font-awesome-icon,
.third-content font-awesome-icon, .fourth-content font-awesome-icon,
.fifth-content font-awesome-icon {
  display: none;
}

/* CSS para la imagen */
.full-screen-image-container,
.second-image-container,
.third-image-container,
.fourth-image-container,
.fifth-image-container {
  overflow: hidden;
  position: relative;
}

.full-screen-image,
.second-image,
.third-image,
.fourth-image,
.fifth-image {
  display: block;
  width: 100%;
  height: auto;
  transition: transform 0.5s;
}

.text-line {
  opacity: 0; /* Inicialmente, las líneas están invisibles */
  animation: slideInFromSide 1s ease forwards, shine 1s infinite alternate; /* Agregar la animación de entrada y el brillo */
  font-size: calc(14px + 0.5vw); /* Responsive font size para otros textos */
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.8); /* Ajusta el valor de desenfoque y la opacidad según sea necesario */
}

/* Definición de la animación */
@keyframes slideInFromSide {
  0% {
    opacity: 0;
    transform: translateX(-100%); /* Empieza desde la izquierda */
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.shine-effect {
  animation: shine 1s infinite alternate; /* Aplica la animación de brillo */
}
.shine-effect:hover {
  animation: shine-hover 0.3s infinite alternate; /* Aplica la animación de brillo al hacer hover */
}

@keyframes shine {
  /* Define la animación de brillo */
  from {
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.8); /* Sombra inicial */
  }
  to {
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.9); /* Sombra más intensa */
  }
}

/* Definición de la animación de brillo al hacer hover */
@keyframes shine-hover {
  from {
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.9); /* Sombra más intensa */
  }
  to {
    text-shadow: 0 0 30px rgba(255, 255, 255, 1); /* Sombra aún más intensa */
  }
}
.modal-container {
  margin-top: 6rem; /* Añadir margen superior para evitar solapamiento con el header */
}

/* Agrega estas clases al archivo cocinas.css */

.show {
  opacity: 1; /* Mostrar el elemento */
  transition: opacity 0.5s ease-in-out; /* Agregar una transición suave */
}

.blink {
  animation: blink-animation 1s infinite; /* Animación de parpadeo */
}

@keyframes blink-animation {
  0% {
    opacity: 0; /* Ocultar el elemento */
  }
  50% {
    opacity: 1; /* Mostrar el elemento */
  }
  100% {
    opacity: 0; /* Ocultar el elemento */
  }
}

/* Estilos para el texto con efecto de brillo */
.shine-button {
  position: relative;
  overflow: hidden;
  display: inline-block; /* Asegura que el contenedor abarque solo el contenido */
}

.shine-button:after {
  content: "";
  position: absolute;
  top: 50%;
  left: -50%; /* Empieza fuera del contenedor a la izquierda */
  width: 200%;
  height: 100%;
  opacity: 0;
  background: rgba(255, 255, 255, 0.13);
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.13) 0%,
    rgba(255, 255, 255, 0.13) 77%,
    rgba(255, 255, 255, 0.5) 92%,
    rgba(255, 255, 255, 0.0) 100%
  );
  transition: opacity 0.7s, left 0.7s; /* Ajusta la transición para el movimiento horizontal */
}

.shine-button:hover:after {
  opacity: 1;
  left: 150%; /* Termina fuera del contenedor a la derecha */
}

.shine-button:active:after {
  opacity: 0;
}

/* Estilos para el carrusel de imágenes principal */

.container:hover .info-container {
  display: flex; /* Asegura que el contenedor se muestre correctamente */
  flex-direction: column; /* Organiza los elementos internos verticalmente */
  opacity: 1; /* Hace el contenedor completamente visible */
  transform: translateX(0); /* Alinea el contenedor con su posición final */
}

.info-container {
  display: none; /* Oculta el contenedor por defecto */
  position: absolute; /* Posicionamiento respecto al contenedor padre */
  right: 0; /* Alinea a la derecha */
  transition: all 0.5s ease; /* Suaviza la transición */
  background-color: #fff; /* Fondo blanco para el texto */
  padding: 20px; /* Espaciado interno */
  border-radius: 8px; /* Bordes redondeados */
  box-shadow: 0 4px 6px rgba(0,0,0,0.1); /* Sombra suave */
  width: 300px; /* Ancho fijo */
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.revealText {
  animation: fadeIn 2s forwards;
}

/* Animación para revelar texto con un efecto 'typewriter' */
@keyframes typewriter {
  from { width: 0; }
  to { width: 100%; }
}

.text-line {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  animation: typewriter 4s steps(40) 1s forwards;
}
}
.kitchen-container {
  position: relative;
  overflow: hidden;
}

.cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.8); /* Ajusta el color y la opacidad según necesites */
  z-index: 10;
  transform: translateX(-100%);
  transition: transform 1s ease-in-out;
}

.cover.reveal {
  transform: translateX(100%); /* Desplaza la cortina hacia la derecha */
}

</style>
