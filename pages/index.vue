<template>
  <div :class="{'menu-open': mobileMenuOpen}">   <!-- Sin usar -->
    <Header id="header1" @update-menu-open="isMenuOpen = $event" />   <!-- Sin Usar -->
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
            <a class="p-2 md:p-5 font-bold hover:bg-orange-800 hover:opacity-75 rounded-md transition duration-500 ease-in-out">{{ nextSlideTitle }}</a> <!-- Asumiendo que usas Font Awesome -->
          </div>
        </div>

        <!-- Botón que dirige a la página correspondiente al slide -->
        <NuxtLink class="slide-title" :class="{ 'animate-slide': animating }" :to="currentSlide.link">
          <h2 class="bg-[rgba(255,255,255,0.9)] sm:bg-[rgba(255,255,255,0.4)] p-2 md:p-5 hover:opacity-75 hover:bg-orange-800 hover:text-gray-200 rounded-md font-extrabold transition duration-500 ease-in-out slide-title2 text-3xl sm:text-4xl md:text-5xl" style="text-align: center;">{{ currentSlide.title }}</h2>
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

    <!-- <PromoSection class="my-8" />   Sección de Promociones, creada como un Componente  -->
    <div class="bottom-content bg-gray-800 mt-8 p-2 md:p-8 flex flex-col md:flex-row items-center">
      <div class="md:w-2/5 p-4">
        <img src="/images/fotos/02.jpg" class="w-full rounded-md brightness-90">
      </div>
      <div class="md:w-1/2 mt-4 md:mt-0 md:ml-8 flex flex-col items-center md:items-start">
        <img src="/images/EUROSTONE_MARMOLES_PIDRAS_300_rv01.png" class="p-4 rounded-md">
        <h2 class="text-xl md:text-2xl font-bold mt-4 md:mt-8 text-white text-center md:text-left">Fábrica de mármoles y piedras</h2>
        <div class="max-w-xl">
          <p class="mt-2 md:mt-4 text-justify text-base md:text-lg leading-loose text-white">
            Explora el corazón de <b>Eurostone</b> en nuestras oficinas centrales. Desde aquí se gestiona toda <b>nuestra operación</b>, donde cada detalle está cuidadosamente diseñado para fomentar la <b>colaboración</b> y la <b>innovación</b>. Sumérgete en un ambiente profesional y acogedor que refleja nuestra dedicación a la <b>calidad</b> y al <b>servicio excepcional</b>.
          </p>
          <div class="flex items-center hover:underline space-x-2 mt-4">
            <div style="background-color: red; width: 20px; height: 20px;"></div>
            <a href="/about" class="text-white">Leer más <font-awesome-icon icon="arrow-up-right-from-square" /></a>
          </div>
        </div>
      </div>
    </div>
    <!-- Texto informativo #2 -->
    <div class="bottom-content2 ">
      <div class="flex flex-col items-center px-4 sm:px-8 md:px-16 lg:px-32">
        <b class="mt-8 lg:text-4xl md:text-2xl lg:px-16 md:px-12 sm:px-8 sm:text-lg uppercase text-white bg-orange-800 border-2 border-blue p-2 rounded-xl">Los acabados</b>
        <h3 class="mt-5 mb-6 text-xs sm:text-sm md:text-base lg:text-xl leading-relaxed text-justify">

          En Eurostone, comprendemos que el acabado de cada pieza de mármol o piedra natural es fundamental para destacar la belleza y el carácter único de cada espacio. Ofrecemos una amplia variedad de acabados que transforman estos materiales naturales en expresiones de arte. Desde acabados pulidos que reflejan la luz, hasta texturas rugosas que resaltan la autenticidad del material, cada uno está diseñado para cumplir con las expectativas estéticas y funcionales de nuestros clientes. Con Eurostone, cada elección de acabado es una oportunidad para enaltecer y personalizar su espacio con elegancia y estilo duraderos.
        </h3>
      </div>

      <!-- Para tamaños de pantalla grande, imagen con enlaces -->
      <div class="relative w-full hidden md:block">
        <div class="flex flex-col items-end">
          <div class="image-container2">
            <img id="mainImage" src="/static/images/fondo2.jpg" alt="Deslizando imagen">
            <p id="imageDescription" class="bg-gray-950 text-white text-lg font-bold pl-4 hidden lg:block"></p>
          </div>
          <div class="translucent-background"></div>
          <div class="links-container2 absolute flex flex-col px-2">
            <a class="link bg-transparent text-white text-xl mt-3 mb-3 font-bold" href="#" @mouseover="changeImage('https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihaxYrcYAdcWDbKDU5eQSAnCsPcUUSaW4V-9sitmybvslH_bpOMaJig3rcKuJu5vtc643GifPYUIzwUpWS_FuqojzwlkarBYiRc=w1920-h945-rw-v1', 'Cocina Moderna - Diseño minimalista y funcional, con líneas limpias y colores neutros.')">En Bruto</a>
            <a class="link bg-transparent text-white text-xl mt-3 mb-3 font-bold" href="#" @mouseover="changeImage('https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihamzN59kam6MkOZGOJAq93eihEtIKrdZN6TzoswuLhiPwpXnM4rZNyK-U3mn-ns9xxworMbRR7xK5TxCokwGYlV0bRAfjthMw=w1920-h945-rw-v1', 'Cocina Minimalista - Espacios despejados y enfoque en la funcionalidad, menos es más.')">Envejecido</a>
            <a class="link bg-transparent text-white text-xl mt-3 mb-3 font-bold" href="#" @mouseover="changeImage('https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpiha3pFooVlxMe8vbZNA38XwyFHlNhug2BZd_H4gkQNITISC_lqD0Vmtx-wa8Z2pgorr0Des-UWHLFjHXTRW_-iOv7IP7z5TOxlM=w1920-h945-rw-v1', 'Cocina Rústica - Madera natural y acabados clásicos')">Pulido</a>
            <a class="link bg-transparent text-white text-xl mt-3 mb-3 font-bold" href="#" @mouseover="changeImage('https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpiha_AvNfiVj1N4mMQ0SDQY5nQFLHrVN8jShxeS76-F_hQaqfJh1lA0NdgRORsgLMPKf02Ue9sYRtG90QCMYGDOGeaK91RcU1IhI=w1920-h945-rw-v1', 'Cocina Contemporánea - Fusión de estilos con tecnología moderna, espaciosa y elegante.')">Apomazado</a>
            <a class="link bg-transparent text-white text-xl mt-3 mb-3 font-bold" href="#" @mouseover="changeImage('https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihYiqmia_qazBWnil_Xbf-mA0MHPeYMtuoOd4M8jcxHUPdgd1kleT9irdG2cMXM--w7wJ49Jsr8RKB2YZZyRvnsB2E26WWzC-I0=w1920-h945-rw-v1', 'Cocina Vintage - Encanto del pasado con toques nostálgicos y detalles retro.')">Abujardado </a>
          </div>
        </div>
      </div>
      <!-- Para tamaños de pantalla pequeña, botones para mostrarlas imágenes de una vez -->
      <div class="relative w-full block md:hidden">
        <div class="flex flex-wrap justify-center items-center">
          <button class="style-button uppercase" @click="setCurrentImage('https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihaxYrcYAdcWDbKDU5eQSAnCsPcUUSaW4V-9sitmybvslH_bpOMaJig3rcKuJu5vtc643GifPYUIzwUpWS_FuqojzwlkarBYiRc=w1920-h945-rw-v1')">En Bruto</button>
          <button class="style-button uppercase" @click="setCurrentImage('https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihamzN59kam6MkOZGOJAq93eihEtIKrdZN6TzoswuLhiPwpXnM4rZNyK-U3mn-ns9xxworMbRR7xK5TxCokwGYlV0bRAfjthMw=w1920-h945-rw-v1')">Envejecido</button>
          <button class="style-button uppercase" @click="setCurrentImage('https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpiha3pFooVlxMe8vbZNA38XwyFHlNhug2BZd_H4gkQNITISC_lqD0Vmtx-wa8Z2pgorr0Des-UWHLFjHXTRW_-iOv7IP7z5TOxlM=w1920-h945-rw-v1')">Pulido</button>
          <button class="style-button uppercase" @click="setCurrentImage('https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpiha_AvNfiVj1N4mMQ0SDQY5nQFLHrVN8jShxeS76-F_hQaqfJh1lA0NdgRORsgLMPKf02Ue9sYRtG90QCMYGDOGeaK91RcU1IhI=w1920-h945-rw-v1')">Amolado</button>
          <button class="style-button uppercase" @click="setCurrentImage('https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihYiqmia_qazBWnil_Xbf-mA0MHPeYMtuoOd4M8jcxHUPdgd1kleT9irdG2cMXM--w7wJ49Jsr8RKB2YZZyRvnsB2E26WWzC-I0=w1920-h945-rw-v1')">Acabado</button>
        </div>
        <div id="imagePreviewContainer" class="image-preview hidden absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
          <div class="relative p-4">
            <button class="close-btn absolute top-20 right-4 p-2" @click="hideImage">
              <font-awesome-icon icon="times" class="text-gray-700 hover:text-gray-900" /> <!-- Icono de cierre -->
            </button>

            <img id="previewImage" src="" alt="Estilo de Cocina" class="max-w-full max-h-[70vh] h-auto object-contain" />
          </div>
        </div>
      </div>

    </div>

    <!-- Imagen larga con enlaces (no activos) -->
    <div class="mt-10">
      <div ref="dragContainer" class="image-container relative overflow-hidden cursor-grab" :class="{'cursor-grabbing': grabbing}" @mousedown="startDragging" @mouseup="stopDragging" @mouseleave="stopDragging" @mousemove="dragImage">
        <!-- Elemento contenedor para la imagen y los iconos -->
        <div class="flex items-center" :style="{ transform: 'translateX(' + imageOffset + 'px)' }">
          <img ref="image" class="drag-image" src="../public/images/fotos/01 VISTA GENERAL FÁBRICA.jpg" @load="calculateImageWidth" />
          <!-- Iconos o enlaces sobre la imagen -->
          <div class="links-container">

            <div v-if="!isMobile">
              <a v-for="link in imageLinks" :key="link.id" class="absolute" :href="link.href" :style="{ top: link.top, left: link.left }" @click.prevent="goToLink(link.href)">
                <div class="flex items-center space-x-2">
                  <div style="background-color: white; width: 20px; height: 20px; border-radius: 50%;">
                    <div class="animate-ping" style="background-color: black; width: 20px; height: 20px; border-radius: 50%;"></div>
                  </div>
                  <div class="opacity-0 bg-black text-white px-2 py-1 rounded-md absolute bottom-0 left-0 transition-opacity duration-300">
                    {{ link.name }} <!-- Aquí puedes mostrar el nombre del mueble -->
                  </div>
                </div>
              </a>
            </div>

            <!-- Enlaces para pantalla pequeña -->
            <div v-if="isMobile">
              <a v-for="link in imageLinksMobile" :key="link.id" class="absolute" :href="link.href" :style="{ top: link.top, left: link.left }">
                <div class="flex items-center space-x-2">
                  <div style="background-color: white; width: 20px; height: 20px; border-radius: 50%;">
                    <div class="animate-ping" style="background-color: black; width: 20px; height: 20px; border-radius: 50%;"></div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center deslizar-text">
        <p class="pl-3 pr-3 bg-custom-orange text-white font-bold">VISTA GENERAL DE EUROSTONE</p>
      </div>
    </div>

    <!-- Texto informativo #3 -->
    <div class="bottom-content3">
      <div class="flex flex-col items-center px-4 sm:px-8 md:px-16 lg:px-32">
        <b class="mt-8 lg:text-4xl md:text-2xl lg:px-16 md:px-12 sm:px-8 sm:text-lg uppercase text-white bg-blue-950 border-2 border-blue p-2 rounded-xl ">¡ Inspírate !</b>
        <h3 class="mt-5 mb-6 text-xs sm:text-sm md:text-base lg:text-xl leading-relaxed text-justify">
          A lo largo de nuestra extensa <b>historia</b>, hemos llevado a cabo diversos tipos de <b>proyectos</b>. Aunque nos especializamos en
          cocinas, también hemos completado con éxito <b>diseños para baños</b>, muebles de salón, lavanderías y otros espacios.
          A continuación, te presentamos algunos de <b>nuestros proyectos destacados.</b>
        </h3>
      </div>
      <ImageSlider />
      <div>
        <div class="carousel-container">
          <!-- Slide anterior -->
          <div v-if="carouselItems[getPrevIndex()]" class="carousel-slide">
            <img :src="carouselItems[getPrevIndex()].url_imagen" class="carousel-image" alt="Current Slide">
            <p class="carousel-description">{{ carouselItems[getPrevIndex()].descripcion }}</p>
          </div>
          <!-- Slide actual -->
          <div v-if="carouselItems[currentCarouselIndex]" class="carousel-slide">
            <img :src="carouselItems[currentCarouselIndex].url_imagen" class="carousel-image" alt="Current Slide">
            <p class="carousel-description">{{ carouselItems[currentCarouselIndex].descripcion }}</p>
          </div>

          <!-- Slide siguiente -->
          <div v-if="carouselItems[getNextIndex()]" class="carousel-slide">
            <img :src="carouselItems[getNextIndex()].url_imagen" class="carousel-image" alt="Next Slide">
            <p class="carousel-description">{{ carouselItems[getNextIndex()].descripcion }}</p>
          </div>
        </div>

        <!-- Botones de navegación -->
        <div class="carousel-navigation">
          <button @click="prevSlide">&#10094;</button>
          <button @click="nextSlide">&#10095;</button>
        </div>
      </div>
      <p class="text-center mb-8"><button class="video-button my-8 uppercase"><a href="/proyectos">Nuestros proyectos</a></button></p>
    </div>

    <!-- <div class="video-container">
      <video autoplay loop muted playsinline class="background-video">
        <source src="https://database.electrolink.es/database_test/recortes.webm" type="video/webm">
        Tu navegador no soporta videos HTML5.
      </video>
      <div class="overlay-text-video">
        <p>Reúnete con un especialista en diseño de interiores</p>
        <a href="/cocinas" class="video-button">Pedir cita</a>
      </div>
    </div> -->

    <div class="flex flex-row bg-gray-700 p-12 m-2">
      <div class="flex items-center justify-center">
        <div class="flex-1 pr-8">
          <p class="text-black w-4/5 text-lg bg-gray-200 px-6 py-4 text-justify rounded-lg shadow-xl">En Eurostone, nuestros cimientos están arraigados en una tradición
            de más de medio siglo. Durante más de <b>50 años</b>, hemos sido <b>pioneros</b> en la industria de la
            <b>piedra natural</b>, llevando la <b>excelencia</b> y la <b>innovación</b> a cada paso del camino. Desde nuestros
            humildes comienzos hasta nuestra posición actual como <b>líderes del mercado</b>, cada día
            nos esforzamos por <b>superar</b> las <b>expectativas</b> y continuar siendo un referente en <b>calidad</b> y <b>servicio</b>.
          </p>
        </div>
      </div>

      <!-- <img src="/public/images/fotos/14 CORTABLOQUES.jpg" alt="Descripción de la imagen" class="h-auto max-h-80" /> -->

      <div class="counter-container border-l-4 border-white pl-8 w-2/3 flex flex-row my-4">
        <p class="text-white text-4xl font-bold my-8">+</p>
        <p ref="counter" class="counter-number text-8xl font-bold text-white">0</p>
        <p class="counter-text text-xl text-white mt-12">años de experiencia</p>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
