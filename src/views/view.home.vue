<template>
  <div class="flex flex-col items-center mb-20 p-2" style="font-family: 'Noto Sans' sans-serif;"> 
    <CarouselHome/>
    <div style="width: 85%;">
      <Promotion/>
      <Brands/>
      <Popular/>
      <QuickLook/>
      <LastNews/>
      <!-- <SpecialForYou/> -->
    </div>
  </div>
</template>

<script setup>
import CarouselHome from '../components/CarouselHome.vue';
import Promotion from '../components/Promotion.vue';
import Brands from '../components/Brands.vue';
import Popular from '../components/Popular.vue';
import QuickLook from '../components/QuickLook.vue';
import SpecialForYou from '../components/SpecialForYou.vue';
import LastNews from '../components/LastNews.vue';

</script>

<style lang="scss" scoped>

</style>