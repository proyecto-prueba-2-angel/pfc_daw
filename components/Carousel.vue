<template>
  <div class="carousel-container">
    <button class="carousel-button prev" @click="regressSlide">&#10094;</button>
    <div v-for="(slide, index) in activeSlides" :key="index" class="carousel-slide" :class="{ 'main-slide': index === 1 }">
      <img :src="slide.imgSrc" class="carousel-image" :alt="slide.description">
      <p class="carousel-description">{{ slide.description }}</p>
    </div>
    <button class="carousel-button next" @click="advanceSlide">&#10095;</button>
  </div>
</template>

<script>
export default {
  props: {
    carouselItems: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  computed: {
    activeSlides() {
      const result = [];
      for(let i = -1; i <= 1; i++) {
        const idx = (this.currentIndex + i + this.carouselItems.length) % this.carouselItems.length;
        result.push(this.carouselItems[idx]);
      }
      return result;
    }
  },
  methods: {
    advanceSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.carouselItems.length;
    },
    regressSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.carouselItems.length) % this.carouselItems.length;
    }
  }
};
</script>

<style scoped>
.carousel-container {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 20px;
  overflow: hidden;
}

.carousel-slide {
  flex: 0 0 30%;
  max-width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0.5;
  transition: all 0.5s ease;
  margin: 0 10px;
}

.carousel-slide.main-slide {
  flex: 0 0 40%; /* Aumenta el tamaño de la imagen central */
  max-width: 40%; /* Aumenta el tamaño de la imagen central */
  opacity: 1;
}

.carousel-slide img {
  width: 100%;
  height: 300px; /* Establece una altura fija para las imágenes */
  object-fit: cover; /* Ajusta la imagen para que cubra el área establecida */
}

.carousel-description {
  text-align: center;
  font-size: 1em;
  color: #000;
  padding: 10px;
}

.carousel-button {
  cursor: pointer;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  transition: background-color 0.5s ease;
  pointer-events: auto;
  z-index: 10;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.carousel-button.prev {
  left: 0;
}

.carousel-button.next {
  right: 0;
}

.carousel-button:hover {
  background-color: rgba(255, 0, 0, 0.7);
  color: rgb(255, 255, 255);
}

@media (max-width: 1024px) {
  .carousel-slide {
    flex: 0 0 45%;
    max-width: 45%;
  }

  .carousel-slide.main-slide {
    flex: 0 0 55%; /* Aumenta el tamaño de la imagen central */
    max-width: 55%; /* Aumenta el tamaño de la imagen central */
  }
}

@media (max-width: 768px) {
  .carousel-slide {
    flex: 0 0 70%;
    max-width: 70%;
  }

  .carousel-slide.main-slide {
    flex: 0 0 80%; /* Aumenta el tamaño de la imagen central */
    max-width: 80%; /* Aumenta el tamaño de la imagen central */
  }
}

@media (max-width: 480px) {
  .carousel-container {
    flex-direction: column;
  }

  .carousel-slide {
    flex: 0 0 100%;
    max-width: 100%;
    margin: 10px 0;
  }

  .carousel-slide:not(.main-slide) {
    display: none; /* Oculta las imágenes que no son la principal */
  }

  .carousel-button.prev {
    left: 10px;
  }

  .carousel-button.next {
    right: 10px;
  }
}
</style>
