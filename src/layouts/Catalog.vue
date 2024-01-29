<template>
  <!-- <div v-if="props.catalog_show" 
  class="bg-black h-screen w-screen bg-opacity-50 border-none overflow-hidden">
    <div class="h-[60vh] absolute top-24  w-full bg-white "
    :class="props.catalog_toggle ? 'catalog_open' : 'catalog_close' ">
      Catalog
    </div>
  </div> -->

  <transition name="slide" >
    <div v-if="props.catalog_show" 
    class="bg-black h-screen w-screen bg-opacity-50 border-none overflow-hidden ">
      <div class="h-[60vh] absolute top-24  w-full bg-white shadow-xl slide-fade">
        Catalog
      </div>
    </div>
  </transition>

</template>

<script setup>

const props = defineProps(['catalog_toggle', 'catalog_show'])

</script>

<style scoped>

.slide-enter-from,
.slide-leave-to{
  height: 0;
  opacity: 0;
}
.slide-enter-active,
.slide-leave-active
{
  transition: all 0.4s ;
}

.slide-fade-enter-from,
.slide-fade-leave-to{
  height: 0;
  opacity: 0;

}
.slide-fade-enter-active,
.slide-fade-leave-active
{
  transition: all 0.4s ;
}

/* .catalog_open{
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
} */

</style>