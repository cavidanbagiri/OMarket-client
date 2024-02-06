<template>
  <div class=" flex flex-col ">

    <div class="flex flex-col">
      <span class="text-xl my-2">Create New Category</span>
      <div class="flex flex-row ">
        <input class="border p-2" type="text" placeholder="Category Name" v-model="category_name" />
        <button @click="createNewCategory" class=" mx-2 p-2 bg-green-500 text-white rounded-lg hover:cursor-pointer hover:bg-green-400">
          Add Database
        </button>
      </div>
    </div>

    <div class="flex flex-col mt-10">
      <span class="text-xl my-2">Create New Variant</span>
      <div class="flex flex-row ">
        <input class="border p-2" type="text" placeholder="Category Name" v-model="variant_name" />
        <button @click="createNewVariant" class=" mx-2 p-2 bg-green-500 text-white rounded-lg hover:cursor-pointer hover:bg-green-400">
          Add Database
        </button>
      </div>
    </div>

  </div>
  <message-toast :show=toast_message.show :message=toast_message.message :message_type=toast_message.type />
</template>

<script setup>

import { ref, reactive } from 'vue';
import toastMessage from '../mixins/toastMessage';

import AdminStore from '../store/store.admin';

const mixin_toast_message = toastMessage();
const toast_message = mixin_toast_message.toast_message

const admin_store = AdminStore();


const category_name = ref('');
const createNewCategory = async () => {
  if(category_name.value.trim().length !=0  ){
    await admin_store.createCategory(category_name.value)
    .then((respond)=>{
      mixin_toast_message.showSuccess(true, 'Category Successfully Created', 'success');
    })
  }
  else{
    // mixin_toast_message.show_success(true, 'msg', 'type')
    mixin_toast_message.showError(true, 'Category Name cant be empty', '')
  }
}


const variant_name = ref('');
const createNewVariant = async () => {
  if(variant_name.value.trim().length !=0  ){
    await admin_store.createVariant(variant_name.value)
    .then((respond)=>{
      mixin_toast_message.showSuccess(true, 'Variant Successuly Created', 'success');
    })
  }
  else{
    mixin_toast_message.showError(true, 'Variant Name cant be empty', '')
  }
}

</script>

<style lang="scss" scoped></style>