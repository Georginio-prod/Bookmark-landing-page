<template>
    <div class="flex flex-col justify-center items-center px-4 mt-20 lg:w-full mb-5 lg:max-w-lg lg:mx-auto">
        <!-- Premier bloc: Titre et description -->
        <div class="text-center">
            <p class="font-medium text-3xl text-tcol pb-2 mt-28">
                Frequently Asked Questions
            </p>
            <h1 class="opacity-50 text-tcol text-sm mb-12">
                Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email
                us.
            </h1>
        </div>

        <!-- Deuxième bloc: FAQ -->
        <div class="w-full text-tcol ">
            <div class="tab px-5 border-b border-t relative ">
                <input type="checkbox" name="faq" id="faq1" class="appearance-none peer">
                <label for="faq1" class="flex items-center cursor-pointer font-regular text-lg after:absolute after:right-5 after:w-6 after:h-6 after:bg-no-repeat
                     after:bg-center after:bg-[url('/public/icon-arrow.svg')] peer-checked:after:rotate-180 ">
                    <h3 class="hover:text-btn ">What is TailWindCSS ?</h3>
                </label>
                <div
                    class="answer mt-5 h-0 transition-all ease-in-out duration-500 overflow-hidden peer-checked:h-full">
                    <p class="opacity-75">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt
                        justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.
                    </p>
                </div>
            </div>

            <div class="tab px-5  border-b relative rounded-md">
                <input type="checkbox" name="faq" id="faq2" class="appearance-none peer">
                <label for="faq2" class="flex items-center cursor-pointer font-regular text-lg after:absolute after:right-5 after:w-6 after:h-6 after:bg-no-repeat 
                    after:bg-center after:bg-[url('/public/icon-arrow.svg')] peer-checked:after:rotate-180 ">
                    <h3 class="hover:text-btn">How can I request a new browser?</h3>
                </label>
                <div
                    class="answer mt-5 h-0 transition-all ease-in-out duration-500 overflow-hidden peer-checked:h-full">
                    <p class="opacity-75">
                        Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.
                        Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
                        ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies.
                        Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.

                    </p>
                </div>
            </div>

            <div class="tab px-5 border-b relative rounded-md">
                <input type="checkbox" name="faq" id="faq3" class="appearance-none peer">
                <label for="faq3" class="flex items-center cursor-pointer font-regular text-lg after:absolute after:right-5 after:w-6 after:h-6 after:bg-no-repeat 
                    after:bg-center after:bg-[url('/public/icon-arrow.svg')] peer-checked:after:rotate-180 ">
                    <h3 class="hover:text-btn">Is there a mobile app?</h3>
                </label>
                <div
                    class="answer mt-5 h-0 transition-all ease-in-out duration-500 overflow-hidden peer-checked:h-full">
                    <p class="opacity-75">
                        Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut
                        condimentum
                        urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed
                        sollicitudin ex et ultricies bibendum.
                    </p>
                </div>
            </div>

            <div class="tab px-5 border-b relative rounded-md">
                <input type="checkbox" name="faq" id="faq4" class="appearance-none peer">
                <label for="faq4" class="flex items-center cursor-pointer font-regular text-lg after:absolute after:right-5 after:w-6 after:h-6 after:bg-no-repeat
                     after:bg-center after:bg-[url('/public/icon-arrow.svg')] peer-checked:after:rotate-180 ">
                    <h3 class="hover:text-btn">What about other Chromium browsers?</h3>
                </label>
                <div
                    class="answer mt-5 h-0 transition-all ease-in-out duration-500 overflow-hidden peer-checked:h-full">
                    <p class="opacity-75 ">
                        Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam
                        vitae neque eget nisl gravida pellentesque non ut velit.
                    </p>
                </div>
            </div>


        </div>
        <button
            class="py-3 px-6 text-white mt-12 bg-bgbtn rounded-md mb-6">
            More Info
        </button>
    </div>
</template>

<script>
</script>

<style scoped></style>
