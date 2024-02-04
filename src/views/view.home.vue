<template>
  <div class="flex flex-col items-center mb-20 p-2" style="font-family: 'Noto Sans' sans-serif;"> 
   
    <Teleport to="body">
      <UserLoginRegisterTeleport/>
    </Teleport>

    <CarouselHome/> 
    <Promotion1/>
    <div style="width: 85%;">
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
import Promotion1 from '../components/Promotion1.vue';
import Brands from '../components/Brands.vue';
import Popular from '../components/Popular.vue';
import QuickLook from '../components/QuickLook.vue';
import SpecialForYou from '../components/SpecialForYou.vue';
import LastNews from '../components/LastNews.vue';


import UserStore from '../store/store.user';
import UserLoginRegisterTeleport from '../components/UserLoginRegisterTeleport.vue';
const user_store = UserStore();


</script>

<style lang="scss" scoped>

</style>