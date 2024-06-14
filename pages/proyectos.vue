<template>
  <div class="flex flex-col min-h-screen bg-gray-100">

    <Header class="sticky top-0 left-0 w-full bg-white bg-opacity-95 shadow-lg p-2.5 z-50" />
    <SubirBoton />
    <AdminButton />
    <main class="flex-grow">
      <!-- Sección de Proyectos -->
      <section class="text-center py-12 bg-white">
        <h1 class="text-4xl font-bold text-gray-800">NUESTROS PROYECTOS</h1>
        <p class="text-lg mt-3 mb-6 text-gray-600">Explora algunos de nuestros trabajos más destacados.</p>
        <div class="container mx-auto px-4 py-10">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card
              v-for="project in projects"
              :key="project.id"
              :title="project.title"
              :description="project.description"
              :imgSrc="project.imgSrc"
              class="transform hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
        </div>
      </section>

      <!-- Sección de Testimonios -->
      <section class="bg-gray-50 py-12">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center text-gray-800">Testimonios</h2>
          <div class="flex flex-wrap justify-center mt-8">
            <div v-for="testimonial in testimonials" :key="testimonial.id" class="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-6 m-4">
              <div class="font-bold text-xl mb-2 text-gray-800">{{ testimonial.author }}</div>
              <p class="text-gray-700 text-base italic">
                "{{ testimonial.comment }}"
              </p>
              <p class="text-gray-600 text-xs mt-4">
                - {{ testimonial.position }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Sección de Preguntas Frecuentes -->
      <section class="bg-white py-12">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center text-gray-800">Preguntas Frecuentes</h2>
          <div class="mt-8">
            <div v-for="faq in faqs" :key="faq.id" class="cursor-pointer p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors duration-300 ease-in-out" @click="toggleFAQ(faq.id)">
              <h4 class="font-bold text-lg text-gray-800">{{ faq.question }}</h4>
              <p v-if="faq.isOpen" class="text-gray-600 mt-2">{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script setup>

// Títulos y descripciones
useHead({
  title: 'Impresiónate con nuestros proyectos - Megahogar',
  meta: [
    {
      name: 'description',
      content: 'Encuentra las localizaciones de nuestras tiendas Megahogar. Visítanos en Babel y Vistahermosa para descubrir los mejores productos para tu hogar.'
    },
    {
      property: 'og:title',
      content: 'Impresiónate con nuestros proyectos - Megahogar'
    },
    {
      property: 'og:description',
      content: 'Encuentra las localizaciones de nuestras tiendas Megahogar. Visítanos en Babel y Vistahermosa para descubrir los mejores productos para tu hogar.'
    },
    {
      property: 'og:image',
      content: 'https://example.com/path/to/your/image.jpg'
    }
  ]
});

// Proyectos
const projects = ref([
  { id: 1, title: 'Proyecto de Cocina Moderna', description: 'Renovación completa de una cocina.', imgSrc: 'https://database.electrolink.es/database_test/img/rec/Recursos_Web_cocina/cocina-abierta.jpg' },
  { id: 2, title: 'Reforma de Baño', description: 'Transformación de un baño con acabados de lujo.', imgSrc: 'https://database.electrolink.es/database_test/img/rec/Recursos_Web_cocina/r-architecture-P_0tnQ8hb70-unsplash.jpg' },
  { id: 3, title: 'Construcción de Armario', description: 'Conversión de lo que era un simple cuarto a un armario muy amplio y completo', imgSrc: 'https://database.electrolink.es/database_test/img/rec/Recursos_Web_cocina/3d-rendering-luxury-scandinavian-wood-walk-closet-with-wardrobe-make-up-table.jpg' }

]);

// Testimonios
const testimonials = ref([
  { id: 1, author: 'Juan', position: 'CEO de Inversiones', comment: 'El proyecto fue ejecutado impecablemente y superó todas nuestras expectativas. Sin duda elegiremos Megahogar' },
  { id: 2, author: 'Rocío', position: 'Directora de Marketing', comment: 'Increíble la atención al detalle y profesionalidad en todo el proyecto!!' },
  { id: 3, author: 'Cristina', position: 'Ingeniera Civil ', comment: 'La verdad que me lo hicieron por sorpesa, pero quedé muy impresionada, amo mi armario nuevo.' }

]);

// Preguntas Frecuentes
const faqs = ref([
  { id: 1, question: '¿Qué tipo de proyectos manejan?', answer: 'Nos especializamos en renovaciones residenciales y comerciales. Desde la reforma de tu baño hasta la cocina en menos de un año. Consulta lo que quieras en nuestra web', isOpen: false },
  { id: 2, question: '¿Cómo se inicia un proyecto?', answer: 'Comenzamos con una consulta para entender tus necesidades y expectativas. Si deseas tener una, pide cita en cualquier momento o ven a visitarnos en nuestras tiendas', isOpen: false }
]);

// Funciones
const toggleFAQ = (id) => {
  const faq = faqs.value.find(f => f.id === id);
  if(faq) {
    faq.isOpen = !faq.isOpen;
  }
};
</script>

<style scoped>
main {
  background-color: #f7f9fc;
}
</style>
