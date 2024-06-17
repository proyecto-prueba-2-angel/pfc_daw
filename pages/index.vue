<template>
  <div class="overflow-x-hidden">   <!-- Sin usar -->
    <Header />   <!-- Sin Usar -->
    <SubirBoton />
    <AdminButton />
    <Cookies />

    <!-- Carrusel inicial -->
    <div id="carousel" class="container2">
      <div class="carousel-slider">
        <div class="slide-wrapper" :style="wrapperStyle">
          <div v-for="(slide, index) in slides" :key="index" class="slide-content">   <!-- Para u los slides cogemos un v-for -->
            <img id="img1" :src="slide.imageSrc" :alt="slide.title" class="brightness-75" />
          </div>
        </div>
        <div class="next-slide-preview hidden sm:block" :class="{ 'animate-slide': animating }">
          <div>
            <img id="img2" :src="nextSlideImg" />  <!-- Sin usar -->
          </div>
          <div class="next-arrow" @click="goToNextSlide">
            <a class="p-2 md:p-5 font-bold hover:bg-zinc-950 hover:opacity-75 rounded-md transition duration-500 ease-in-out">{{ nextSlideTitle }}</a> <!-- Asumiendo que usas Font Awesome -->
          </div>
        </div>

        <!-- Botón que dirige a la página correspondiente al slide -->
        <NuxtLink class="slide-title" :class="{ 'animate-slide': animating }" :to="currentSlide.link">
          <h2 class="bg-[rgba(255,255,255,0.84)] sm:bg-[rgba(255,255,255,0.4)] p-2 md:p-5 hover:opacity-75 hover:bg-orange-800 hover:text-gray-200 mx-auto rounded-md font-extrabold transition duration-500 ease-in-out slide-title2 text-3xl sm:text-4xl md:text-5xl" style="text-align: center;">{{ currentSlide.title }}</h2>
        </NuxtLink>

        <div class="navigation-buttons">
          <button
            v-for="(slide, index) in slides"
            :key="index"
            :class="{'active': index === currentSlideIndex, 'inactive': index !== currentSlideIndex}"
            class="bg-white w-3 h-3 md:w-6 md:h-6 rounded-full shadow-lg focus:animate-pulse"
            @click="goToSlide(index)"
          >
          <!-- Los botones ahora no tienen texto/contenido visible -->
          </button>
        </div>

      </div>
    </div>

    <div class="bottom-content bg-zinc-900 mt-8 p-2 md:p-8 flex flex-col md:flex-row items-center">
      <div class="md:w-2/5 p-4">
        <img src="/images/fotos/02.jpg" class="w-full rounded-md brightness-90">
      </div>
      <div class="md:w-1/2 mt-4 md:mt-0 md:ml-8 flex flex-col items-center md:items-start">
        <img src="/images/EUROSTONE_MARMOLES_PIDRAS_300_rv01.png" class="logo-image p-4 rounded-md">
        <h2 class="text-xl md:text-2xl font-bold mt-4 md:mt-8 text-white text-center md:text-left">Fábrica de mármoles y piedras</h2>
        <div class="max-w-xl">
          <p class="mt-2 md:mt-4 text-justify text-base md:text-lg leading-loose text-white">
            Explora el corazón de <b>Eurostone</b> en nuestras oficinas centrales. Desde aquí se gestiona toda <b>nuestra operación</b>, donde cada detalle está cuidadosamente diseñado para fomentar la <b>colaboración</b> y la <b>innovación</b>. Sumérgete en un ambiente profesional y acogedor que refleja nuestra dedicación a la <b>calidad</b> y al <b>servicio excepcional</b>.
          </p>
          <div class="flex items-center hover:underline space-x-2 mt-4">
            <div style="background-color: red; width: 20px; height: 20px;"></div>
            <a href="/nosotros" class="text-white">Leer más <font-awesome-icon icon="book" /></a>
          </div>
        </div>
      </div>
    </div>
    <!-- Texto informativo #2 -->
    <div class="bottom-content2 ">
      <div class="flex flex-col items-center px-4 sm:px-8 md:px-16 lg:px-32">
        <b class="mt-8 lg:text-4xl md:text-2xl lg:px-16 md:px-12 sm:px-8 sm:text-lg uppercase text-white bg-orange-800 border-2 border-blue p-2 rounded-xl">Los acabados</b>
        <h3 class="mt-5 mb-6 text-xs sm:text-sm md:text-base lg:text-xl leading-relaxed text-justify">
          En Eurostone, comprendemos que el <b>acabado</b> de cada pieza de <b>mármol</b> o <b>piedra natural</b> es fundamental para destacar la <b>belleza</b> y el <b>carácter único</b> de cada espacio. Ofrecemos una amplia variedad de <b>acabados</b> que transforman estos materiales naturales en expresiones de arte. Desde <b>acabados pulidos</b> que reflejan la luz, hasta <b>texturas rugosas</b> que resaltan la autenticidad del material, cada uno está diseñado para cumplir con las expectativas <b>estéticas</b> y <b>funcionales</b> de nuestros clientes. Con Eurostone, cada elección de <b>acabado</b> es una oportunidad para enaltecer y personalizar su espacio con <b>elegancia</b> y <b>estilo duraderos</b>.
        </h3>
      </div>

      <!-- Para tamaños de pantalla grande, imagen con enlaces -->
      <div class="relative w-full hidden md:block">
        <div class="flex flex-col items-end">
          <div class="image-container2">
            <img id="mainImage" src="/images/fotos/acabadosintro.jpg" alt="Imagen de acabado" class="brightness-105">
            <p id="imageDescription" class="bg-gray-900 text-white text-lg font-bold pl-4 py-2 hidden lg:block">Pasa el cursor sobre los enlaces</p>
          </div>
          <div class="translucent-background"></div>
          <div class="links-container2 absolute flex flex-col px-2 uppercase">
            <a class="link rounded-md bg-transparent text-white text-2xl mt-3 mb-3 font-bold" href="/finishes" @mouseover="changeImage('/images/enbruto1.png', 'Mármol en bruto - Estado natural del mármol sin tratar.')">En Bruto</a>
            <a class="link rounded-md bg-transparent text-white text-xl mt-3 mb-3 font-bold" href="/finishes" @mouseover="changeImage('/images/envejecido2.jpg', 'Mármol envejecido - Acabado que proporciona una apariencia antigua.')">Envejecido</a>
            <a class="link rounded-md  bg-transparent text-white text-xl mt-3 mb-3 font-bold" href="/finishes" @mouseover="changeImage('/images/acabado1.jpg', 'Mármol pulido - Superficie lisa y brillante que refleja la luz.')">Pulido</a>
            <a class="link rounded-md bg-transparent text-white text-xl mt-3 mb-3 font-bold" href="/finishes" @mouseover="changeImage('/images/apomazado1.jpg', 'Mármol apomazado - Acabado mate y suave.')">Apomazado</a>
            <a class="link rounded-md bg-transparent text-white text-xl mt-3 mb-3 font-bold" href="/finishes" @mouseover="changeImage('/images/abujardado1.jpg', 'Mármol abujardado - Superficie rugosa con textura.')">Abujardado</a>
          </div>
        </div>
      </div>

      <!-- Para tamaños de pantalla pequeña, botones para mostrarlas imágenes de una vez -->
      <div class="relative w-full block md:hidden">
        <div class="flex flex-wrap justify-center items-center">
          <button class="style-button uppercase" @click="openModal('/images/enbruto1.png')">En Bruto</button>
          <button class="style-button uppercase" @click="openModal('/images/envejecido2.jpg')">Envejecido</button>
          <button class="style-button uppercase" @click="openModal('/images/acabado1.jpg')">Pulido</button>
          <button class="style-button uppercase" @click="openModal('/images/apomazado1.jpg')">Apomazado</button>
          <button class="style-button uppercase" @click="openModal('/images/abujardado1.jpg')">Abujardado</button>
        </div>
        <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
          <div class="relative bg-white p-4 rounded-lg">
            <button class="absolute text-white top-2 right-2 bg-gray-950 p-1 rounded-md" @click="closeModal">Cerrar</button>
            <img :src="modalImage" alt="Estilo de Mármol" class="max-w-full max-h-[70vh] h-auto object-contain" />
          </div>
        </div>
      </div>
    </div>

    <!-- Imagen larga con enlaces (no activos) -->
    <div class="mt-10 flex justify-center items-center flex-col">
      <img src="../public/images/fotos/01 VISTA GENERAL FÁBRICA.jpg" alt="Vista General de la Fábrica" class="max-w-full h-auto" />
      <p class="pl-3 pr-3 bg-gray-950 text-white font-bold mt-4 py-2 rounded text-center text-sm sm:text-lg md:text-xl">VISTA GENERAL DE EUROSTONE</p>
    </div>

    <!-- Texto informativo #3 -->
    <div class="bottom-content3">
      <div class="flex flex-col items-center px-4 sm:px-8 md:px-16 lg:px-32">
        <b class="mt-8 lg:text-4xl md:text-2xl lg:px-16 md:px-12 sm:px-8 sm:text-lg uppercase text-white bg-orange-800 border-2 border-blue p-2 rounded-xl mb-8 w-1/2 text-center"> MATERIALES </b>
        <h3 class="mt-5 mb-6 text-xs sm:text-sm md:text-base lg:text-xl leading-relaxed text-justify">
          En Eurostone, nos enorgullece ofrecer una amplia gama de <b>materiales</b> de la más alta calidad. Desde el clásico <b>mármol</b> hasta las piedras naturales más exóticas, cada uno de nuestros productos está seleccionado para garantizar <b>durabilidad</b> y <b>belleza</b> excepcionales. Nuestros <b>materiales</b> son perfectos para una variedad de aplicaciones, incluyendo <b>cocinas</b>, <b>baños</b>, <b>salones</b> y más. Descubra cómo nuestros <b>materiales</b> pueden transformar su espacio con <b>elegancia</b> y <b>sofisticación</b>.
        </h3>
        <Carousel :carouselItems="sliders" />

      </div>

      <div>

      </div>

      <div class="flex flex-col md:flex-row bg-gray-900 p-4 md:p-12 m-2 space-y-4 md:space-y-0">
        <div class="flex items-center justify-center md:w-1/2">
          <div class="w-full px-2 md:px-6">
            <p class="text-black text-sm md:text-lg bg-gray-200 px-4 py-4 text-justify rounded-lg shadow-xl">
              En Eurostone, nuestros cimientos están arraigados en una tradición de más de medio siglo. Durante más de <b>50 años</b>, hemos sido <b>pioneros</b> en la industria de la
              <b>piedra natural</b>, llevando la <b>excelencia</b> y la <b>innovación</b> a cada paso del camino. Desde nuestros humildes comienzos hasta nuestra posición actual como <b>líderes del mercado</b>,
              cada día nos esforzamos por <b>superar</b> las <b>expectativas</b> y continuar siendo un referente en <b>calidad</b> y <b>servicio</b>.
            </p>
          </div>
        </div>

        <div class="flex flex-col items-center justify-center md:w-1/2 space-y-2 md:space-y-0 md:border-l-4 border-white pl-0 md:pl-8">
          <!-- Barra superior para dispositivos móviles -->
          <div class="block md:hidden w-full">
            <div class="border-t-4 border-white w-full mb-2"></div>
          </div>
          <div class="flex items-baseline space-x-2">
            <p ref="counter" class="counter-number text-6xl md:text-8xl font-bold text-white">53</p>
            <p class="text-white text-2xl font-bold">+</p>
          </div>
          <p class="counter-text text-sm md:text-xl text-white">años de experiencia</p>
          <!-- Barra inferior para dispositivos móviles -->
          <div class="block md:hidden w-full">
            <div class="border-t-4 border-white w-full mt-2"></div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  </div></template>

