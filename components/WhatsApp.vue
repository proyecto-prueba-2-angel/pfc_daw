<template>
  <div class="whatsapp-button hover:shine-effect hidden sm:hidden md:block">
    <!-- <a href="https://api.whatsapp.com/send?phone=627230250&text=Hola%20MegaHogar!" target="_blank" class="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full shadow-lg">
      <img src="/static/img/whatsapp_icon.png" alt="WhatsApp" class="h-6 w-6 mr-2">
      Chatea con nosotros
    </a> -->
  </div>
</template>

<style scoped>
.whatsapp-button {
position: fixed;
bottom: 20px;
right: 20px;
z-index: 1000; /* nos aseguramos que este encima siempre */
}
</style>