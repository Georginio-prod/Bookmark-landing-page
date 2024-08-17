<template>
  <div>
    <nav :class="isMenuOpen ? 'bg-slate-600 opacity-95' : 'bg-white'" class="max-w-md w-full h-auto flex flex-col items-center px-8 pt-10 mx-auto relative
            max-w-screen-xl xl:h-auto xl:flex xl:items-center xl:pt-12 xl:px-40">

      <div class="flex justify-between items-center w-full">
        <!-- Logo positioned to the left -->
        <img :src="isMenuOpen ? '/public/Group 9.png' : '/public/logo-bookmark.svg'" alt="logo" class="">

        <!-- Button positioned to the right -->
        <button @click="toggleMenu" class="xl:hidden lg:hidden">
          <img :src="isMenuOpen ? '/public/icon-close.svg' : '/public/icon-hamburger.svg'" alt="icon">
        </button>

        <ul class="xl:flex gap-3 lg:flex hidden text-tcol items-center tracking-widest text-sm cursor-pointer">
          <li class="pr-10 hover:text-btn">
            FEATURES
          </li>
          <li class="pr-10 hover:text-btn">
            PRICING
          </li>
          <li class="pr-6 hover:text-btn">
            CONTACT
          </li>
          <button
            class="text-white bg-btn py-3 px-8 rounded-lg shadow-md hover:bg-white hover:text-btn hover:border-2 hover:border-btn">
            LOGIN
          </button>
        </ul>

      </div>

      <!-- Menu that appears when isMenuOpen is true -->
      <div v-if="isMenuOpen" class="menu w-full max-w-md mx-auto pt-10 text-white tracking-widest">
        <ul class="flex flex-col gap-6 border-t border-ligne border-opacity-15 pt-6 text-center">
          <li class="border-b border-ligne w-full pb-3 border-opacity-15">
            <a href="#">FEATURES</a>
          </li>
          <li class="border-b border-ligne w-full pb-3 border-opacity-15">
            <a href="#">PRICING</a>
          </li>
          <li class="w-full pb-3 border-b border-ligne border-opacity-15">
            <a href="#">CONTACT</a>
          </li>
          <li class="w-full text-center pt-4">
            <button class=" border w-full py-2 mb-64 rounded-lg">
              LOGIN
            </button>
          </li>
        </ul>
        <div class="flex items-center justify-center gap-10 pb-11">
          <img src="/public/icon-facebook.svg" alt="fac">
          <img src="/public/icon-twitter.svg" alt="twi">
        </div>
      </div>


    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>
