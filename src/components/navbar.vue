<template>
  <div>
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pt-12 px-32">
        <a href="" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/public/logo-bookmark.svg" class="h-8" alt="Flowbite Logo" />
        </a>

        <button data-collapse-toggle="navbar-default" type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden
           hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>

        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul
            class="flex flex-col items-center tracking-widest text-sm p-4 md:p-0 mt-4 border text-tcol border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 
            rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="#" class="block py-2 px-3 hover:text-btn">
                FEATURE
              </a>
            </li>
            <li>
              <a href="#" class="block py-2 px-3  hover:text-btn">
                PRICING
              </a>
            </li>
            <li>
              <a href="#" class="block py-2 px-2 hover:text-btn">
                CONTACT
              </a>
            </li>
            <button
              class="block py-3 px-8 bg-btn text-white rounded-lg text-sm font-medium tracking-wider shadow-lg hover:bg-white hover:text-btn hover:border-2 hover:border-btn  ">
              LOGIN
            </button>
          </ul>




        </div>

      </div>
    </nav>

  </div>
</template>

<script>

</script>