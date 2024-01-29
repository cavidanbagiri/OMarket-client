<template>
  <div class="sticky top-0 z-20">

    <div class="grid grid-cols-12 bg-white h-24 relative" >
      
      <div class="col-span-3 text-center flex items-center justify-around  h-24 " style="font-family: 'Josefin Sans';">
        <div class="text-black text-[40px] font-bold">
          <span class="">
            Market</span>
        </div>
        <div style="font-family: 'Inter';">
          <button @click="catalogToggle" class="border py-3 px-8 flex items-center rounded-lg bg-black border-none hover:bg-slate-800">
            <img class="w-6 h-6 mr-3" src="../assets/menu-bar.png" alt="">
            <span class="text-white text-[16px]">Catalog</span>
          </button>
        </div>
      </div>
      
      <!-- Search Material Section -->
      <div class="col-span-7 text-center flex items-center justify-center px-2 mx-10 h-24" >
        <div class="flex w-full border rounded-xl items-center px-4 hover:shadow-md duration-200 ">
          <i class="fa-solid fa-magnifying-glass fa-lg text-gray-400"></i>
          <input class="w-full py-4 rounded-2xl px-2 outline-none" type="search" name="" id="" placeholder="Search ...">
        </div>
      </div>
  
      <!-- User Information Section -->
      <div class="col-span-2 text-center flex flex-row justify-center items-center w-full py-1 h-24">
        <img class=" hover:cursor-pointer  w-7 h-7" src="../assets/favorite.png" alt="">
        <img class=" hover:cursor-pointer  w-7 h-7 mx-10" src="../assets/basket.png" alt="">
        <img class=" hover:cursor-pointer  w-10 h-10" src="../assets/user_profile.png" alt="">
      </div>
      
      <Catalog :catalog_toggle="catalog_toggle" :catalog_show="catalog_show" />

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Catalog from './Catalog.vue';
// import HomeStore from '../store/store.home.js'
//const home_store = HomeStore();

const catalog_toggle = ref(false);
const catalog_show = ref(false);

const catalogToggle = () => {
  if(catalog_toggle.value){
    catalog_toggle.value = false;
    setTimeout(()=>{
      catalog_show.value = false;
    }, 200)
  }
  else{
    catalog_toggle.value = true;
    catalog_show.value = true;
  }
}

</script>

<style lang="scss" scoped>

</style>