const isMenuOpen = ref(false);

export default {
  data() {
    return {
      // constantes y variables
      isMobile: false,
      currentSlideIndex: 0,
      animating: false,
      grabbing: false,
      nextSlideTitle: 'CANTERAS',
      // Carrusel inicial
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
      carouselItems: []
    };
  },
  computed: {

    currentSlide() { // Devuelve el slide actual
      return this.slides[this.currentSlideIndex];
    },
    wrapperStyle() { // Devuelve el estilo del div que contiene el carrusel
      return {
        transform: `translateX(-${this.currentSlideIndex * 100}vw)`
      };
    }
  },
  mounted() { // Cuando el componente se monta
    this.updateHead();
    this.initIntersectionObserver();
    this.updateMobileStatus();
    this.fetchCarouselItems();
    window.addEventListener('resize', this.updateMobileStatus);
    window.addEventListener('resize', this.calculateImageWidth);
    window.addEventListener('scroll', this.handleScroll);

    // Eventos de touch
    const dragContainer = this.$refs.dragContainer;
    dragContainer.addEventListener('touchstart', this.startDragging);
    dragContainer.addEventListener('touchmove', this.dragImage);
    dragContainer.addEventListener('touchend', this.stopDragging);
  },

  beforeUnmount() { // Cuando el componente se desmonta
    window.removeEventListener('resize', this.updateMobileStatus);
    window.removeEventListener('resize', this.calculateImageWidth);
    window.removeEventListener('scroll', this.handleScroll);

    const dragContainer = this.$refs.dragContainer; // Quita los eventos de touch
    if(dragContainer) {
      dragContainer.removeEventListener('touchstart', this.startDragging);
      dragContainer.removeEventListener('touchmove', this.dragImage);
      dragContainer.removeEventListener('touchend', this.stopDragging);
    }
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
    fetchCarouselItems() { // Obtiene los datos del carrusel
      fetch('https://database.electrolink.es/database_test/server.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
        body: new URLSearchParams({ getCambiosCarrusel: 'true' })
      })
        .then((response) => {
          if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log('Carousel data loaded:', data); // Verifica que los datos estén bien formateados y completos
          if(data && Array.isArray(data) && data.length > 0) {
            this.carouselItems = data;
          } else {
            console.error('No data or incorrect format received:', data);
          }
        })
        .catch((error) => {
          console.error('Error fetching carousel items:', error);
        });
    },
    updateMobileStatus() { // Actualiza el estado del carrusel en móvil
      this.isMobile = window.innerWidth <= 768;
    },
    updateHead() {
      // Page title
      document.title = 'Mármoles y Piedras - Eurostone';

      // Description meta tag
      const descriptionContent = 'Eurostone, fábrica de mármoles y piedras en Novelda, Alicante.';

      let descriptionMetaTag = document.querySelector('meta[name="description"]');
      if(!descriptionMetaTag) {
        descriptionMetaTag = document.createElement('meta');
        descriptionMetaTag.setAttribute('name', 'description');
        document.head.appendChild(descriptionMetaTag);
      }

      // Description meta tag
      descriptionMetaTag.setAttribute('content', descriptionContent);
    },

    goToNextSlide() { // Avanza a la siguiente slide
      this.animating = true;

      if(this.currentSlideIndex < this.slides.length - 1) {
        this.currentSlideIndex += 1;
      } else {
        this.currentSlideIndex = 0; // Vuelve al inicio si está en el último slide
      }
      const nextSlideIndex = this.currentSlideIndex >= this.slides.length - 1 ? 0 : this.currentSlideIndex + 1;
      // this.nextSlideImg = this.slides[nextSlideIndex].imageSrc; Esto mostraba una 'preview'
      this.nextSlideTitle = this.slides[nextSlideIndex].title;

      setTimeout(() => {
        this.animating = false; // Restablecer el estado de animación
      }, 1000);
    },
    goToSlide(index) { // Avanza a una slide específica
      this.animating = true;
      if(index > this.currentSlideIndex) {
        this.direction = 'left';
      } else {
        this.direction = 'right';
      }
      this.currentSlideIndex = index;
      const nextSlideIndex = this.currentSlideIndex >= this.slides.length - 1 ? 0 : this.currentSlideIndex + 1;
      // this.nextSlideImg = this.slides[nextSlideIndex].imageSrc;
      this.nextSlideTitle = this.slides[nextSlideIndex].title;

      setTimeout(() => {
        this.animating = false; // Restablecer el estado de animación
      }, 600);
    },
    handleScroll() { // Maneja el evento de scroll
      const bottomContent = document.querySelector('.bottom-content');
      if(bottomContent) {
        const windowHeight = window.innerHeight;
        const scrollPosition = window.scrollY;
        const triggerPoint = bottomContent.offsetTop - (windowHeight / 2);

        if(scrollPosition > triggerPoint) {
          bottomContent.classList.add('slide-in');
        }
      }

      const bottomContent2 = document.querySelector('.bottom-content2');
      if(bottomContent2) {
        const windowHeight = window.innerHeight;
        const scrollPosition = window.scrollY;
        const triggerPoint = bottomContent2.offsetTop - (windowHeight / 2);

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
        const triggerPoint = bottomContent3.offsetTop - (windowHeight / 2);

        if(scrollPosition > triggerPoint) {
          bottomContent3.classList.add('slide-in');
        }
      }

      const bottomContent_md = document.querySelector('.bottom-content_md');
      if(bottomContent_md) {
        const windowHeight = window.innerHeight;
        const scrollPosition = window.scrollY;
        const triggerPoint = bottomContent_md.offsetTop - (windowHeight / 2);

        if(scrollPosition > triggerPoint) {
          bottomContent_md.classList.add('slide-in');
        }
      }

      const bottomContent2_md = document.querySelector('.bottom-content2_md');
      if(bottomContent2_md) {
        const windowHeight = window.innerHeight;
        const scrollPosition = window.scrollY;
        const triggerPoint = bottomContent2_md.offsetTop - (windowHeight / 2);

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
    startDragging(event) {
    // Comienza a arrastrar con soporte tanto para mouse como para toques en pantalla
      this.isDragging = true;
      // Usa 'touches' para eventos táctiles
      this.startX = event.type.includes('touch') ? event.touches[0].clientX : event.clientX;
      this.grabbing = true;
      event.preventDefault(); // Prevenir desplazamiento por defecto en dispositivos táctiles
    },
    stopDragging() {
      // Detiene el arrastre
      this.isDragging = false;
      this.grabbing = false;
    },

    // Método para visualizar la imagen de las cocinas en dispositivos móviles, en la seccion links-container2
    setCurrentImage(imageUrl) {
      const imgElement = document.getElementById('previewImage');
      const container = document.getElementById('imagePreviewContainer');
      imgElement.src = imageUrl;
      container.classList.add('show'); // Muestra la imagen con el contenedor
    },
    hideImage() {
      const container = document.getElementById('imagePreviewContainer');
      container.classList.remove('show'); // Oculta el contenedor
    },
    dragImage(event) {
      if(this.isDragging) {
        // Calcula la diferencia de movimiento para mouse o eventos táctiles
        const xDiff = event.type.includes('touch') ? event.touches[0].clientX - this.startX : event.clientX - this.startX;
        const newOffset = this.imageOffset + xDiff;

        const maxOffset = 0;
        const minOffset = -this.imageWidth + this.$el.offsetWidth;
        this.imageOffset = Math.max(Math.min(newOffset, maxOffset), minOffset);

        // Actualizar startX para el próximo movimiento
        this.startX = event.type.includes('touch') ? event.touches[0].clientX : event.clientX;
        event.preventDefault();
      }
    },
    // Método para visualizar la imagen de las cocinas en dispositivos móviles, en la seccion links-container2
    goToLink(href) {
      window.location.href = href;
    },
    nextSlide() {
      this.animating = true;
      this.currentCarouselIndex = (this.currentCarouselIndex + 1) % this.carouselItems.length;
      setTimeout(() => {
        this.animating = false;
      }, 500); // Tiempo de la transición en milisegundos
    },

    prevSlide() {
      this.animating = true;
      this.currentCarouselIndex = (this.currentCarouselIndex - 1 + this.carouselItems.length) % this.carouselItems.length;
      setTimeout(() => {
        this.animating = false;
      }, 500);
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
    // Método para obtener el índice del elemento anterior, y del siguiente
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
