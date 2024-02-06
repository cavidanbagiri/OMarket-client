

<template>

  <Transition name="fade">
    <div v-if="props.show" :class="props.message_type === 'success' ? 'bg-green-500' : 'bg-red-500'"
      class="flex items-center justify-center text-lg py-3 shadow-2xl rounded-lg w-96 text-white fixed top-10 right-20 z-50">
      <span>{{ props.message }}</span>
    </div>
  </Transition>

</template>

<script setup>

const props = defineProps(['show', 'message', 'message_type']);

</script>

<style scoped>


.fade-enter-from,
.fade-leave-to {
  transform: translateY(-150%);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-in;
}


</style>