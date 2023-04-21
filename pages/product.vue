<template>
  <LoadingBar :visible="isLoading" />
  <div v-show="!isLoading" class="container mx-auto w-4/5">
    <section class="py-8">
      <div class="flex flex-col md:flex-row items-center">
        <div class="w-full md:w-1/2 mb-8 md:mb-0 md:mr-8">
          <h1 class="text-4xl font-bold mb-4">Customizable Unisex Classic T-Shirt</h1>
          <!-- 4. Add a description below the title. -->
          <div class="bg-white max-w-md">
      <h2 class="font-bold text-2xl mb-4">Product Features</h2>
      <ul class="list-disc list-inside">
        <li class="mb-2">Classic unisex design</li>
        <li class="mb-2">Comfortable fit</li>
        <li class="mb-2">Durable material</li>
        <li class="mb-2">Customizable</li>
        <li>Ideal for various occasions</li>
      </ul>
    </div>




          <p class=" text-5xl mt-8 mb-8 font-bold text-green-600">$19.99</p>
          <!-- 1. Add title for the size selector. -->
          <h2 class="text-xl font-bold mb-4">Size</h2>
          <div class="flex space-x-4 mb-8">
            <button
              v-for="(size, index) in sizes"
              :key="index"
              @click="selectedSize = size"
              :class="['rounded-full px-4 py-2 border', selectedSize === size ? 'bg-blue-500 text-white' : '']"
            >
              {{ size }}
            </button>
          </div>
          <!-- 2. Add a selector with title color - 2 options here are black & white. -->
          <h2 class="text-xl font-bold mb-4">Color</h2>
          <div class="flex space-x-4 mb-8">
            <button
              v-for="(color, index) in colors"
              :key="index"
              @click="selectedColor = color"
              :class="['rounded-full px-4 py-2 border', selectedColor === color ? 'bg-blue-500 text-white' : '']"
            >
              {{ color }}
            </button>
          </div>
          <!-- 3. Add a buy now button. -->
          <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mb-4">
            Buy Now
          </button>
        </div>
        <div class="w-full md:w-1/2">
          <img :src="activeImage" alt="Main product image" class="w-full rounded mb-4" />
          <div class="flex space-x-4 overflow-x-auto">
            <img
              v-for="(image, index) in productLinks"
              :key="index"
              :src="image"
              alt="Product image thumbnail"
              @click="setActiveImage(image)"
              class="w-20 h-20 rounded cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import LoadingBar from "@/components/LoadingBar.vue";
import { useProductStore } from "@/stores/product";

export default {
  components: {
    LoadingBar,
  },
  computed: {
    productLinks() {
      const productStore = useProductStore();
      return productStore.productLinks;
    },
  },
  data() {
    return {
      selectedSize: null,
      selectedColor: null, // Add selectedColor here
      isLoading: false,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'White'], // Add colors here
      activeImage: null,
    };
  },
  mounted() {
    const productStore = useProductStore();
    if (!productStore.productLinks) {
      // Navigate back to index page if productLinks is not available
      this.$router.push({ name: 'index' });
    } else {
      // Set activeImage to the first image in productLinks
      this.activeImage = productStore.productLinks[0];
    }
  },
  methods: {
    // Add this method to update the activeImage
    setActiveImage(image) {
      this.activeImage = image;
    },
  },
};
</script>
