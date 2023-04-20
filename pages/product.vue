<template>
  <LoadingBar :visible="isLoading" />
  <div v-show="!isLoading" class="container mx-auto w-4/5">
    <section class="py-8">
      <div class="flex flex-col md:flex-row items-center">
        <div class="w-full md:w-1/2 mb-8 md:mb-0 md:mr-8">
          <h1 class="text-4xl font-bold mb-4">Product Title</h1>
          <p class="text-lg mb-4">$99.99</p>
          <div class="flex space-x-4 mb-8">
            <button
              @click="selectedSize = 'XS'"
              :class="['rounded-full px-4 py-2 border', selectedSize === 'XS' ? 'bg-blue-500 text-white' : '']"
            >
              XS
            </button>
            <button
              @click="selectedSize = 'S'"
              :class="['rounded-full px-4 py-2 border', selectedSize === 'S' ? 'bg-blue-500 text-white' : '']"
            >
              S
            </button>
            <button
              @click="selectedSize = 'M'"
              :class="['rounded-full px-4 py-2 border', selectedSize === 'M' ? 'bg-blue-500 text-white' : '']"
            >
              M
            </button>
            <button
              @click="selectedSize = 'L'"
              :class="['rounded-full px-4 py-2 border', selectedSize === 'L' ? 'bg-blue-500 text-white' : '']"
            >
              L
            </button>
            <button
              @click="selectedSize = 'XL'"
              :class="['rounded-full px-4 py-2 border', selectedSize === 'XL' ? 'bg-blue-500 text-white' : '']"
            >
              XL
            </button>
            <button
              @click="selectedSize = 'XXL'"
              :class="['rounded-full px-4 py-2 border', selectedSize === 'XXL' ? 'bg-blue-500 text-white' : '']"
            >
              XXL
            </button>
          </div>
          <h2 class="text-2xl font-bold mb-4">You might also like</h2>
          <div class="flex space-x-4 overflow-x-auto">
            <div class="bg-white rounded shadow p-4 w-64">
              <img src="your-image-url-here" alt="Image description" class="w-full rounded mb-4" />
              <h3 class="text-lg font-bold mb-2">$49.99</h3>
            </div>
            <div class="bg-white rounded shadow p-4 w-64">
              <img src="your-image-url-here" alt="Image description" class="w-full rounded mb-4" />
              <h3 class="text-lg font-bold mb-2">$59.99</h3>
            </div>
            <div class="bg-white rounded shadow p-4 w-64">
              <img src="your-image-url-here" alt="Image description" class="w-full rounded mb-4" />
              <h3 class="text-lg font-bold mb-2">$69.99</h3>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2">
          <img src="your-image-url-here" alt="Image description" class="w-full rounded" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import LoadingBar from "@/components/LoadingBar.vue";
export default {
  components: {
    LoadingBar,
  },
  data() {
    return {
      selectedSize: null,
      isLoading: true,
    };
  },
};
</script>