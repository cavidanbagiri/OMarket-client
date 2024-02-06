<template>
  <div class=" flex flex-row border w-full m-2 ">

    <!-- Selected Variant -->
    <div class="flex flex-col relative">
      <button @click="variantToggle" class="bg-black text-white w-24 py-2 m-1">
        Variants
      </button>
      <div v-if="variants_toggle" class="bg-slate-300 w-80 m-1  absolute top-10 p-2">
        <input class="w-full p-2 bg-gray-100" type="text" placeholder="Seach Category">
        <ul>
          <li v-for="i in variants" @click="selectedVariant(i)" class="mx-1 hover:bg-gray-100 p-1 hover:cursor-pointer">{{
            i }}</li>
        </ul>
      </div>
      <input class="p-2 m-1 w-80 bg-gray-100" v-model="each_product_variants.variant" type="text" disabled>
    </div>

    <!-- Selected Value -->
    <div class="flex flex-col relative">
      <span class="bg-black text-white w-24 py-2 m-1 text-center">
        Value
      </span>
      <input class="p-2 m-1 w-80  bg-gray-100" type="text" v-model="each_product_variants.value">
    </div>

    

  </div>
</template>

<script setup>

import { ref, reactive, onMounted } from 'vue';

const props = defineProps(['variants']);

const each_product_variants = reactive({
  variant: '',
  value: '',
})

onMounted(()=>{
  props.variants.push(each_product_variants);
})

const variants_toggle = ref(false);
const variantToggle = () => {
  variants_toggle.value = !variants_toggle.value
}
const selectedVariant = (selected) => {
  each_product_variants.variant = selected
}


const variants = [
  'Marka',
  'Model',
  'Display',
  'Ram',
  'Disk Type',
  'Display Type',
  'CPU',
  'GPU',
  'Color',
  'Sim Card Size',

]

</script>






<style lang="scss" scoped></style>