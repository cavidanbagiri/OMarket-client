<template>
  <div v-if="user_toggle" class="border px-2 py-3 absolute right-5 w-[22rem] rounded-xl shadow-xl bg-white" style="font-family: 'Jost';">

    <!-- User Profile -->
    <div class="flex flex-row mt-2 justify-start items-center hover:bg-gray-100 p-3 rounded-lg hover:cursor-pointer">
      <div class="">
        <img class="w-12 h-12" src="../assets/user_profile.png" alt="">
      </div>
      <div class="ml-4 flex flex-col items-start justify-start">
        <span class="text-xl font-bold" >{{ user_store.user?.name }} {{ user_store.user?.surname }}</span>
        <span class="text-lg text-gray-500" >{{ user_store.user?.email }}</span>
      </div>
    </div>

    <!-- Favorites -->
    <div class="flex flex-row items-center mt-2 hover:bg-gray-100 py-3 px-3 rounded-lg hover:cursor-pointer">
      <img class="w-7 h-7" src="../assets/favorite.png" alt="">
      <span class="text-xl font-bold ml-4">Favorites</span>
    </div>

    <!-- Box -->
    <div class="flex flex-row items-center mt-2 hover:bg-gray-100 py-3 px-3 rounded-lg hover:cursor-pointer">
      <img class="w-7 h-7" src="../assets/basket.png" alt="">
      <span class="text-xl font-bold ml-4">Basket</span>
    </div>

    <!-- Box -->
    <div class="flex flex-row items-center mt-2 hover:bg-gray-100 py-3 px-3 rounded-lg hover:cursor-pointer">
      <img class="w-7 h-7" src="../assets/undo.png" alt="">
      <span class="text-xl font-bold ml-4">Refund</span>
    </div>

    <!-- Box -->
    <div class="flex flex-row items-center mt-2 hover:bg-gray-100 py-3 px-3 rounded-lg hover:cursor-pointer">
      <img class="w-7 h-7" src="../assets/orders.png" alt="">
      <span class="text-xl font-bold ml-4">Orders</span>
    </div>
    
     <!-- Box -->
     <div class="flex flex-row items-center mt-2 hover:bg-gray-100 py-3 px-3 rounded-lg hover:cursor-pointer">
      <img class="w-7 h-7" src="../assets/like.png" alt="">
      <span class="text-xl font-bold ml-4">Promotions and Sales</span>
    </div>

    <!-- Box -->
    <div class="flex flex-row items-center mt-2 hover:bg-gray-100 py-3 px-3 rounded-lg hover:cursor-pointer">
      <img class="w-7 h-7" src="../assets/chat.png" alt="">
      <span class="text-xl font-bold ml-4">Chats</span>
    </div>

     <!-- Box -->
     <div class="flex flex-row items-center mt-2 hover:bg-gray-100 py-3 px-3 rounded-lg hover:cursor-pointer">
      <img class="w-7 h-7" src="../assets/settings.png" alt="">
      <span class="text-xl font-bold ml-4">Settings</span>
    </div>

     <!-- Box -->
     <div @click="userLogout" v-if="user_store.GETUSER" class="flex flex-row items-center mt-2 hover:bg-gray-100 py-3 px-3 rounded-lg hover:cursor-pointer">
      <img class="w-7 h-7" src="../assets/logout.png" alt="">
      <span class="text-xl font-bold ml-4">Logout</span>
    </div>

    <!-- Box -->
    <div @click="userLogin"  v-else class="flex flex-row items-center mt-2 hover:bg-gray-100 py-3 px-3 rounded-lg hover:cursor-pointer">
      <img class="w-7 h-7" src="../assets/logout.png" alt="">
      <span class="text-xl font-bold ml-4">Login</span>
    </div>

  </div>
</template>

<script setup>

import UserStore from '../store/store.user';

const user_store = UserStore();

const props = defineProps(['user_toggle'])

const userLogin = () => {
  user_store.user_teleport = true;
}

const userLogout = () => {
  user_store.logoutUser();
}


</script>

<style lang="scss" scoped>

</style>