
<template>
  <div class="flex flex-col ">

    <!-- Toitle Side -->
    <div class="w-full  text-center py-2 text-3xl">
      <span>
        Create New Product
      </span>
    </div>

    <div class="flex flex-row">

      <!-- Product Side -->
      <AdminPageCreateProductMainProduct :variants="variants" />


      <!-- Variants Side -->
      <div class="flex flex-col">

        <!-- Add Or Remove BTN -->
        <div class="">
          <button @click="addVariants" class="p-2 bg-green-500 text-white font-bold m-2">
            Add Variants
          </button>
          <button @click="removeVariants" class="p-2 bg-red-500 text-white font-bold">
            Remove Variants
          </button>
        </div>

        <template v-for="i in product_variant_count">
          <AdminPageCreateProductMainProductEachVariant :variants="variants" />
        </template>

      </div>


    </div>


  </div>
</template>

<script setup>

import { ref } from 'vue';

import AdminPageCreateProductMainProduct from './AdminPageCreateProductMainProduct.vue';

import AdminPageCreateProductMainProductEachVariant from './AdminPageCreateProductMainProductEachVariant.vue'

const product_variant_count = ref(1);


const addVariants = () => {
  product_variant_count.value += 1;
}

const removeVariants = () => {
  product_variant_count.value > 1 ? product_variant_count.value -= 1 : product_variant_count.value -= 0;
}

const variants = ref([]);


</script>

<style lang="scss" scoped></style>