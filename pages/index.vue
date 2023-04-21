<template>
  <div class="container mx-auto px-4">
          <!-- Loading overlay -->
      <div v-if="isLoading" class="fixed inset-0 bg-gray-900 opacity-75 flex items-center justify-center">
          <div class="text-center">
              <h2 class="text-white text-xl mb-4">Loading... ({{ counterDisplay }})</h2>
              <p class="text-white">Please wait while we process your design</p>
          </div>
      </div>

      <section class="text-center py-8">
      <h1 class="text-4xl font-bold mb-4">
        Get customized t-shirts in two steps.
      </h1>
      <p class="text-lg mb-6">
        Just upload an image or type what design you want and we'll print it for you.
      </p>
      <div>
        <h3 class="mb-4 font-semibold">Step 1: Select a style</h3>
        <div class="md:w-4/5 mx-auto">
        <div class="flex flex-wrap justify-center space-x-4 mb-6">
          <template v-for="(style, index) in styles" :key="index">
            <button
              @click="selectStyle(style)"
              :class="{
                'bg-blue-500 text-white': selectedStyle === style,
                'rounded-full px-4 py-2 border': selectedStyle !== style,
              }"
              class="rounded-full px-6 py-2 m-2"
            >
              {{ style }}
            </button>
          </template>
        </div>
      </div>
      </div>
      <div>
        <h3 class="mb-4 font-semibold">
          Step 2: Describe the design you wish to Print and Upload an image to get stylized options.
        </h3>
        <div class="mb-4">
          <textarea
            v-model="designText"
            class="border-b-2 border-gray-300 focus:border-blue-500 rounded-lg shadow-md px-4 py-3 w-full md:w-4/5"
            placeholder="Enter your design"
            rows="2"
          ></textarea>
        </div>

        <div class="mb-4">
          <input
            type="file"
            @change="onFileChange"
            accept="image/jpeg"
            class="hidden"
            ref="fileInput"
          />
          <button
            v-if="!image"
            @click="$refs.fileInput.click()"
            class="rounded-full p-2 bg-blue-500"
          >
            <img src="~/assets/cloud-upload.svg" class="w-8 h-8" alt="Upload" />
          </button>
          <p v-if="!image" class="text-center mt-1">Upload an image</p>
          <div v-if="isCropped" class="mb-4 flex justify-center">
            <span
              @click="removeImage"
              class="rounded-full p-2 bg-red-500 text-white font-bold cursor-pointer"
            >
              <img src="~/assets/trash.svg" class="w-8 h-8" alt="Remove" />
            </span>
          </div>
          <p v-if="isCropped" class="text-center mt-1">Remove</p>
        </div>

        <div v-if="image" class="w-full flex justify-center">
          <div class="w-4/5 flex flex-col items-center">
            <vue-cropper
              v-if="!isCropped"
              ref="cropper"
              :src="image"
              :aspect-ratio="1/1"
              class="mb-4 h-64"
              :guides="true"
              :view-mode="1"
              :drag-mode="'none'"
              :zoomable="false"
              :rotatable="false"
              :scalable="false"
              :background="false"
            ></vue-cropper>
            <div v-if="!isCropped" class="mt-4">
              <button
                @click="cropImage"
                class="bg-green-500 text-white px-6 py-2 rounded-lg shadow-md"
              >
                Confirm Crop
              </button>
            </div>
          </div>
        </div>
        <p class="text-red-500" v-if="errorMessage">{{ errorMessage }}</p>
        
        <button
          @click="submitForm"
          class="bg-blue-500 text-white px-6 py-2 mt-4 rounded-lg shadow-md"
        >
          Let's make magic!
        </button>
      </div>
    </section>
  </div>
</template>
<script>
import VueCropper from 'vue-cropperjs';
import 'cropperjs/dist/cropper.css';
import { useProductStore } from "~/stores/product";
export default {
  components: {
    VueCropper
  },
  data() {
    return {
        counter: 15,
        isLoading: false,
        productLinks: [],
      selectedStyle: "",
      designText: "",
      image: "",
      isCropped: false,
      errorMessage: "",
      styles: [
        "3d-model",
        "analog-film",
        "anime",
        "cinematic",
        "comic-book",
        "digital-art",
        "enhance",
        "fantasy-art",
        "isometric",
        "line-art",
        "low-poly",
        "modeling-compound",
        "neon-punk",
        "origami",
        "photographic",
        "pixel-art",
        "tile-texture",
      ],
    };
  },
    computed: {
        counterDisplay() {
            return this.counter;
        },
    },
    setup() {
    // Use the product store
    const productStore = useProductStore();

    // Return productStore to access it within the component
    return { productStore };
  },
  methods: {
    cropImage() {
    const croppedImageCanvas = this.$refs.cropper
      .getCroppedCanvas({
        width: 768,
        height: 768,
      });
    this.image = croppedImageCanvas.toDataURL();
    this.isCropped = true;
  },
  removeImage() {
    this.image = "";
    this.isCropped = false;
    this.$refs.fileInput.value = "";
  },
    selectStyle(style) {
      this.selectedStyle = style;
    },
    onFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.image = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    async submitForm() {
      if (!this.image || !this.designText) {
    this.errorMessage = "Please add both text and an image before submitting.";
    return;
  } else {
    this.errorMessage = "";
  }
  this.isLoading = true;
  this.counter = 25;
  const countdown = setInterval(() => {
    this.counter--;
    if (this.counter === 0) {
      clearInterval(countdown);
    }
  }, 1000);

  const response = await fetch("https://instamerch-backend.onrender.com/designs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image: this.image,
      text: this.designText,
      style: this.selectedStyle,
    }),
  });
  const data = await response.json();
  console.log(data);
  this.productLinks = data.main;
  this.isLoading = false;
  clearInterval(countdown);

  // Update productLinks in the store
  this.productStore.setProductLinks(this.productLinks);

  // Navigate to the product page
  this.$router.push({
    name: "product",
  });
},

  },
};
</script>
