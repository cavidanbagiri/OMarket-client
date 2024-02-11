
<template>
    <tbody class="text-sm" style="font-family: 'Jost';">
        <tr v-for="(i, index) in admin_store.products" class="flex justify-between">
            <td class="border-b py-1 px-1 min-w-4 hover:cursor-pointer hover:text-gray-400">
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </td>
            <td class="border-b py-1 px-1 min-w-12 border">{{ index + 1 }}</td>
            <template v-for="j in admin_store.product_headers" >
                <td v-if="j!=='id' && j!=='category_id' && j!=='category_name' " 
                class="border py-1 w-full px-1"
                :class="j==='description' ? 'min-w-96 border' : '' ">  
                    {{ i[j] }} </td>
                <td v-if="j==='category_name' " 
                class="border w-full px-1">  
                    {{ i['CategoryModel'][j] }}</td>       
            </template>
        </tr>
    </tbody>
</template>


<script setup>

import AdminStore from '../store/store.admin';
const admin_store = AdminStore();

</script>