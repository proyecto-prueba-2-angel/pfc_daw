<template>
  <div>
    <Header />
    <SubirBoton />
    <AdminButton />
    <Cookies />

    <div class="cookie-policy-container mx-8 my-16 border-1 border-zinc-950 rounded-lg shadow-zinc-950 shadow-md p-8 text-black">
      <h1 class="shine-effect font-extrabold uppercase text-2xl lg:text-4xl mb-6 text-center">Política de Cookies</h1>
      <p class="text-justify mb-4">
        En <b>Eurostone</b>, utilizamos cookies para mejorar su experiencia en nuestro sitio web. Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita nuestro sitio. Nos ayudan a recordar sus preferencias y a mejorar nuestros servicios.
      </p>
      <h2 class="font-bold text-xl lg:text-2xl mt-6 mb-4">¿Qué son las cookies?</h2>
      <p class="text-justify mb-4">
        Las cookies son pequeños archivos de texto que los sitios web que visita colocan en su computadora. Son ampliamente utilizadas para hacer que los sitios web funcionen, o funcionen de manera más eficiente, así como para proporcionar información a los propietarios del sitio.
      </p>
      <h2 class="font-bold text-xl lg:text-2xl mt-6 mb-4">Tipos de cookies que utilizamos</h2>
      <p class="text-justify mb-4">
        Utilizamos diferentes tipos de cookies en nuestro sitio web:
      </p>
      <ul class="list-disc pl-5 space-y-2 mb-4">
        <li><b>Cookies esenciales:</b> Estas cookies son necesarias para que el sitio web funcione correctamente y no se pueden desactivar en nuestros sistemas.</li>
        <li><b>Cookies de rendimiento:</b> Estas cookies nos permiten contar las visitas y fuentes de tráfico para que podamos medir y mejorar el rendimiento de nuestro sitio.</li>
        <li><b>Cookies de funcionalidad:</b> Estas cookies permiten que el sitio web proporcione una funcionalidad y personalización mejoradas.</li>
        <li><b>Cookies de publicidad:</b> Estas cookies pueden ser establecidas a través de nuestro sitio por nuestros socios publicitarios.</li>
      </ul>
      <h2 class="font-bold text-xl lg:text-2xl mt-6 mb-4">Cómo gestionar las cookies</h2>
      <p class="text-justify mb-4">
        Puede configurar su navegador para que rechace todas las cookies o para que le avise cuando se envíe una cookie. Sin embargo, si desactiva las cookies, es posible que algunas partes de nuestro sitio web no funcionen correctamente.
      </p>
      <h2 class="font-bold text-xl lg:text-2xl mt-6 mb-4">Cambios en nuestra política de cookies</h2>
      <p class="text-justify mb-4">
        Podemos actualizar nuestra política de cookies de vez en cuando. Le notificaremos cualquier cambio publicando la nueva política de cookies en nuestro sitio web. Le recomendamos que revise esta política periódicamente para mantenerse informado sobre cómo usamos las cookies.
      </p>
      <h2 class="font-bold text-xl lg:text-2xl mt-6 mb-4">Contacto</h2>
      <p class="text-justify mb-4">
        Si tiene alguna pregunta sobre nuestra política de cookies, puede contactarnos en <a href="mailto:eurostonesl@gmail.com" class="underline text-blue-700">eurostonesl@gmail.com </a> , o hacernos una consulta a través de nuestro <a href="/contacto" target="_blank" class="font-bold">formulario</a>
      </p>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'CookiePolicy',
  head() {
    return {
      title: 'Política de cookies - Eurostone',
      description: 'Página de política de cookies de Eurostone'
    }
  }
}
</script>

<style scoped>
.cookie-policy-container {

  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: rgba(212, 212, 212, 0.9); /* Fondo blanco con opacidad */
}
</style>
