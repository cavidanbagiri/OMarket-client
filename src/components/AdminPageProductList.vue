<template>
  <div class="flex flex-col">
    
    <!-- Title -->
    <div class="flex w-full  py-2">
      <span class=" text-2xl font-bold ">Product List</span>
    </div>

    <!-- Table Section -->
    <div class="">
      <table class="flex flex-col  w-full">
        <TableHeader/>
        <TableRow/>
      </table>
    </div>


  </div>
</template>

<script setup>

import { onMounted } from 'vue';

import TableHeader from './TableHeader.vue';
import TableRow from './TableRow.vue';

import AdminStore from '../store/store.admin';
const admin_store = AdminStore();

onMounted(() => {
  admin_store.fetchProducts();
})

</script>

<style lang="scss" scoped></style>