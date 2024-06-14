<template>
  <button v-if="showButton" class="scroll-to-top-button z-50" @click="scrollToTop">
    <div class="arrow-container active:animate-pulse" :class="{ 'pulse': isClicked }">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 floating-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </div>
  </button>
</template>

<script>
export default {
  data() {
    return {
      showButton: false,
      isClicked: false // Agrega una nueva propiedad para rastrear si se hizo clic en el botón
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      // Mostrar el botón cuando se haya desplazado hacia abajo cierta cantidad de píxeles
      this.showButton = window.scrollY > 100;
    },
    scrollToTop() {
      this.isClicked = true; // Establecer isClicked en true cuando se hace clic en el botón
      setTimeout(() => {
        this.isClicked = false; // Restablecer isClicked después de un breve retraso para que la animación pueda repetirse
      }, 300); // Ajusta el tiempo según la duración de la animación CSS
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // Desplazamiento suave
      });
    }
  }
};
</script>

<style>
/* Estilos del botón */
.scroll-to-top-button {
  position: fixed;
  bottom: 4.2rem;
  right: 2rem;
  padding: 0;
  color: #fff;
  cursor: pointer;
  z-index: 999 !important;
  background-color: transparent;
}

.scroll-to-top-button .arrow-container {
  width: 2.5rem; /* Ajustar el ancho */
  height: 2.5rem; /* Ajustar el alto */
  background-color: #000000;
  border-radius: 100%; /* Hacer el contenedor del botón circular */
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Aplica la animación de pulsación cuando isClicked es true */
.pulse {
  animation: pulse 0.3s ease-in-out;
}

.scroll-to-top-button:hover .floating-arrow {
  animation: floating 2s ease-in-out infinite alternate; /* Animación de flotación */
}

/* Animación de flotación */
@keyframes floating {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px); /* Mover hacia arriba */

  }
  100% {
    transform: translateY(0px);
  }
}

.scroll-to-top-button svg {
  width: 25px;
  height: 25px;
}
.scroll-to-top-button .arrow-container:active
  {
    color: #000;
    background-color: #fff;
    outline: 1.6px solid #000;
  }

/* Definición de la animación pulse */
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
@media (max-width: 768px) {
  .scroll-to-top-button {
    bottom: 0.9rem; /* Ajusta la posición en la parte inferior */
    right: 0.6rem; /* Ajusta la posición en el lado derecho */
  }
  .scroll-to-top-button .arrow-container {
    width: 2rem; /* Ajusta el ancho */
    height: 2rem; /* Ajusta el alto */
    border-radius: 0%;
  }
}

</style>
