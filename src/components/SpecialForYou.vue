<template>
  <div class="flex flex-col items-center justify-center my-5">
    <!-- Title -->
    <div class=" w-full">
      <span class="text-start text-3xl pl-10">Special For You</span>
    </div>
    <!-- Cards -->
    <div class="flex flex-row flex-wrap w-full my-5 justify-between">
        <template v-for="i in 4">
          <Cards/>
        </template>
    </div>
  </div>
</template>

<script setup>
  import Cards from './Cards.vue'
</script>

<style lang="scss" scoped>

</style>