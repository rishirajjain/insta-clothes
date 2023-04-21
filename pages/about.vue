<template>
  <div class="container mx-auto px-4">
    <section class="py-12">
      <h1 class="text-5xl font-bold mb-12 text-center">About Us</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div class="flex flex-col justify-center items-center bg-white rounded-lg shadow-lg p-8">
          <img src="~/assets/mission.gif" alt="Mission Image" class="w-1/2">
          <h2 class="text-3xl font-bold mb-4">Our Mission</h2>
          <p class="text-lg mb-4 text-center">At our company, we're passionate about helping people express their unique personalities through customized t-shirts. Our mission is to use AI technology to make it easy and fun for anyone to create their own custom designs and wear them with pride.</p>
        </div>
        <div class="flex flex-col justify-center items-center bg-white rounded-lg shadow-lg p-8">
          <img src="~/assets/process.gif" alt="Process Image" class=" w-1/2">
          <h2 class="text-3xl font-bold mb-4">Our Process</h2>
          <p class="text-lg mb-4 text-center">We use the latest AI technology to make the process of creating your own custom t-shirt as simple and fast as possible. All you need to do is choose a design from our library or upload your own image, customize the color, style, and size of your shirt, and we'll take care of the rest. You can expect high-quality, comfortable, and stylish t-shirts delivered right to your doorstep.</p>
        </div>
        <div class="flex flex-col justify-center items-center bg-white rounded-lg shadow-lg p-8">
          <img src="~/assets/team.gif" alt="Team Image" class=" w-1/2">
          <h2 class="text-3xl font-bold mb-4">Our Team</h2>
          <p class="text-lg mb-4 text-center">Our team is made up of dedicated and creative designers, developers, and entrepreneurs who are passionate about making personalized t-shirts accessible to everyone. We're constantly pushing the boundaries of AI technology to bring you the best possible experience, and we're always here to help you with any questions or concerns you may have.</p>
        </div>
        <div class="flex flex-col justify-center items-center bg-white rounded-lg shadow-lg p-8">
          <img src="~/assets/get-started.gif" alt="Get Started Image" class=" w-1/2">
          <h2 class="text-3xl font-bold mb-4">Get Started Today</h2>
          <p class="text-lg mb-4 text-center">Ready to create your own custom t-shirt? It's easy! Just choose a design or upload your own image, customize your shirt, and place your order. We'll take care of the rest, and your new shirt will be on its way to you in no time.</p>
          <a href="/" class="bg-blue-500 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">Get Started</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  // Add any relevant scripts here
};
</script>

<style>
/* Add any custom styles here */
img {
  max-width: 100%;
}
h2 {
  color: #1a202c;
}
p {
  color: #4a5568;
}
a {
  font-size: 1.2rem;
}
</style>

