<template>
  <div class="flex flex-col justify-between  pt-2 pb-5 px-5 rounded-lg m-3 hover:shadow-2xl hover:cursor-pointer duration-200" style="width:20%;font-family: 'Poppins';">
    <!-- Image -->
    <div>
      <img src="../assets/promotions/notebooks.jpg" style="height: 25vh;" alt="">
    </div>
    <!-- Stock -->
    
    <slot name="instock">
    </slot>

    <!-- Material Name -->
    <div class="text-md text-start my-2">
      <span>Apple MacBook Pro 14" (M3 8C CPU, 10C GPU, 2023) 8 ГБ, 512 ГБ SSD, «серый космос»</span>
    </div>
    <!-- Price -->
    <div class="text-xl text-center my-2 flex flex-row justify-between w-full">
      <div>
        <span class="font-bold">129000 ₽</span>
      </div>
      <div>
        <span class="font-medium text-gray-400 text-lg ">133000 ₽</span>
      </div>
    </div>
    <!-- Kredit -->
    <div class="text-sm text-start my-2">
      <span>5100 ₽ x 6 Mon.</span>
    </div>
    <!-- Box -->
    <div class="flex flex-row w-full mt-2">
      <button class="border border-black font-bold text-md py-2 px-4 rounded-xl bg-black text-white  mr-2">
        Add Box
      </button>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>