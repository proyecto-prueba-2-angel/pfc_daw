<template>

  <div class="nosotros min-h-screen flex flex-col">
    <Header class="sticky top-0 left-0 w-full bg-white bg-opacity-95 text-white p-2.5 z-50" />
    <SubirBoton />
    <Cookies />
    <section class="encabezado bg-color-megahogar text-white py-12 flex items-center justify-center">
      <div class="text-center">
        <h1 class="text-3xl md:text-6xl font-bold mb-3 uppercase">Conócenos</h1>
        <p class="text-lg md:text-xl">Dedicados a ofrecer los mejores productos y servicios para tu hogar.</p>
      </div>
    </section>

    <!-- Descripción general sobre Megahogar  -->
    <section class="secciones my-12 mx-auto max-w-6x px-4 md:px-0">
      <img src="../static/Recursos_Web_cocina/encastre9.jpg" style="z-index: -11" alt="Imagen de fondo" class="w-full h-auto" />
      <section class="bg-white p-6 md:p-8 my-12 rounded-lg shadow-lg">
        <h2 class="text-4xl md:text-5xl font-semibold text-center">¿Quiénes somos?</h2>
        <p class="text-base mdf:text-lg text-justify mt-4"><b>Megahogar</b> pertenece a un grupo de empresas alicantinas resultado de tres generaciones
          que se han dedicado íntegramente al mundo del electrodoméstico y del mueble de cocina desde 1978.

          La marca <b>Megahogar</b> está implantada desde el año 2007 en toda la provincia de <b>Alicante</b>.
          En Alicante tenemos nuestras dos tiendas más emblemáticas con más de 3.500 metros de sala de venta.
          También estamos presentes en <b>Almoradí</b>.
          &nbsp;
          En <b>Megahogar</b> nos sentimos orgullosos de todas las personas que componen nuestro equipo y del
          esfuerzo que todos realizamos para ser mejores día tras día. Queremos ser una empresa líder
          y referente en el mundo del hogar compuesta por un equipo de profesionales comprometidos en
          brindar el mejor servicio y atención a nuestros clientes con un sello de calidad contrastado.
          Para ello queremos ofrecer productos y servicios para el <b>hogar</b> que contribuyan a mejorar
          la calidad de vida de las personas, poniendo a su disposición un espacio vanguardista,
          manteniendo una actitud de escucha y compresión de lo que nuestros clientes realmente necesitan
          con predisposición a <b>satisfacer sus necesidades</b>.
        </p>
      </section>

      <!-- Apartados de la empresa  -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <font-awesome-icon icon="users" class="text-4xl text-color-megahogar p-4 rounded-md my-2" />
          <h2 class="text-3xl font-semibold">Atención al cliente</h2>
          <p class="text-justify text-lg p-3">
            Cualquier pregunta o duda que tenga sobre
            el artículo que busca, nuestros expertos le ayudarán en
            todo <b>lo que necesite</b>. ¡No te calles nada!
          </p>
        </div>
        <div>
          <font-awesome-icon icon="medal" class="text-4xl text-color-megahogar p-4 rounded-md my-2" />
          <h2 class="text-3xl font-semibold">Compra Segura</h2>
          <p class="text-justify text-lg p-3">Paga todas tus compras, de una forma <b>fácil</b>, <b>rápida</b> y <b>segura</b> en
            nuestra <b>tienda online</b>. Financia tus todas tus compras en nuestras
            tiendas físicas y en nuestra tienda Online. ¡Paga <b>cómodamente</b>
            todas tus compras!
          </p>
        </div>
        <div>
          <font-awesome-icon icon="truck" class="text-4xl text-color-megahogar p-4 rounded-md my-2" />
          <h2 class="text-3xl font-semibold">Envíos en 24/48 horas</h2>
          <p class="text-justify text-lg p-3">
            Una vez realizado el pedido, nuestro equipo se pone en
            marcha para agilizar el envío lo <b>antes posible</b>. Si ha
            realizado el pedido <b>antes</b> de las <b>15h</b>, lo dejaremos preparado el <b>mismo día</b>.
          </p>
        </div>
        <div class="md:col-span-3">
          <p class="text-justify text-lg p-3">
            En nuestro día a día hacemos patente nuestro <b>compromiso</b> social de implicación
            con la sociedad y con el entorno, expresado a través de el fomento de la <b>salud</b>
            y <b>seguridad</b> en el trabajo, el <b>respeto</b> y la mejora del <b>medio ambiente</b>.
          </p>
          <section class="md:col-span-3 flex flex-wrap justify-center mt-8 pb-8 gap-x-16 gap-y-4">
            <figure class="text-center hover:font-bold">
              <font-awesome-icon icon="leaf" class="text-green-500 text-4xl hover:animate-pulse" />
              <figcaption>Eco Friendly</figcaption>
            </figure>
            <figure class="text-center hover:font-bold">
              <font-awesome-icon icon="user-shield" class="text-blue-500 text-4xl hover:animate-pulse" />
              <figcaption>Seguridad</figcaption>
            </figure>
            <figure class="text-center hover:font-bold">
              <font-awesome-icon icon="handshake" class="text-yellow-500 text-4xl hover:animate-pulse" />
              <figcaption>Compromiso</figcaption>
            </figure>
            <figure class="text-center hover:font-bold">
              <font-awesome-icon icon="heart" class="text-red-500 text-4xl hover:animate-pulse" />
              <figcaption>Cuidado</figcaption>
            </figure>
          </section>
        </div>

      </div>

    </section>

    <!-- Trabajar con nosotros -->
    <section class="cta bg-gradient-to-r from-blue-500 to-teal-500 text-white py-12 text-center">
      <h2 class="text-2xl md:text-3xl font-bold mb-2">Únete a Nosotros</h2>
      <p class="text-base md:text-lg">¿Te interesa formar parte de nuestro equipo? <a href="https://megahogar.es/trabaja-con-nosotros" target="_blank" class="underline">Consulta nuestras vacantes.</a></p>
    </section>
    <Footer />
  </div>
</template>

<script setup>

// Titulos y descripciones
useHead({
  title: 'Conoce más sobre nosotros - Megahogar',
  meta: [
    {
      name: 'description',
      content: '¡Descubre más sobre Megahogar, tu tienda de hogar de confianza! Conoce nuestra historia, valores y compromiso con la sociedad y el medio ambiente.'
    },
    {
      property: 'og:title',
      content: 'Conoce más sobre nosotros  - Megahogar'
    },
    {
      property: 'og:description',
      content: '¡Descubre más sobre Megahogar, tu tienda de hogar de confianza! Conoce nuestra historia, valores y compromiso con la sociedad y el medio ambiente.'
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
  background-image: linear-gradient(to right, #01257b, #2990d4);
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

.cta {
  background-image: linear-gradient(to right, #2990d4, #01257b);
}
</style>
