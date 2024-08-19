<template>
    <div class=" w-full items-center mt-32 justify-center  px-6 xl:mt-10">
        <div class="text-center flex flex-col text-tcol">
            <p class="xl:font-medium xl:text-3xl xl:pb-4 text-2xl">
                Features
            </p>
            <h1 class="xl:px-96 xl:text-lg opacity-50 text-sm pt-2">
                Our aim is to make it quick and easy for you to access your favourite websites.
                Your bookmarks sync between your devices so you can access them on the go.
            </h1>
        </div>

        <div class="pt-10 w-full text-center flex flex-col text-tcol lg:hidden">
            <ul class="border-t-2 ">
                <li class="border-b-2 p-5 hover:border-b-4 hover:border-btn transition duration-300 ease-in-out opacity-75"
                    @click="currentPage = 'simpleBookmarking'"
                    :class="{ 'opacity-100': currentPage === 'simpleBookmarking', 'opacity-75': currentPage !== 'simpleBookmarking' }">
                    Simple Bookmarking
                </li>
                <li class="border-b-2 p-5 hover:border-b-4 hover:border-btn transition duration-300 ease-in-out opacity-75"
                    @click="currentPage = 'speedySearching'"
                    :class="{ 'opacity-100': currentPage === 'speedySearching', 'opacity-75': currentPage !== 'speedySearching' }">
                    Speedy Searching
                </li>
                <li class="border-b-2 p-5 hover:border-b-4 hover:border-btn transition duration-300 ease-in-out opacity-75"
                    @click="currentPage = 'easySharing'"
                    :class="{ 'opacity-100': currentPage === 'easySharing', 'opacity-75': currentPage !== 'easySharing' }">
                    Easy Sharing
                </li>
            </ul>
        </div>


        <div class="flex flex-col mb-9 border-b-4 mx-auto w-1/2">
            <div class="pt-10 w-full text-center text-tcol hidden lg:block ">
                <ul class=" flex justify-center gap-16 text-base ">
                    <li class="border-b-2 border-transparent px-5 py-2 hover:border-b-4 hover:border-btn transition duration-300 ease-in-out opacity-75 cursor-pointer"
                        @click="currentPage = 'simpleBookmarking'"
                        :class="{ 'opacity-100 border-btn': currentPage === 'simpleBookmarking', 'opacity-75': currentPage !== 'simpleBookmarking ' }">
                        Simple Bookmarking
                    </li>
                    <li class="border-b-2 border-transparent px-5 py-2 hover:border-b-4 hover:border-btn transition duration-300 ease-in-out opacity-75 cursor-pointer"
                        @click="currentPage = 'speedySearching'"
                        :class="{ 'opacity-100 border-btn': currentPage === 'speedySearching', 'opacity-75': currentPage !== 'speedySearching' }">
                        Speedy Searching
                    </li>
                    <li class="border-b-2 border-transparent px-5 py-2 hover:border-b-4 hover:border-btn transition duration-300 ease-in-out opacity-75 cursor-pointer"
                        @click="currentPage = 'easySharing'"
                        :class="{ 'opacity-100 border-btn': currentPage === 'easySharing', 'opacity-75': currentPage !== 'easySharing' }">
                        Easy Sharing
                    </li>
                </ul>
            </div>
        </div>

    </div>



</template>
