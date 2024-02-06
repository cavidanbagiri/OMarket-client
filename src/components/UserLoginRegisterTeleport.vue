<template>
  <div v-if="user_store.GETUSERTELEPORT"
    class="flex justify-center items-center w-screen h-screen bg-black bg-opacity-30 border absolute top-0 left-0 z-50"
    style="font-family: 'Inter';">
    <div class="flex flex-col w-80 p-5 bg-white rounded-xl">

      <div class="text-end ">
        <i class="fa-solid fa-xmark fa-xl hover:cursor-pointer hover:text-gray-400"
          @click="user_store.user_teleport = false"></i>
      </div>

      <div class="text-center my-3 text-2xl font-bold">
        <span>Login Or Register</span>
      </div>

      <div class="flex flex-row mt-5 py-1">
        <span @click="current = true" :class="current ? 'underline' : ''"
          class="mx-2 text-sm text-black p-1 rounded-md hover:cursor-pointer hover:bg-black hover:text-white">Login</span>
        <span @click="current = false" :class="!current ? 'underline' : ''"
          class="mx-2  text-sm text-black p-1 rounded-md hover:cursor-pointer hover:bg-black hover:text-white">Register</span>
      </div>


      <!-- Login -->
      <VeeForm v-if="current" @submit="loginUser" >


          <VeeField name="email" :rules="{required: true, email:true}"
          class="w-full my-3 rounded-lg bg-gray-100  p-2" type="text" placeholder="Email"
            v-model="user_data.email" />
            <ErrorMessage name="email" class="text-xs text-red-500 pl-2" />
          
          <VeeField name="password"  :rules="{required: true, min:8}"
          class="w-full my-1 rounded-lg bg-gray-100  p-2" type="password" placeholder="Password"
            v-model="user_data.password" />
            <ErrorMessage name="password" class="text-xs text-red-500 pl-2" />


          <button  class="bg-black mt-3 text-white w-full p-3 rounded-lg">
            Login
          </button>

      </VeeForm>

      <!-- Register -->
      <VeeForm v-else @submit="registerUser" >

          <VeeField name="email" :rules="{required: true, email:true}"
          class="w-full my-3 rounded-lg bg-gray-100  p-2" type="text" placeholder="Email"
            v-model="user_data.email" />
            <ErrorMessage name="email" class="text-xs text-red-500 pl-2" />
          
          <VeeField name="password"  :rules="{required: true, min:8}"
          class="w-full my-1 rounded-lg bg-gray-100  p-2" type="password" placeholder="Password"
            v-model="user_data.password" />
            <ErrorMessage name="password" class="text-xs text-red-500 pl-2" />

          <button class="bg-black mt-3 text-white w-full p-3 rounded-lg">
            Register
          </button>

      </VeeForm>

      <!-- 
      <button @click="fuserFunc" class="bg-black mt-3 text-white w-full p-3 rounded-lg">
          FUser
        </button>

        <button @click="checkAuth" class="bg-black mt-3 text-white w-full p-3 rounded-lg">
          Refresh
        </button> -->

    </div>
  </div>
</template>

<script setup>

import { ref, reactive } from 'vue';
import UserStore from '../store/store.user';
const user_store = UserStore();

const user_data = reactive({
  email: '',
  password: ''
})

const current = ref(true);

const loginUser = (values) => {
  user_store.loginUser(values);
}

const registerUser = (values) => {
  user_store.registerUser(user_data);
}

// const fuserFunc = () => {
//   user_store.fuserFunc(user_data);
// }

// const checkAuth = () => {
//   user_store.checkAuth();
// }


</script>

<style scoped></style>