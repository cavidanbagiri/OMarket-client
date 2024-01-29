<template>
  <!-- <div class="border flex flex-col w-full p-5">

    <transition name="fade">

      <div v-if="showtext" class="">
        <span>Hello</span>
      </div>

    </transition> -

    <button @click="showtext = !showtext" class="border p-4 bg-red-400 text-white w-24">
      show
    </button>
  </div>-->

  <div class="flex flex-row ">

    <!-- Carousel Section -->
    <div class="relative flex flex-row justify-between items-center rounded-xl ">
      <!-- Image Section -->

      <template v-for="(i, index) in images">
        <transition name="fade">
          <img v-if="current == index" :key="index"
          class="w-screen " style="height: 50vh;" :src="images[index]" alt="">
        </transition>
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

// const showtext = ref(false);



const current = ref(0);

const leftSide = () => {
  if (current.value === 0) {
    current.value = images.length - 1;
  } else {
    current.value -= 1;
  }
}

const rightSide = () => {
  if (current.value < images.length - 1) {
    current.value += 1;
  }
  else {
    current.value = 0;
  }
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

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}



/* .fade-enter-from {
  opacity: 0;
}

.fade-enter-to {
  opacity: 1;
}

.fade-enter-active {
  transition: all 2s ease;
}



.fade-leave-from {
  opacity: 1;
}

.fade-leave-to {
  opacity: 0;
}

.fade-leave-active {
  transition: all 2s ease;
} */



.animation_effect {
  animation: animationeffectright 2s
}

@keyframes animationeffectright {

  from {
    transform: translateX(100%);
  }

  to {

    transform: translateX(0%);
  }

}</style>