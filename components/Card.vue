<template>
  <div class="bg-white rounded-lg overflow-hidden shadow-lg">
    <img :src="imgSrc" alt="Project image" class="w-full h-64 object-cover">
    <div class="p-4">
      <h3 class="text-xl font-semibold mb-2">{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imgSrc: {
    type: String,
    required: true,
    default: ''
  }
})
</script>
