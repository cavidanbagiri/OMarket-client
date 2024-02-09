
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
        <span v-if="error_message.cond" class="text-red-500 text-sm px-2">{{error_message.msg}}</span>
        <!-- Add Or Remove BTN -->
        <div class=" px-2 flex justify-between py-1">
          <button @click="addVariants" class="p-2 bg-green-500 text-white font-bold  hover:cursor-pointer hover:bg-green-400 ">
            Add Variants
          </button>
          <button @click="removeVariants" class="p-2 bg-red-500 text-white font-bold hover:cursor-pointer hover:bg-red-400 ">
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

import { ref, reactive } from 'vue';

import AdminPageCreateProductMainProduct from '@/components/AdminPageCreateProductMainProduct.vue';

import AdminPageCreateProductMainProductEachVariant from '@/components/AdminPageCreateProductMainProductEachVariant.vue'

const product_variant_count = ref(1);


const error_message = reactive({

  msg : 'Fill variants after add new',
  cond : false
})

const addVariants = () => {
  let condition = ref(true);
  for( let i of variants.value){
    if(i.variant_id == ''){
      error_message.cond = true;
      error_message.msg = 'Please select variant after add new one'
      condition.value = false;
    }
    else if(i.value == ''){
      error_message.cond = true;
      error_message.msg = 'Please fill variant value after add new one'
      condition.value = false;
    }
  }
  condition.value ? product_variant_count.value += 1 : ''
  
}

const removeVariants = () => {
  product_variant_count.value > 1 ? product_variant_count.value -= 1 : product_variant_count.value -= 0;
}

const variants = ref([]);


</script>

<style lang="scss" scoped></style>