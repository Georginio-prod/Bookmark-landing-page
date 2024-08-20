<template>
    <div class="max-w-lg flex flex-col justify-center items-center px-4 mt-20 lg:min-w-full mb-5
                lg:max-w-lg lg:flex lg:justify-center lg:items-center lg:pt-36 ">
        <div class="text-center">
            <p class="font-medium text-2lg text-tcol pb-2">
                Download the extension
            </p>
            <h1 class="opacity-50 text-tcol text-sm xl:px-96 mb-12">
                We’ve got more browsers in the pipeline. Please do let us know if you’ve
                got a favourite you’d like us to prioritize.
            </h1>
        </div>

        <div class="lg:flex lg:gap-9 gap-10">
            <div class="w-72 bg-white text-center shadow-xl rounded-2xl">
                <img src="/public/logo-chrome.svg" alt="chrome" class="mx-auto pt-12 pb-8">
                <h1 class="font-medium text-xl tracking-wide">Add to Chrome</h1>
                <h3 class="opacity-50 text-sm pt-1">
                    Minimum version 62
                </h3>
                <div class="custom-dotted-border my-4 mx-auto pt-8 "></div>
                <button class="py-3 px-8 text-white mt-5 bg-bgbtn rounded-md mb-6">
                    Add & Install Extension
                </button>
            </div>

            <div class="w-72 bg-white text-center shadow-xl rounded-2xl translate-y-10">
                <img src="/public/logo-firefox.svg" alt="chrome" class="mx-auto pt-12 pb-8">
                <h1 class="font-medium text-xl tracking-wide">Add to Firefox</h1>
                <h3 class="opacity-50 text-sm pt-1">
                    Minimum version 55
                </h3>
                <div class="custom-dotted-border my-4 mx-auto pt-8 "></div>
                <button class="py-3 px-8 text-white mt-5 bg-bgbtn rounded-md mb-6">
                    Add & Install Extension
                </button>
            </div>

            <div class="w-72 bg-white text-center shadow-xl rounded-2xl translate-y-20">
                <img src="/public/logo-opera.svg" alt="chrome" class="mx-auto pt-12 pb-8">
                <h1 class="font-medium text-xl tracking-wide">Add to Opera</h1>
                <h3 class="opacity-50 text-sm pt-1">
                    Minimum version 46
                </h3>
                <div class="custom-dotted-border my-4 mx-auto pt-8 "></div>
                <button class="py-3 px-8 text-white mt-5 bg-bgbtn rounded-md mb-6">
                    Add & Install Extension
                </button>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style>
.custom-dotted-border {
    border-bottom: 4px dotted;
    /* Bordure en haut avec des points */
    border-image: repeating-linear-gradient(to right, 0, 1px, transparent 1px, transparent 6px) 10;
    /* Espacement personnalisé */
    border-color: #979797;
}
</style>