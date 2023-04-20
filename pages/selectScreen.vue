<template>
    <div class="container mx-auto px-4">
      <section class="py-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            v-for="image in images"
            :key="image.id"
            class="bg-white rounded shadow p-4"
          >
            <img :src="image.url" :alt="image.description" class="w-full rounded mb-4" />
            <h2 class="text-xl font-bold mb-2">{{ image.title }}</h2>
            <p class="text-lg mb-4">{{ image.description }}</p>
            <button class="bg-blue-500 text-white px-4 py-2 rounded">Button</button>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        images: [
          {
            id: 1,
            url: 'your-image-url-here',
            title: 'Card Title',
            description: 'Card description',
          },
          {
            id: 2,
            url: 'your-image-url-here',
            title: 'Card Title',
            description: 'Card description',
          },
          {
            id: 3,
            url: 'your-image-url-here',
            title: 'Card Title',
            description: 'Card description',
          },
          {
            id: 4,
            url: 'your-image-url-here',
            title: 'Card Title',
            description: 'Card description',
          },
        ],
      };
    },
  };
  </script>