<template>
  <div class="flex flex-col-reverse md:flex-row justify-center items-center mt-20 md:mt-40 w-full">
    <!-- Section Texte -->
    <div class="flex flex-col items-center md:items-start w-full md:w-1/3 text-tcol md:-translate-y-1/3 px-6 md:px-0">
      <p class="text-3xl md:text-5xl font-medium text-center md:text-left">
        A Simple Bookmark Manager
      </p>
      <h2 class="pt-4 md:pt-6 text-base md:text-lg text-center md:text-left">
        A clean and simple interface to organize your favourite websites. Open a
        new browser tab and see your sites load instantly. Try it for free.
      </h2>
      <div class="flex xl:flex-row flex-row gap-4 pt-6 md:pt-8 text-sm font-medium justify-center md:justify-start">
        <button class="py-2 px-6 bg-btn1 text-white rounded-md shadow-lg">
          Get it on Chrome
        </button>
        <button class="py-2 px-6 bg-btn2 text-menubg text-opacity-75 rounded-md shadow-lg">
          Get it on Firefox
        </button>
      </div>
    </div>

    <!-- Section Image -->
    <!-- <div class="relative w-full md:w-auto">
      <img src="/public/Rectangle.png" alt="back" class="w-full md:w-auto transform md:translate-x-48 relative" />
      <div class="absolute inset-0 flex justify-center md:justify-start">
        <img src="/public/illustration-hero.svg" alt="screen"
          class="transform -translate-y-24 md:translate-x-10 w-4/5 md:w-auto" />
      </div>
    </div> -->

    <!-- Section pour les écrans xl et lg -->
<div class="relative lg:w-auto">
  <img src="/public/Rectangle.png" alt="back" class="lg:w-auto transform lg:translate-x-48 relative lg:block hidden " />
  <div class="absolute inset-0 flex justify-center lg:justify-start">
    <img src="/public/illustration-hero.svg" alt="screen" class="transform -translate-y-24 lg:translate-x-10 w-4/5 lg:w-auto" />
  </div>
</div>

<!-- Section pour les écrans inférieurs à lg (md et sm) -->
<div class="relative lg:hidden mb-12">
  <img src="/public/Rectangle (1).png" alt="back" class="transform relative translate-x-1/2 w-4/5" />
  <div class="absolute inset-0 flex justify-center">
    <img src="/public/illustration-hero.svg" alt="screen" class="transform -translate-y-14 w-4/5 translate-x-10" />
  </div>
</div>


  </div>
</template>

<script>
export default {};
</script>
