<template>
    <LoadingBar :visible="isLoading" />
    <div v-show="!isLoading" class="container mx-auto px-4 lg:px-0">
        <section class="py-8">
            <div class="flex flex-col lg:flex-row items-center">
                <div class="w-full lg:w-1/2 lg:mr-8 mb-8 lg:mb-0">
                    <img :src="activeImage" alt="Main product image" class="w-full rounded-lg mb-4" />
                    <div class="flex justify-center space-x-4 overflow-x-auto">
                        <img
                            v-for="(image, index) in productLinks"
                            :key="index"
                            :src="image"
                            alt="Product image thumbnail"
                            @click="setActiveImage(image)"
                            class="w-16 h-16 rounded-lg cursor-pointer border-2 border-gray-200 hover:border-blue-500"
                        />
                    </div>
                </div>
                <div class="w-full lg:w-1/2">
                    <h1 class="text-4xl font-bold mb-4">Customizable Unisex Classic T-Shirt</h1>
                    <div class="bg-white rounded-md shadow-md px-6 py-4 mb-6">
                        <h2 class="font-bold text-xl mb-2">Product Features</h2>
                        <ul class="list-disc list-inside">
                            <li class="mb-2">Classic unisex design</li>
                            <li class="mb-2">Comfortable fit</li>
                            <li class="mb-2">Durable material</li>
                            <li class="mb-2">Customizable</li>
                            <li>Ideal for various occasions</li>
                        </ul>
                    </div>
                    <p class="text-5xl mt-0 mb-8 font-bold text-green-600">$19.99</p>
                    <h2 class="font-bold text-xl mb-2">Size</h2>
                    <div class="flex space-x-4 mb-4">
                        <button
                            v-for="(size, index) in sizes"
                            :key="index"
                            @click="selectedSize = size"
                            :class="['text-sm rounded-full py-2 px-6 border', selectedSize === size ? 'bg-blue-500 text-white' : '']"
                        >
                            {{ size }}
                        </button>
                    </div>
                    <h2 class="font-bold text-xl mb-2">Color</h2>
                    <div class="flex space-x-4 mb-4">
                        <button
                            v-for="(color, index) in colors"
                            :key="index"
                            @click="selectedColor = color"
                            :class="['text-sm rounded-full py-2 px-6 border', selectedColor === color ? 'bg-blue-500 text-white' : '']"
                        >
                            {{ color }}
                        </button>
                    </div>
                    <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full mb-4 block w-full lg:w-auto">
                        Buy Now
                    </button>
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
