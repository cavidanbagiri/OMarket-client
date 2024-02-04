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
        <div class=" py-3 px-4 m-3 rounded-lg hover:cursor-pointer duration-200" v-for="(i, index) in tabs" 
        :class=" index==current ? 'bg-black text-white hover:bg-gray-700  font-bold' : 'bg-gray-100 hover:bg-gray-200 ' " @click="clickedTabs(index)">
          <span>{{ i }}</span>
        </div>
    
    </div>

    <!-- Cards -->
    <div class="flex flex-wrap justify-between">
      <template v-for="i in 8">
        
          <Cards>
            <template v-slot:instock>  
              <div class="text-sm text-green-500 text-start my-5 font-bold">
                <span> &#9679; In Stock</span>
              </div>
            </template>
          </Cards>
        
      </template>
    </div>


  </div>
</template>

<script setup>
import { ref } from "vue";
import Cards from './Cards.vue';

const current = ref(false);
const tabs = [
  'Phones',
  'Notebooks',
  'Accessroies',
  'Game Consoles',
  'Watches',
  'Audios'
]

const clickedTabs = (index) => {
  current.value = index;
}

</script>

<style lang="scss" scoped>

</style>