<template>

  <div class="flex flex-row" v-if="user_store.user?.is_admin">
    <AdminPageNavbar @changeTab="changeTab"/>
    <div class="border-2  w-full px-5">
      <component :is="tabs[current_tab]"></component>
    </div>
  </div>



</template>

<script setup>

import { ref, onMounted } from 'vue';

import AdminPageNavbar from '@/components/AdminPageNavbar.vue';
import AdminPageDashboard from '@/components/AdminPageDashboard.vue';
import AdminPageProductList from '@/components/AdminPageProductList.vue';
import AdminPageCreateProduct from '@/components/AdminPageCreateProduct.vue';
import AdminPageSettings from '@/components/AdminPageSettings.vue';

import UserStore from '@/store/store.user'
import AdminStore from '@/store/store.admin';
const admin_store = AdminStore();
const user_store = UserStore();



const current_tab = ref(2);
const tabs = [
AdminPageDashboard,
AdminPageProductList,
AdminPageCreateProduct, 
AdminPageSettings
]

const changeTab = (tab_num) => current_tab.value = tab_num

onMounted(()=>{
  admin_store.getCategoriesAndVariants();
})

</script>

<style lang="scss" scoped>

</style>