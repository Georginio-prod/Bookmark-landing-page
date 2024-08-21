<script setup>
import navbar from './components/navbar.vue'
import ContentD from './components/contentD.vue';
import feature from './components/feature.vue';
import Ifeat from './components/Ifeat.vue';
import downl from './components/downl.vue';
import faq from './components/faq.vue';
import inputG from './components/inputG.vue';
import bleuCard from './components/bleuCard.vue';
import foot from './components/foot.vue';
</script>

<template>
  <navbar />
  <main>
    <ContentD />
    <feature />
    <Ifeat />
    <downl />
    <faq />
    <!-- <inputG/> -->
    <bleuCard />
    <foot />
  </main>
</template>

<style scoped></style>
