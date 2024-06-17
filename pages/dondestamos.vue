<template>
  <div>
    <!-- Mapas de las Tiendas -->
    <Header />
    <SubirBoton />
    <AdminButton />
    <Cookies />

    <h1 class="shine-effect border-b-4 border-gray-800 px-12 py-4 text-center text-lg sm:text-xl md:text-2xl lg:text-3xl text-white bg-zinc-900 shadow-lg uppercase shadow-gray-800">
      Descubre dónde nos puedes encontrar
    </h1>
    <div class="flex flex-col items-center bg-gray-300 justify-center py-8">
      <div class="w-full md:w-3/4 lg:w-2/3 p-8 bg-white flex flex-col items-center rounded-lg shadow-lg">
        <h1 class="text-xl md:text-3xl font-black text-gray-900 underline decoration-red-600 underline-offset-8 mb-4 uppercase">Eurostone S.A.</h1>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3126.116326438152!2d-0.7863708105419541!3d38.41567650236288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd63c5c623ff62bb%3A0x3cabb582600ea78e!2sEurostone!5e0!3m2!1ses!2ses!4v1718538651067!5m2!1ses!2ses" width="100%" height="450" class="shadow-lg shadow-gray-400 rounded-bl-xl rounded-tr-xl" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <div class="w-full md:w-3/4 lg:w-2/3 p-8 mt-8 bg-white flex flex-col items-center rounded-lg shadow-lg">
        <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-4">Información de Contacto</h2>
        <p class="text-base md:text-lg text-gray-700 mb-2"><b>Dirección:</b> Ctra. Madrid - Alicante Km 383 - C.P. 03660 - Novelda (Alicante) España</p>
        <p class="text-base md:text-lg text-gray-700 mb-2"><b>Teléfono:</b> +34 965 600 550</p>
        <p class="text-base md:text-lg text-gray-700 mb-2"><b>Email:</b> eurostonesl@gmail.com</p>
        <p class="text-base md:text-lg text-gray-700 mb-2"><b>Horario:</b> Lunes a Viernes de 9:00 a 18:00</p>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup>
// Configuración del head para la página específica
useHead({
  title: 'Localízanos - Eurostone',
  meta: [
    {
      name: 'description',
      content: 'Encuentra la localización de nuestra fábrica Eurostone. Visítanos en Novelda para descubrir los mejores mármoles y servicios.'
    },
    {
      property: 'og:title',
      content: 'Localízanos - Eurostone'
    },
    {
      property: 'og:description',
      content: 'Encuentra la localización de nuestra fábrica Eurostone. Visítanos en Novelda para descubrir los mejores mármoles y servicios.'
    },
    {
      property: 'og:image',
      content: 'https://example.com/path/to/your/image.jpg'
    }
  ]
})
</script>

<style scoped>
.encabezado {
  background-image: linear-gradient(to right, #4a4a4a, #2e2e2e);
}

iframe {
  border: 0;
}
</style>
