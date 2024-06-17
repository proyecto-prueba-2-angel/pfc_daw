<template>
  <footer class="bg-zinc-900 text-gray-300 py-12">
    <div class="max-w-screen-xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 text-center lg:text-left">
      <!-- Logotipo y breve descripción de la empresa -->
      <div class="mb-6 lg:mb-0 flex flex-col items-center lg:items-start">
        <img src="/images/EUROSTONE_MARMOLES_PIDRAS_300_rv01.png" alt="Eurostone Logo" class="mb-4 w-48">
        <p class="font-semibold text-lg text-gray-100 mb-2">EUROSTONE S.A.</p>
        <p class="text-sm">Líderes en el mercado de mármol y piedra, con más de 50 años de experiencia.</p>
      </div>
      <!-- Enlaces rápidos -->
      <div>
        <h3 class="font-semibold text-lg text-gray-100 mb-4">Más enlaces</h3>
        <div class="grid grid-cols-2 gap-4">
          <ul class="space-y-2">
            <li><a href="/nosotros" class="transition-colors duration-200 hover:text-white">Sobre Nosotros</a></li>
            <li><a href="/dondestamos" class="transition-colors duration-200 hover:text-white">Dónde encontrarnos</a></li>
            <li><a href="/contacto" class="transition-colors duration-200 hover:text-white">Contacto</a></li>
          </ul>
          <ul class="space-y-2">
            <li><a href="/cookies" class="transition-colors duration-200 hover:text-white">Política de Cookies</a></li>
            <li><a href="/avisolegal" class="transition-colors duration-200 hover:text-white">Aviso Legal</a></li>
            <li><a href="/politicapriv" class="transition-colors duration-200 hover:text-white">Política de Privacidad</a></li>
            <br>
            <li><a href="/login" class="transition-colors duration-200 hover:text-white">Administrador <font-awesome-icon icon="key" /></a></li>

          </ul>
        </div>
      </div>
      <!-- Contacto -->
      <div>
        <h3 class="font-semibold text-lg text-gray-100 mb-4">Información de Contacto</h3>
        <p>Ctra. Madrid - Alicante Kmº 383</p>
        <p>C.P. 03660 - Novelda (Alicante), España</p>
        <p>Tel: 965 600 550</p>
        <p>Email: eurostonesl@gmail.com</p>
        <!-- Redes sociales -->
        <div class="flex justify-center lg:justify-start space-x-4 mt-4">
          <Redes />
        </div>
      </div>
    </div>
    <!-- Derechos reservados -->
    <div class="text-center text-sm mt-10 font-light opacity-75">
      &copy; {{ currentYear }} Eurostone. Todos los derechos reservados.
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>

<style scoped>
footer {
  font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
}

a {
  transition: color 0.3s ease-in-out, opacity 0.3s ease;
}

.hover:text-white:hover {
  color: #fff;
}

.hover:opacity-80:hover {
  opacity: 0.8;
}

input[type="email"] {
  margin-right: 0.5rem;
}
</style>
