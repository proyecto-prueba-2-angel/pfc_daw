<template>
  <div class="cortina">
    <slot></slot> <!-- Contenido dinámico -->
  </div>
</template>

<script setup>
// No se necesita JavaScript adicional para este efecto
</script>

  <style scoped>
  .cortina {
    position: fixed; /* Cambio a fixed para que siempre se quede detrás de todo */
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: #8d8d8d;
    background-image:
      radial-gradient(circle at 10% 20%, rgba(158, 158, 158, 0.7) 20%, transparent 50%),
      radial-gradient(circle at 90% 80%, rgba(200, 202, 201, 0.5) 20%, transparent 50%),
      radial-gradient(circle at 50% 50%, rgba(34, 34, 34, 0.164) 30%, transparent 60%),
      linear-gradient(45deg, rgba(80, 80, 80, 0.3) 25%, transparent 25%, transparent 75%, rgba(255, 255, 255, 0.3) 75%),
      linear-gradient(135deg, rgba(0, 0, 0, 0.25) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, 0.25) 75%);
    background-size:
      400px 400px, 600px 600px, 500px 500px, 120px 120px, 120px 120px;
    background-position: 0 0, 0 0, 0 0, 0 0, 25px 25px;
    background-blend-mode: overlay, overlay, normal, lighten, darken;
    z-index: -1; /* Asegura que esté detrás de todo el contenido */
  }
  </style>
