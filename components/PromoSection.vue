<template>
  <div class="promo-section w-full overflow-hidden relative rounded-lg shadow-xl bg-gradient-to-r from-blue-900 via-purple-500 to-purple-600">
    <h1 class="text-center text-xl md:text-2xl lg:text-4xl text-white py-4 font-bold shadow">DESCUBRE LAS MEJORES OFERTAS</h1>
    <div class="carousel-container relative">
      <div class="slides flex transition-transform duration-700 ease-in-out" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
        <div v-for="(promo, index) in promotions" :key="index" class="slide w-full flex-shrink-0 flex flex-col items-center justify-center relative">
          <div :style="{ backgroundImage: 'url(' + promo.url_imagen + ')'}" class="image w-full h-48 bg-cover bg-no-repeat bg-center"></div>
          <div class="content w-full p-4 text-white">
            <h3 class="text-2xl font-bold">{{ promo.titulo }}</h3>
            <p class="text-lg my-4">{{ promo.descripcion }}</p>
            <button class="cta-btn">Explorar</button>
          </div>
        </div>
      </div>

      <div class="dots absolute bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <button v-for="(promo, index) in promotions" :key="index" :class="{'dot': true, 'active': currentSlide === index}" @click="goToSlide(index)"></button>
      </div>
      <div class="controls flex justify-between absolute w-full px-4 top-1/2 transform -translate-y-1/2">
        <button class="control" @click="prevSlide">&#10094;</button>
        <button class="control" @click="nextSlide">&#10095;</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      promotions: [],
      currentSlide: 0,
      interval: null
    };
  },
  async mounted() {
    await this.loadPromotions();
    this.startCarousel();
  },
  methods: {
    async loadPromotions() {
      const response = await fetch('https://database.electrolink.es/database_test/server.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
        body: new URLSearchParams({ getPromotions: 'true' })
      });
      const data = await response.json();
      this.promotions = data;
    },

    startCarousel() {
      this.interval = setInterval(this.nextSlide, 5000);
    },
    stopCarousel() {
      clearInterval(this.interval);
    },
    goToSlide(index) {
      this.currentSlide = index;
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.promotions.length;
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.promotions.length) % this.promotions.length;
    }
  }
};
</script>

<style scoped>
.promo-section {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 0.5rem;
  box-shadow: 0 8px 25px rgba(0,0,0,0.2);
  background: linear-gradient(to right, #001579, #4b1eff, #5b4cff, #8b52fd);
}

.carousel-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.slides {
  display: flex;
  height: 100%;
}

.slide {
  flex: 0 0 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image {
  width: 100%;
  height: 200px; /* Default height */
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center; /* Adjusted to center for better focus */
}

.content {
  width: 100%;
  padding: 20px;
  background-color: transparent; /* Use transparency for better overlay effect */
  text-align: center;
  color: #fff;
}

.control, .dots .dot {
  background: #ffffff;
  color: #444;
  opacity: 0.8;
  transition: opacity 0.3s, background-color 0.3s;
}

.control:hover, .dots .dot.active, .dots .dot:hover {
  background: #01168d;
  color: #fff;
  opacity: 1;
}

.control {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

.dots {
  bottom: 10px;
}

.cta-btn {
  padding: 10px 20px;
  background-color: #4b1eff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.cta-btn:hover {
  background-color: #3727d8;
}

@media (max-width: 640px) {
  .image {
    height: 150px; /* Smaller height for smaller devices */
  }
  .content {
    padding: 10px;
  }
}

@media (min-width: 641px) and (max-width: 1024px) {
  .image {
    height: 250px; /* Slightly larger height for tablets and small desktops */
  }
}

@media (min-width: 1025px) {
  .image {
    height: 400px; /* Largest height for large screens */
  }
}
</style>
