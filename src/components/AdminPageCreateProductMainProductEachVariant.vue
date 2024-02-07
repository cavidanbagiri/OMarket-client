<template>
  <div class=" flex flex-row border w-full m-2 ">

    <!-- Selected Variant -->
    <div class="flex flex-col relative">
      <button @click="variantToggle" class="bg-gray-200 text-gray-500  py-1 m-1 hover:bg-gray-300 hover:text-gray-600">
        + Choose Variant
      </button>
      <div v-if="variants_toggle" class="bg-white border shadow-lg w-80 m-1  absolute top-10 p-2">
        <div class="text-end my-1">
          <i @click="variants_toggle = false" class="fa-solid fa-xmark p-1 hover:cursor-pointer hover:text-gray-500 duration-300"></i>
        </div>
        <input class="w-full p-2 bg-gray-100 rounded-lg text-gray-600 outline-none" type="text" placeholder="Seach Category">
        <ul>
          <li v-for="i in admin_store.GETVARIANTS" @click="selectedVariant(i.id, i.variant_name)" class="mx-1 hover:bg-gray-100 p-1 hover:cursor-pointer">{{
            i.variant_name }}</li>
        </ul>
      </div>
      <input @click="variants_toggle = true" class="p-2 m-1 w-80 bg-gray-100  outline-none" v-model="each_product_variants.variant_name" type="text" disabled>
    </div>

    <!-- Selected Value -->
    <div class="flex flex-col relative text-center">
      <span class="bg-gray-200 text-gray-500  py-1 m-1">
        Value
      </span>
      <input class="p-2 m-1 w-80  bg-gray-100 outline-none" type="text" placeholder="Value ..." v-model="each_product_variants.value">
    </div>

    

  </div>
</template>

<script setup>

import { ref, reactive, onMounted } from 'vue';

import AdminStore from '@/store/store.admin'; 
const admin_store = AdminStore();

const props = defineProps(['variants']);

const each_product_variants = reactive({
  variant_id: '',
  variant_name: '',
  value: '',
})

onMounted(()=>{
  props.variants.push(each_product_variants);
})

const variants_toggle = ref(false);
const variantToggle = () => {
  variants_toggle.value = !variants_toggle.value
}
const selectedVariant = (id, variant_name) => {
  each_product_variants.variant_id = id;
  each_product_variants.variant_name = variant_name;
  variants_toggle.value = false;
}


// const variants = [
//   'Marka',
//   'Model',
//   'Display',
//   'Ram',
//   'Disk Type',
//   'Display Type',
//   'CPU',
//   'GPU',
//   'Color',
//   'Sim Card Size',

// ]

</script>






<style lang="scss" scoped></style>