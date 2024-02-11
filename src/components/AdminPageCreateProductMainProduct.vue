<template>
  <!-- Product Side -->
  <div class="flex flex-col green-500 relative border h-full">
    <!-- Category Side -->
    <button @click="category_toggle = !category_toggle" class="bg-gray-100 w-24 py-2 m-1">
      Category
    </button>
    <div v-if="category_toggle" class="bg-white border shadow-lg w-80 m-1  absolute top-10 p-2">
      <input class="w-full p-2 bg-gray-100 rounded-lg text-gray-600 outline-none " type="text"
        placeholder="Seach Category">
      <ul>
        <li v-for="i in admin_store.categories" @click="selectedCategories(i.id, i.category_name)"
          class=" hover:bg-gray-100 p-1  hover:cursor-pointer">{{ i.category_name }}</li>
      </ul>
    </div>
    <!-- Product Common Inform Side -->
    <span class="p-1 m-1 text-sm" :class="product_inform.category_name == '' ? 'text-red-500' : ''">
      Selected Category :
      <span class=" w-80 underline text-sm" type="text">{{ product_inform.category_name }}</span>
    </span>
    <div class="flex flex-col">
      <span class="py-2 m-1">Product Name</span>
      <span v-if="err_message && product_inform.product_name == ''" class=" mx-1 text-xs text-red-500">Must Be
        Fill</span>
      <input class="p-2 m-1 w-80 bg-gray-100 text-sm outline-none" v-model="product_inform.product_name" type="text"
        placeholder="Product Name">
    </div>
    <div class="flex flex-col">
      <span class="py-2 m-1">Description</span>
      <span v-if="err_message && product_inform.description == ''" class=" mx-1 text-xs text-red-500">Must Be Fill</span>
      <input class="p-2 m-1 w-80 bg-gray-100 text-sm outline-none" v-model="product_inform.description" type="text"
        placeholder="Description">
    </div>

    <!-- Price -->
    <div class="flex flex-col">
      <span class="py-2 m-1">Price</span>
      <span v-if="err_message && product_inform.price <= 0" class=" mx-1 text-xs text-red-500">Must Be Fill</span>
      <input class="m-1 p-2 bg-gray-100 text-sm outline-none" type="number" v-model="product_inform.price">
    </div>

    <!-- Stock -->
    <div class="flex flex-col">
      <span class="py-2 m-1">Stock</span>
      <input class="m-1 p-2 bg-gray-100 text-sm outline-none" type="number" v-model="product_inform.stock">
    </div>

    <!-- Sku -->
    <div class="flex flex-col">
      <span class="py-2 m-1">Sku</span>
      <input class="m-1 p-2 bg-gray-100 text-sm outline-none" type="text" v-model="product_inform.sku">
    </div>

    <!-- Add Image -->
    <div class="flex flex-col">
      <span class="py-2 m-1">Add Image</span>
      <input class="m-1 p-2 bg-gray-100 text-sm outline-none" type="file" name="image"
        accept="image/png, image/jpg, image/jpeg" @change="onFileChange">
    </div>


    <div class="p-1">
      <button @click="addDatabase"
        class="py-2 px-4 bg-green-500 text-white hover:bg-green-300 hover:cursor-pointer duration-200">
        Add Database
      </button>
    </div>

  </div>
  <message-toast :show=toast_message.show :message=toast_message.message :message_type=toast_message.type />
</template>

<script setup>

import { ref, reactive } from 'vue';
import toastMessage from '../mixins/toastMessage';

import AdminStore from '@/store/store.admin';
const admin_store = AdminStore();

const mixin_toast_message = toastMessage();
const toast_message = mixin_toast_message.toast_message

const props = defineProps(['variants']);

const category_toggle = ref(false);
const selectedCategories = (id, name) => {
  product_inform.category_id = id;
  product_inform.category_name = name;
  category_toggle.value = false
}

const err_message = ref(false);
const product_inform = reactive({
  category_id: 0,
  category_name: '',
  product_name: '',
  description: '',
  price: 0,
  stock: 0,
  sku: '',
})

// Selected Image 
let selected_file = '';
const onFileChange = (e) => {
  const temp = e.target.files[0];
  selected_file = temp;
}


const addDatabase = async () => {

  if (product_inform.category_id === 0 || product_inform.product_name === '' || product_inform.description === '' || product_inform.price <= 0) {
    err_message.value = true;
  }
  else {
    err_message.value = false;
  }


  if (!err_message.value) {
    // Add Values In Formadata
    const formData = new FormData();
    formData.append('product_data', JSON.stringify(product_inform));
    formData.append('product_variants', JSON.stringify(props.variants));
    formData.append('file', selected_file);

    // Send To backend
    await admin_store.createProduct(formData).then((respond) => {
      mixin_toast_message.showSuccess(true, 'New product Successfully Created', 'success');
    })
      .catch((err) => {
        if (err?.response?.data) {
          mixin_toast_message.showError(true, 'Error, New Product Cant created', '');
        }
      })
  } else {
    console.log('else work');
  }

}

</script>

<style lang="scss" scoped></style>