<template>
  

  <transition name="fade">

    <div 
      class="flex flex-col  h-screen  bg-slate-800 relative py-3 px-2 text-gray-200 overflow-hidden"
      :class="navbar_toggle ? 'navbar_expand_anim w-80 items-start justify-start ' : 'navbar_default_anim w-20 items-start justify-start '"
      style="font-family: 'Jost';">
      
      <!-- Open Close Button -->
      <div 
      :class="navbar_toggle ? ' justify-start ' : 'justify-center'"
      class=" text-white  flex justify-end w-full">
        <span @click="navbar_toggle = !navbar_toggle"
          class="flex items-center justify-center bg-green-400 w-[32px] h-[32px] rounded-full p-1  hover:cursor-pointer text-end">
          <i v-if="navbar_toggle" class="fa-solid fa-chevron-left"></i>
          <i v-else class="fa-solid fa-chevron-right"></i>
        </span>
      </div>

      <!-- <div  class="my-1 w-full text-center py-1 font-bold"
      style="font-family: 'Poppins';">
        <span v-if="navbar_toggle" class="text-2xl ">
          Admin Menu
        </span>
      </div> -->

      <!-- Create New Product --> 
      <div @click="changeTab(0)"
      :class="navbar_toggle ? 'text-start' : 'text-center'"
      class="w-full mt-5 py-3 px-2 rounded-lg hover:bg-gray-600 hover:cursor-pointer">
        <i class="fa-solid fa-home fa-xl"></i>
        <span v-if="navbar_toggle" class="text-xl ml-3">
          Dashboard
        </span>
      </div>

      <!-- Create New Product --> 
      <div @click="changeTab(1)"
      :class="navbar_toggle ? 'text-start' : 'text-center'" 
      class="w-full mt-2 py-3 px-2 rounded-lg hover:bg-gray-600 hover:cursor-pointer">
        <i class="fa-solid fa-table-list fa-xl"></i>
        <span v-if="navbar_toggle" class="text-xl ml-3 ">
          Product List
        </span>
      </div>

       <!-- Create New Product --> 
       <div @click="changeTab(2)"
      :class="navbar_toggle ? 'text-start' : 'text-center'"
      class="w-full mt-2 py-3 px-2 rounded-lg hover:bg-gray-600 hover:cursor-pointer">
        <i class="fa-solid fa-plus fa-xl"></i>
        <span v-if="navbar_toggle" class="text-xl ml-3">
          Create Product
        </span>
      </div>

      <!-- Create New Product --> 
      <div @click="changeTab(3)"
      :class="navbar_toggle ? 'text-start' : 'text-center'"
      class="w-full mt-2 py-3 px-2 rounded-lg hover:bg-gray-600 hover:cursor-pointer">
        <i class="fa-solid fa-gear fa-xl"></i>
        <span v-if="navbar_toggle" class="text-xl ml-3">
          Settings
        </span>
      </div>

    </div>

  </transition>



</template>

<script setup>

import { ref } from 'vue';

const navbar_toggle = ref(false);


const emits = defineEmits(['changeTab']);
const changeTab = (tab_num) => {emits("changeTab", tab_num);}

</script>

<style scoped>

.navbar_expand_anim{
  animation: navbar_expand_anim_frame 0.4s;
   white-space: nowrap;
}

@keyframes navbar_expand_anim_frame {
  from{
    width: 80px
  }
  to{
    width: 320px
  }
}

.navbar_default_anim{
  animation: navbar_default_anim_frame 0.4s;
  white-space: nowrap;
}

@keyframes navbar_default_anim_frame {
  from{
    width: 320px
  }
  to{
    width: 80px
  }
}

</style>