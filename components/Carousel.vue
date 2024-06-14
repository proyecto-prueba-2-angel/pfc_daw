<template>
  <div class="carousel-container">
    <div v-for="(slide, index) in activeSlides" :key="index" class="carousel-slide" :class="{ 'main-slide': index === 1 }">
      <img :src="slide.imgSrc" class="carousel-image" :alt="slide.description">
      <p class="carousel-description">{{ slide.description }}</p>
    </div>
    <div class="carousel-navigation">
      <button @click="regressSlide">&#10094;</button>
      <button @click="advanceSlide">&#10095;</button>
    </div>
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
      currentIndex: 0 // Cambiado de 'currentCarouselIndex' a 'currentIndex' para simplicidad
    };
  },
  computed: {
    activeSlides() { // Cambiado de 'visibleSlides' a 'activeSlides' para claridad
      const result = [];
      for(let i = -1; i <= 1; i++) {
        const idx = (this.currentIndex + i + this.carouselItems.length) % this.carouselItems.length;
        result.push(this.carouselItems[idx]);
      }
      return result;
    }
  },
  methods: {
    advanceSlide() { // Cambiado de 'nextSlide' a 'advanceSlide'
      this.currentIndex = (this.currentIndex + 1) % this.carouselItems.length;
    },
    regressSlide() { // Cambiado de 'prevSlide' a 'regressSlide'
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
  overflow: hidden;
  justify-content: center;
  align-items: center;
}

.carousel-slide {
  flex: 0 0 33.333%;
  max-width: 33.333%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0.5;
  transition: all 0.5s ease;
}

.carousel-slide.main-slide {
  opacity: 1;
}

.carousel-slide img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.carousel-description {
  text-align: center;
  font-size: 1em;
  color: #000;
  padding: 10px;
}

.carousel-navigation {
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
}

.carousel-navigation button {
  cursor: pointer;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.938);
  color: white;
  border: none;
  transition: background-color 0.5s ease;
}

.carousel-navigation button:hover {
  background-color: rgba(255, 255, 255, 0.938);
  color: rgb(0, 0, 0);
}
</style>
