<template>
  <div>
    <!-- Mapas de las Tiendas -->
    <Header class="sticky top-0 left-0 w-full bg-white bg-opacity-95 text-white p-2.5 z-50" />
    <SubirBoton />
    <AdminButton />
    <Cookies />

    <h1 class="shine-effect border-b-4 border-color-cocinas px-12 py-4 text-center text-lg sm:text-xl md:text-2xl lg:text-3xl  text-white font-bold bg-color-megahogar shadow-lg shadow-white">Descubre dónde nos puedes encontrar. <br> A continuación, te mostramos las siguientes tiendas:</h1>
    <div class="flex flex-row flex-wrap bg-gray-400 justify-center items-center">
      <div class="w-full md:w-1/2 p-8 bg-white flex flex-col items-center">
        <h1 class="text-xl md:text-3xl font-black text-color-megahogar underline decoration-yellow-500 underline-offset-8 mb-4">BABEL</h1>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6258.90850608949!2d-0.514243!3d38.338467!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd62366ceafb0483%3A0xe5a2828d3666a945!2sMegahogar%20Babel!5e0!3m2!1ses!2ses!4v1715333875922!5m2!1ses!2ses" width="100%" height="450" class="shadow-lg shadow-gray-400 rounded-bl-xl rounded-tr-xl" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div class="w-full md:w-1/2 p-8 bg-white flex flex-col items-center">
        <h1 class="text-xl md:text-3xl font-bold text-color-megahogar underline decoration-yellow-500 underline-offset-8 mb-4">VISTAHERMOSA</h1>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3128.1301734914355!2d-0.4624809242146633!3d38.3691099777026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd62376ff0e3b163%3A0x1e0d575f7abde915!2sMegahogar%20Vistahermosa!5e0!3m2!1ses!2ses!4v1715334079565!5m2!1ses!2ses" width="100%" height="450" class="shadow-lg shadow-gray-400 rounded-bl-xl rounded-tr-xl" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

    </div>

    <Footer />
  </div>
</template>
<script setup>

// Configuración del head para la página específica
useHead({
  title: 'Localiza Nuestras Tiendas - Megahogar',
  meta: [
    {
      name: 'description',
      content: 'Encuentra las localizaciones de nuestras tiendas Megahogar. Visítanos en Babel y Vistahermosa para descubrir los mejores productos para tu hogar.'
    },
    {
      property: 'og:title',
      content: 'Localiza Nuestras Tiendas - Megahogar'
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
</script>