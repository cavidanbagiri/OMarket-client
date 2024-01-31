<template>
  <div class="flex flex-row  items-center relative mb-5 ">
    <div class="flex flex-row overflow-hidden ">

      <!-- <img src="../assets/brands/apple.svg" alt="">
      <img src="../assets/brands/gopro.svg" alt="">
      <img src="../assets/brands/harman.svg" alt="">
      <img src="../assets/brands/incase.svg" alt="">
      <img src="../assets/brands/jabra.svg" alt="">
      <img src="../assets/brands/jbl.svg" alt="">
      <img src="../assets/brands/logite.svg" alt="">
      <img src="../assets/brands/marshall.svg" alt="">
      <img src="../assets/brands/dbram.svg" alt="">
      <img src="../assets/brands/ic.svg" alt="">
      <img src="../assets/brands/ic1.svg" alt="">
      <img src="../assets/brands/ic2.svg" alt="">
      <img src="../assets/brands/bose.svg" alt=""> -->

      <div class="w-48 h-48 bg-blue-400 m-1" v-for="i  in temp">
        <img class="h-48 w-48" :src="img_list[i]" alt="">
        <img class="h-48 w-48" :src="img_list[i]" alt="">
        <img class="h-48 w-48" :src="img_list[i]" alt="">
      </div>

    </div>

    <!-- Left Icon -->
    <div
      class="absolute -left-7 p-3 rounded-full w-14 h-14 flex items-center justify-center text-black hover:bg-gray-400 hover:text-white cursor-pointer ">
      <i class="fa-solid fa-chevron-left fa-xl"></i>
    </div>

    <!-- Right Icon -->
    <div @click="current+=1"
      class="absolute -right-7 p-3 rounded-full w-14 h-14 flex items-center justify-center text-black hover:bg-gray-400 hover:text-white cursor-pointer ">
      <i class="fa-solid fa-chevron-right fa-xl"></i>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const img_list = [
      "./src/assets/brands/apple.svg",
      "./src/assets/brands/gopro.svg",
      "./src/assets/brands/harman.svg",
      "./src/assets/brands/incase.svg",
      "./src/assets/brands/jabra.svg",
      "./src/assets/brands/jbl.svg",
      "./src/assets/brands/logite.svg",
      "./src/assets/brands/marshall.svg",
      "./src/assets/brands/dbram.svg",
      "./src/assets/brands/ic.svg",
      "./src/assets/brands/ic1.svg",
      "./src/assets/brands/ic2.svg",
      "./src/assets/brands/bose.svg",
]

const temp = Math.floor(img_list.length/2);
const current = ref(0);

</script>

<style lang="scss" scoped></style>