<script>
const isMenuOpen = ref(false);

export default {
  data() {
    return {
      nextSlideImg: '',
      isMobile: false,
      currentSlideIndex: 0,
      animating: false,
      grabbing: false,
      nextSlideTitle: 'CANTERAS',
      slides: [
        { imageSrc: 'images/fotos/12.jpg', title: 'MATERIALES', link: '/materials' },
        { imageSrc: 'images/fotos/13.jpg', title: 'CANTERAS', link: '/quarries' },
        { imageSrc: 'images/fotos/19_clasificar.jpg', title: 'ACABADOS', link: '/finishes' }
      ],
      direction: 'left',
      isDragging: false,
      startX: 0,
      imageOffset: 0,
      imageWidth: 0,
      imageSrc: 'https://drive.google.com/file/d/1PbTY-XHQ7zFsQTUHMMicDnIbEbLTnp4t/view?usp=sharing',
      currentCarouselIndex: 0,
      sliders: [
        { imgSrc: '/images/rojlc1.jpg', description: 'ROJO ALICANTE' },
        { imgSrc: '/images/orvell1.png', description: 'ORVELL' },
        { imgSrc: '/images/cremam2.jpg', description: 'CREMA MARFIL' },
        { imgSrc: '/images/marremp1.jpg', description: 'MARRON EMPERADOR' },
        { imgSrc: '/images/cremag1.jpg', description: 'CREMA MAGDALA' },
        { imgSrc: '/images/rosazarc2.png', description: 'ROSA ZARCI' }
      ],
      showModal: false,
      modalImage: ''
    };
  },
  computed: {
    currentSlide() {
      return this.slides[this.currentSlideIndex];
    },
    wrapperStyle() {
      return {
        transform: `translateX(-${this.currentSlideIndex * 100}vw)`
      };
    }
  },
  mounted() {
    this.updateHead();
    this.initIntersectionObserver();
    this.updateMobileStatus();
    window.addEventListener('resize', this.updateMobileStatus);
    window.addEventListener('resize', this.calculateImageWidth);
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateMobileStatus);
    window.removeEventListener('resize', this.calculateImageWidth);
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    initIntersectionObserver() {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
      };
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if(entry.isIntersecting) {
            this.startCounter();
            observer.unobserve(entry.target);
          }
        });
      }, options);
      observer.observe(this.$refs.counter);
    },
    startCounter() {
      let count = 0;
      const target = 53;
      const duration = 100;
      const step = target / (duration / 100);
      const startTime = performance.now();
      const animateCounter = () => {
        const elapsedTime = performance.now() - startTime;
        const increment = (step * elapsedTime) / 1000;
        count = Math.min(Math.floor(increment), target);
        this.$refs.counter.textContent = count;
        if(count < target) {
          requestAnimationFrame(animateCounter);
        }
      };
      animateCounter();
    },
    updateMobileStatus() {
      this.isMobile = window.innerWidth <= 768;
    },
    updateHead() {
      document.title = 'Mármoles y Piedras - Eurostone';
      const descriptionContent = 'Eurostone, fábrica de mármoles y piedras en Novelda, Alicante.';
      let descriptionMetaTag = document.querySelector('meta[name="description"]');
      if(!descriptionMetaTag) {
        descriptionMetaTag = document.createElement('meta');
        descriptionMetaTag.setAttribute('name', 'description');
        document.head.appendChild(descriptionMetaTag);
      }
      descriptionMetaTag.setAttribute('content', descriptionContent);
    },
    goToNextSlide() {
      this.animating = true;
      if(this.currentSlideIndex < this.slides.length - 1) {
        this.currentSlideIndex += 1;
      } else {
        this.currentSlideIndex = 0;
      }
      const nextSlideIndex = this.currentSlideIndex >= this.slides.length - 1 ? 0 : this.currentSlideIndex + 1;
      this.nextSlideTitle = this.slides[nextSlideIndex].title;
      setTimeout(() => {
        this.animating = false;
      }, 1000);
    },
    goToSlide(index) {
      this.animating = true;
      if(index > this.currentSlideIndex) {
        this.direction = 'left';
      } else {
        this.direction = 'right';
      }
      this.currentSlideIndex = index;
      const nextSlideIndex = this.currentSlideIndex >= this.slides.length - 1 ? 0 : this.currentSlideIndex + 1;
      this.nextSlideTitle = this.slides[nextSlideIndex].title;
      setTimeout(() => {
        this.animating = false;
      }, 600);
    },
    handleScroll() {
      const bottomContent = document.querySelector('.bottom-content');
      if(bottomContent) {
        const windowHeight = window.innerHeight;
        const scrollPosition = window.scrollY;
        const triggerPoint = bottomContent.offsetTop - (windowHeight / 1.5);
        if(scrollPosition > triggerPoint) {
          bottomContent.classList.add('slide-in');
        }
      }
      const bottomContent2 = document.querySelector('.bottom-content2');
      if(bottomContent2) {
        const windowHeight = window.innerHeight;
        const scrollPosition = window.scrollY;
        const triggerPoint = bottomContent2.offsetTop - (windowHeight / 1.5);
        if(scrollPosition > triggerPoint) {
          bottomContent2.classList.add('slide-in');
        }
      }
      const links = document.querySelectorAll('.bottom-content2 .link');
      if(links.length > 0) {
        const windowHeight = window.innerHeight;
        const scrollPosition = window.scrollY;
        const triggerPoint = bottomContent2.offsetTop - (windowHeight / 2);
        if(scrollPosition > triggerPoint) {
          links.forEach((link, index) => {
            link.classList.add(`show-link-${index + 1}`);
          });
        } else {
          links.forEach((link, index) => {
            link.classList.remove(`show-link-${index + 1}`);
          });
        }
      }
      const bottomContent3 = document.querySelector('.bottom-content3');
      if(bottomContent3) {
        const windowHeight = window.innerHeight;
        const scrollPosition = window.scrollY;
        const triggerPoint = bottomContent3.offsetTop - (windowHeight / 1.5);
        if(scrollPosition > triggerPoint) {
          bottomContent3.classList.add('slide-in');
        }
      }
      const bottomContent_md = document.querySelector('.bottom-content_md');
      if(bottomContent_md) {
        const windowHeight = window.innerHeight;
        const scrollPosition = window.scrollY;
        const triggerPoint = bottomContent_md.offsetTop - (windowHeight / 0.3);
        if(scrollPosition > triggerPoint) {
          bottomContent_md.classList.add('slide-in');
        }
      }
      const bottomContent2_md = document.querySelector('.bottom-content2_md');
      if(bottomContent2_md) {
        const windowHeight = window.innerHeight;
        const scrollPosition = window.scrollY;
        const triggerPoint = bottomContent2_md.offsetTop - (windowHeight / 0.3);
        if(scrollPosition > triggerPoint) {
          bottomContent2_md.classList.add('slide-in');
        }
      }
    },
    calculateImageWidth() {
      this.$nextTick(() => {
        const imgElement = this.$refs.image;
        if(imgElement) {
          this.imageWidth = imgElement.offsetWidth;
        }
      });
    },
    openModal(imageUrl) {
      this.modalImage = imageUrl;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.modalImage = '';
    },
    changeImage(newImage, description) {
      const mainImage = document.getElementById('mainImage');
      const descriptionElement = document.getElementById('imageDescription');
      if(descriptionElement && this.currentImageSrc !== newImage) {
        mainImage.style.opacity = 0;
        setTimeout(() => {
          mainImage.src = newImage;
          mainImage.style.opacity = 1;
          this.currentImageSrc = newImage;
          descriptionElement.textContent = description;
        }, 300);
      }
    },
    getPrevIndex() {
      if(this.currentCarouselIndex === 0) {
        return this.carouselItems.length - 1;
      }
      return this.currentCarouselIndex - 1;
    },
    getNextIndex() {
      if(this.currentCarouselIndex === this.carouselItems.length - 1) {
        return 0;
      }
      return this.currentCarouselIndex + 1;
    }
  }
};
</script>

<style src="@/assets/css/index.css" scoped>
</style>~/plugins/useIsMobile
