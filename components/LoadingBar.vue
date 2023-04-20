<template>
  <div v-if="visible" class="fixed inset-0 flex items-center justify-center z-50">
    <div class="w-full max-w-md mx-auto bg-white p-4 rounded shadow">
      <div class="relative w-full h-6 bg-gray-200 rounded">
        <div
          class="absolute top-0 left-0 h-full rounded"
          :style="{
            width: `${percentage}%`,
            backgroundImage: 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)',
          }"
        ></div>
      </div>
      <p class="mt-2 text-center">{{ percentage }}%</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    percentage: {
      type: Number,
      default: 0,
    },
  },
};
</script>
