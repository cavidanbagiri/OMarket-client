<template>
  <div class="flex flex-col items-center justify-center my-5">
    <!-- Title -->
    <div class=" w-full">
      <span class="text-start text-4xl  pl-10 font-bold">Popular Products</span>
    </div>
    <!-- Cards -->
    <div class="flex flex-row flex-wrap w-full my-5 justify-between">
        <template v-for="i in 4">
          <HomeCards/>
        </template>
    </div>
  </div>
</template>

<script setup>
  import HomeCards from './HomeCards.vue'
</script>

<style lang="scss" scoped>

</style>