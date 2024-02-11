<template>
    <thead class="text-sm">
        <tr class="flex justify-between bg-slate-800 text-white py-1">
            <td class=" min-w-4 text-center ">
                <span>
                    
                </span>
            </td>
            <td class=" min-w-12 text-center ">
                <span>
                    Index
                </span>
            </td>
            <template v-for="i in admin_store.product_headers">
                <td v-if="i !== 'id' && i !== 'category_id'" :class="i === 'description' ? 'min-w-96' : ''"
                    class=" w-full text-center">
                    <span>
                        {{ i.toUpperCase() }}
                    </span>
                </td>
            </template>
        </tr>
    </thead>
</template>

<script setup>

import AdminStore from '../store/store.admin';
const admin_store = AdminStore();

</script>