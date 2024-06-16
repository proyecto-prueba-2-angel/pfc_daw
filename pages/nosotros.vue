<template>
  <div class="nosotros min-h-screen flex flex-col bg-gray-300">
    <Header />
    <SubirBoton />
    <Cookies />

    <section class="encabezado bg-gradient-to-l from-zinc-800 to-black text-white py-12 flex items-center justify-center">
      <div class="text-center">
        <h1 class="text-3xl md:text-6xl font-bold mb-3 uppercase">Conócenos</h1>
        <p class="text-lg md:text-xl">Dedicados a ofrecer los mejores mármoles y servicios para tu hogar.</p>
      </div>
    </section>

    <!-- Descripción general sobre Eurostone -->
    <section class="secciones my-12 mx-auto max-w-5xl px-4 md:px-8 bg-white p-6 md:p-8 rounded-lg shadow-lg">
      <img src="/images/fotos/14.jpg" alt="Imagen de fondo" class="w-full h-auto mb-8 rounded-lg" />
      <h2 class="text-4xl md:text-5xl font-semibold text-center">¿Quiénes somos?</h2>
      <p class="text-base md:text-lg text-justify mt-4">
        <b>Eurostone</b> tiene sus raíces en una pequeña carnicería en Salamanca, donde nuestro fundador comenzó su camino empresarial. Con visión y determinación, decidió explorar el mundo del mármol, un material que combina belleza y durabilidad. Desde entonces, hemos crecido y nos hemos convertido en líderes en el sector, ofreciendo productos de la más alta calidad a nuestros clientes.
      </p>
      <p class="text-base md:text-lg text-justify mt-4">
        La marca <b>Eurostone</b> se ha consolidado a lo largo de los años, expandiendo nuestra presencia y aumentando nuestra capacidad productiva. Nos sentimos orgullosos de todas las personas que componen nuestro equipo y del esfuerzo que todos realizamos para ser mejores día tras día. Queremos ser una empresa líder y referente en el mundo del mármol, compuesta por un equipo de profesionales comprometidos en brindar el mejor servicio y atención a nuestros clientes con un sello de calidad contrastado.
      </p>
      <p class="text-base md:text-lg text-justify mt-4">
        Para ello, queremos ofrecer productos y servicios de mármol que contribuyan a mejorar la calidad de vida de las personas, poniendo a su disposición un espacio vanguardista y manteniendo una actitud de escucha y comprensión de lo que nuestros clientes realmente necesitan con predisposición a <b>satisfacer sus necesidades</b>.
      </p>
    </section>

    <!-- Valores de la empresa -->
    <section class="secciones my-12 mx-auto max-w-7xl px-4 md:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <font-awesome-icon icon="users" class="text-4xl text-gray-800 p-4 rounded-md my-2" />
          <h2 class="text-3xl font-semibold">Atención al cliente</h2>
          <p class="text-justify text-lg p-3">
            Cualquier pregunta o duda que tenga sobre el artículo que busca, nuestros expertos le ayudarán en todo <b>lo que necesite</b>. No dude en <a href="/contacto" class="font-bold underline" target="_blank">contactarnos</a>
          </p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <font-awesome-icon icon="medal" class="text-4xl text-gray-800 p-4 rounded-md my-2" />
          <h2 class="text-3xl font-semibold">Calidad Garantizada</h2>
          <p class="text-justify text-lg p-3">
            Ofrecemos mármoles de la más alta calidad, seleccionados y tratados para garantizar su durabilidad y belleza. Nuestro compromiso es proporcionar productos que superen las expectativas de nuestros clientes.
          </p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <font-awesome-icon icon="handshake" class="text-4xl text-gray-800 p-4 rounded-md my-2" />
          <h2 class="text-3xl font-semibold">Responsabilidad Social</h2>
          <p class="text-justify text-lg p-3">
            En nuestro día a día hacemos patente nuestro <b>compromiso</b> social de implicación con la sociedad y con el entorno, expresado a través del fomento de la <b>salud</b> y <b>seguridad</b> en el trabajo, el <b>respeto</b> y la mejora del <b>medio ambiente</b>.
          </p>
        </div>
      </div>
      <section class="flex flex-wrap justify-center mt-8 pb-8 gap-x-16 gap-y-4">
        <figure class="text-center hover:font-bold">
          <font-awesome-icon icon="leaf" class="text-gray-800 text-4xl hover:animate-pulse" />
          <figcaption>Eco Friendly</figcaption>
        </figure>
        <figure class="text-center hover:font-bold">
          <font-awesome-icon icon="user-shield" class="text-gray-800 text-4xl hover:animate-pulse" />
          <figcaption>Seguridad</figcaption>
        </figure>
        <figure class="text-center hover:font-bold">
          <font-awesome-icon icon="handshake" class="text-gray-800 text-4xl hover:animate-pulse" />
          <figcaption>Compromiso</figcaption>
        </figure>
        <figure class="text-center hover:font-bold">
          <font-awesome-icon icon="heart" class="text-gray-800 text-4xl hover:animate-pulse" />
          <figcaption>Cuidado</figcaption>
        </figure>
      </section>
    </section>

    <Footer />
  </div>
</template>

<script setup>
// Titulos y descripciones
useHead({
  title: 'Conoce más sobre nosotros - Eurostone',
  meta: [
    {
      name: 'description',
      content: '¡Descubre más sobre Eurostone, tu proveedor de mármoles de confianza! Conoce nuestra historia, valores y compromiso con la sociedad y el medio ambiente.'
    },
    {
      property: 'og:title',
      content: 'Conoce más sobre nosotros - Eurostone'
    },
    {
      property: 'og:description',
      content: '¡Descubre más sobre Eurostone, tu proveedor de mármoles de confianza! Conoce nuestra historia, valores y compromiso con la sociedad y el medio ambiente.'
    },
    {
      property: 'og:image',
      content: 'https://example.com/path/to/your/image.jpg'
    }
  ]
})
</script>

<style scoped>
.nosotros {
  background: #f3f4f6;
}

.encabezado {
  background-image: linear-gradient(to right, #4a4a4a, #2e2e2e);
}

.secciones div, .miembro {
  background: #ffffff;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.miembro img {
  object-fit: cover;
}
</style>
