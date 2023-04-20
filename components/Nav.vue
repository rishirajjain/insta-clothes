<template>
  <nav
    class="text-base py-8 w-full"
    :class="{ 'show-mobile-menu': showMobileMenu }"
  >
    <div class="hidden md:flex justify-center">
      <div class="container flex justify-between w-4/5">
        <div class="flex space-x-4 justify-center items-center ">
          <nuxt-link to="/" class="logoStyle">
            <span class="name font-bold text-xl md:text-4xl">InstaMerch</span>
          </nuxt-link>
        </div>
        <div class="flex justify-center">
          <div class="flex space-x-12 justify-center items-center px-10">
            <nuxt-link
              to="/"
              exact
              :class="{ active: $route.path === '/' }"
            >Home</nuxt-link>
            <nuxt-link
              to="/product"
              :class="{ active: $route.path === '/product' }"
            >Products</nuxt-link>
            <nuxt-link
              to="/about"
              :class="{ active: $route.path === '/about' }"
            >About</nuxt-link>
          </div>
          <button class="cart-icon">🛒</button>
        </div>
      </div>
    </div>
    <!-- Mobile Nav -->
    <div class="flex justify-center md:hidden">
      <div class="container flex justify-between w-4/5">
        <button @click="toggleMobileMenu" class="hamburger-menu">☰</button>
        <div class="flex space-x-4 justify-center items-center ">
          <nuxt-link to="/" class="logoStyle">
            <span class="name font-bold text-xl md:text-4xl">InstaMerch</span>
          </nuxt-link>
        </div>
        <button class="cart-icon">🛒</button>
      </div>
    </div>
    <!-- Mobile Menu -->
    <div class="mobile-menu">
      <ul class="flex flex-col items-center space-y-4 py-4">
        <li><nuxt-link to="/" exact>Home</nuxt-link></li>
        <li><nuxt-link to="/product">Products</nuxt-link></li>
        <li><nuxt-link to="/about">About</nuxt-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showMobileMenu: false,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
  },
};
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Mrs+Saint+Delafield&family=Work+Sans:wght@900&display=swap');

.name{
  font-family: 'Mrs Saint Delafield', cursive;
}
.active {
  /* Add your styles for the selected state here */
  color: blue;
}
.mobile-menu {
  display: none;
}
.show-mobile-menu .mobile-menu {
  display: block;
}
</style>