
<template>
  <div class="flex flex-col ">
    <Navbar/>
    <router-view></router-view>
  </div>
</template>



<script setup>

import { watchEffect } from 'vue';

import Navbar from './layouts/Navbar.vue';

import UserStore from './store/store.user';

const user_store = UserStore();

watchEffect(()=>{
  if(localStorage.getItem('token')){
    console.log('watch effect work');
    user_store.checkAuth();
  }
  else{
    console.log('not work');
  }
})

</script>


<style scoped>



</style>
