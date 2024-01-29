<template>
  <div class="flex flex-col my-5">

    <!-- Title -->
    <div style="font-family: 'Jost';">
      <span class="pl-10 my-1 text-lg">Catalog</span>
    </div>
    <!-- Title -->
    <div class="w-full mt-3 mb-6 flex flex-row justify-between items-center">
      <span class="text-start text-4xl  pl-10 font-bold">Choose What You Like</span>
      <span class="text-lg hover:underline hover:cursor-pointer">All Products  
        <i class="fa-solid fa-chevron-right fa-xs"></i>
      </span>
    </div>

    <!-- Tabs -->
    <div class="flex flex-row pl-5">
      <!-- <template v-for="i in 7"> -->
        <div class="bg-gray-100 py-3 px-4 m-3 rounded-lg hover:cursor-pointer hover:bg-gray-200 duration-200">
          <span>IPhone</span>
        </div>
        <div class="bg-gray-100 py-3 px-4 m-3 rounded-lg hover:cursor-pointer hover:bg-gray-200 duration-200">
          <span>Macbook</span>
        </div>
        <div class="bg-gray-100 py-3 px-4 m-3 rounded-lg hover:cursor-pointer hover:bg-gray-200 duration-200">
          <span>Accessories</span>
        </div>
        <div class="bg-gray-100 py-3 px-4 m-3 rounded-lg hover:cursor-pointer hover:bg-gray-200 duration-200">
          <span>Game Console</span>
        </div>
        <div class="bg-gray-100 py-3 px-4 m-3 rounded-lg hover:cursor-pointer hover:bg-gray-200 duration-200">
          <span>Watch</span>
        </div>
        <div class="bg-gray-100 py-3 px-4 m-3 rounded-lg hover:cursor-pointer hover:bg-gray-200 duration-200">
          <span>Audio</span>
        </div>
      <!-- </template> -->
    </div>

    <!-- Cards -->
    <div class="flex flex-wrap justify-between">
      <template v-for="i in 8">
        
          <Cards/>
        
      </template>
    </div>


  </div>
</template>

<script setup>
import Cards from './Cards.vue';
</script>

<style lang="scss" scoped>

</style>