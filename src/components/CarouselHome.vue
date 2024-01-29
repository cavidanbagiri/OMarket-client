<template>
  <div class="flex flex-row overflow-hidden ">

    <!-- Carousel Section -->
    <div class="relative flex flex-row justify-between items-center rounded-xl bg-yellow-400">
      <!-- Image Section -->

      <div class=" " >
        <img class="w-screen" style="height: 60vh;"  src="../assets/carousel2.jpg" alt="">
      </div>

      <!-- Left Icon -->
      <div class="absolute left-0 p-3 rounded-full w-14 h-14 flex items-center justify-center text-white hover:bg-gray-400 hover:text-white cursor-pointer">
        <i class="fa-solid fa-chevron-left fa-xl"></i>
      </div>


      <!-- Right Icon -->
      <div class="absolute right-0 p-3 rounded-full w-14 h-14 flex items-center justify-center text-white hover:bg-gray-400 hover:text-white cursor-pointer">
        <i class="fa-solid fa-chevron-right fa-xl"></i>
      </div>

    </div>


  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>