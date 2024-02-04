<template>
  <div class="flex flex-row ">

    <!-- Carousel Section -->
    <div class="relative flex flex-row justify-between items-center rounded-xl ">
      <!-- Image Section -->

      <!-- <template v-for="(i , index) in images">
        <img v-if="current==index" 
        :class="slide_side ? 'animation_effect_left' : 'animation_effect_right' "
        class="w-screen " style="height: 50vh;" :src="images[index]" alt="">
        <img v-if="current<index" 
        :class="slide_side ? 'animation_effect_left' : 'animation_effect_right' "
        class="w-screen " style="height: 50vh;" :src="images[index]" alt="">
      </template> -->

      <template v-for="(i , index) in images">
      
        <img v-if="current==index" 
        :class="slide_side ? 'animation_effect_left' : 'animation_effect_right' "
        class="w-screen " style="height: 50vh;" :src="images[index]" alt="">

      </template>

      <!-- Left Icon -->
      <div @click="leftSide"
        class=" absolute left-0 p-3 rounded-full w-14 h-14 flex items-center justify-center text-white hover:bg-gray-400 hover:text-white cursor-pointer">
        <i class="fa-solid fa-chevron-left fa-xl"></i>
      </div>


      <!-- Right Icon -->
      <div @click="rightSide"
        class="absolute right-0 p-3 rounded-full w-14 h-14 flex items-center justify-center text-white hover:bg-gray-400 hover:text-white cursor-pointer">
        <i class="fa-solid fa-chevron-right fa-xl"></i>
      </div>

    </div>


  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
const images = ['./src/assets/carousel1.jpg', './src/assets/carousel2.jpg', './src/assets/carousel3.jpg', './src/assets/carousel4.jpg']

const current = ref(0);
const slide_side = ref(false);

const leftSide = () => {
  if (current.value === 0) {
    current.value = images.length - 1;
  } else {
    current.value -= 1;
  }
  slide_side.value = true;
}

const rightSide = () => {
  if (current.value < images.length - 1) {
    current.value += 1;
  }
  else {
    current.value = 0;
  }
  slide_side.value = false;
}

watchEffect(() => {
  // setInterval(() => {
  //   if (current.value < images.length -1 ) {
  //     current.value += 1;
  //   }
  //   else {
  //     current.value = 0;
  //   }
  // },3000)
})

</script>

<style scoped>
.animation_effect_right {
  animation: animationeffectright 0.3s
}

@keyframes animationeffectright {

  from {
    transform: translateX(100%);
  }

  to {

    transform: translateX(0%);
  }

}

.animation_effect_left {
  animation: animationeffectleft 0.3s
}

@keyframes animationeffectleft {

  from {
    transform: translateX(-100%);
  }

  to {

    transform: translateX(0%);
  }

}
</style>