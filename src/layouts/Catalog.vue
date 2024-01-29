<template>
  <div v-if="props.catalog_show" 
  class="bg-black h-screen w-screen bg-opacity-50 border-none overflow-hidden">
    <div class="h-[60vh] absolute top-24  w-full bg-white "
    :class="props.catalog_toggle ? 'catalog_open' : 'catalog_close' ">
      Catalog
    </div>
  </div>
</template>

<script setup>

const props = defineProps(['catalog_toggle', 'catalog_show'])

</script>

<style scoped>

.catalog_open{
  animation: catalog_open 0.3s;
}

.catalog_close{
  animation: catalog_close 0.3s;
}

@keyframes catalog_open {
  
  from{
    height: 0px;
  }
  to{
    height: 60vh;
  }
}

@keyframes catalog_close {
  from{
    height: 60vh;
  }
  to{
    height: 0px;
  }
}

</style>