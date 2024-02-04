<template>
  <div class="flex flex-col  my-10 p-1" style="font-family: 'Josefin Sans';">

    <div class="flex flex-row flex-wrap items-center justify-between  pb-2 w-screen" style="font-family: 'Jost';">

      <template v-for="(i, index) in promotions" key="index" class="">

          <div @mouseover="divMouseOver(index)" @mouseleave="divMouseLeave(index)"
            class="h-80 w-[25%] hover:rounded-xl mb-10 flex flex-col items-center justify-center relative overflow-hidden border ">
            <transition name="fade" >
              <div v-if="current === index"
                class="absolute top-0 left-0 bg-black bg-opacity-20  w-full h-full flex flex-col items-center justify-center">
                <span class="text-white text-3xl mb-5 font-bold">{{ i[0].toUpperCase() + i.slice(1) }}</span>
                <button @mouseover="btnMouseOver" @mouseleave="btnMouseLeave" :class="btn_trans ? 'btn_translate' : ''"
                  class="text-white  border-2 py-2 px-6 rounded-2xl font-bold text-lg">
                  Look</button>
              </div>
            </transition>
            <img :src="'./src/assets/promotions/' + i + '.jpg'" class="h-32 w-36 rounded-xl" alt="">
            <div class="text-2xl mt-5">
              <span>{{ i[0].toUpperCase() + i.slice(1) }}</span>
            </div>
            <div>
              
            </div>
          </div>
  
      </template>

    </div>


  </div>
</template>

<script setup>
import { ref } from 'vue';

const div_leave_trans = ref(false);
const btn_trans = ref(false);
const current = ref(-1);
const promotions = ref(['notebooks', 'phones', 'tablets', 'watches', 'accessories', 'consoles', 'headphones', 'gadgets'])

const divMouseOver = (curr) => {
  current.value = curr;
  div_leave_trans.value = true;
}
const divMouseLeave = (curr) => {
  div_leave_trans.value = false;
  setTimeout(() => {
    if (current.value == curr)
      current.value = -1;
  }, 200)
}


const btnMouseOver = () => { btn_trans.value = true }
const btnMouseLeave = () => { btn_trans.value = false; }


</script>

<style scoped>
.fade-enter-from,
.fade-leave-to {
  height: 0
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.parent-enter-from,
.parent-leave-to {
  width: 0
}

.parent-enter-active,
.parent-leave-active {
  transition: all 0.5s ease;
}

.btn_translate {
  transform: scale(1.1);
  transition: 0.3s;
  background-color: white;
  color: black;
  cursor: pointer;
}


</style>