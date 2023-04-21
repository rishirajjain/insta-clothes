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
              v-for="(size, index) in sizes"
              :key="index"
              @click="selectedSize = size"
              :class="['rounded-full px-4 py-2 border', selectedSize === size ? 'bg-blue-500 text-white' : '']"
            >
              {{ size }}
            </button>
          </div>
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

export default {
  components: {
    LoadingBar,
  },
  computed: {
    productLinks() {
      return this.$data.productLinks;
    },
  },
  data() {
    return {
      selectedSize: null,
      isLoading: false,
      productLinks: null,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      activeImage: "",
    };
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      // Parse the productLinks data from the route's query parameters
      vm.productLinks = JSON.parse(to.query.productLinks);
      vm.activeImage = vm.productLinks[0];
    });
  },
  beforeRouteUpdate(to, from, next) {
    // Parse the productLinks data from the route's query parameters
    this.productLinks = JSON.parse(to.query.productLinks);
    this.activeImage = this.productLinks[0];
    next();
  },
  methods: {
    setActiveImage(image) {
      this.activeImage = image;
    },
  },
};
</script>
