<template>
  <!-- Product Side -->
  <div class="flex flex-col green-500 relative border h-full">
    <!-- Category Side -->
    <button @click="category_toggle = !category_toggle" class="bg-gray-100 w-24 py-2 m-1">
      Category
    </button>
    <div v-if="category_toggle" class="bg-slate-300 w-80 m-1  absolute top-10 p-2">
      <input class="w-full p-2 " type="text" placeholder="Seach Category">
      <ul>
        <li v-for="i in categories" @click="selectedCategories(i)"
          class="mx-1 hover:bg-gray-100 p-1 hover:cursor-pointer">{{ i }}</li>
      </ul>
    </div>
    <!-- Product Common Inform Side -->
    <input class="p-2 m-1 w-80 bg-gray-100" v-model="product_inform.category" type="text" disabled>
    <input class="p-2 m-1 w-80 bg-gray-100" v-model="product_inform.product_name" type="text" placeholder="Product Name">
    <input class="p-2 m-1 w-80 bg-gray-100" v-model="product_inform.description" type="text" placeholder="Description">

    <!-- Price -->
    <div class="flex flex-col">
      <span class="py-2 m-1">Price</span>
      <input class="m-1 p-2 bg-gray-100" type="number" v-model="product_inform.price">
    </div>

    <!-- Stock -->
    <div class="flex flex-col">
      <span class="py-2 m-1">Stock</span>
      <input class="m-1 p-2 bg-gray-100" type="number" v-model="product_inform.stock">
    </div>

    <!-- Sku -->
    <div class="flex flex-col">
      <span class="py-2 m-1">Sku</span>
      <input class="m-1 p-2 bg-gray-100" type="text" v-model="product_inform.sku">
    </div>

    <div class="p-1">
      <button @click="addDatabase" class="py-2 px-4 bg-green-500 text-white hover:bg-green-300 hover:cursor-pointer duration-200">
        Add Database
      </button>
    </div>

  </div>
</template>

<script setup>

import { ref, reactive } from 'vue';

const props = defineProps(['variants']);

const category_toggle = ref(false);
const selectedCategories = (selected) => {
  product_inform.category = selected;
}

const product_inform = reactive({
  category:'',
  product_name:'',
  description:'',
  price: 0,
  stock: 0,
  sku: '',
})

const categories = [
  'Phones',
  'Notebook',
  'Tablets',
  'Watches',
  'PCs',
  'Headphones',
  'Accessories',
]


const addDatabase = () => {

  const data = {
    product_data : product_inform,
    product_variants : props.variants
  }

  console.log('to backend data : ', data);
}

</script>

<style lang="scss" scoped></style>