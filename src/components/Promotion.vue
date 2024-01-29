<template>
  <div class="flex flex-col items-center justify-around mt-10 mb-10 " style="font-family: 'Josefin Sans';">

    <div class="flex flex-row items-center justify-center w-full  pb-2 h-72">

      <template v-for="(i, index) in promotions" key="index">
        <div @mouseover="divMouseOver(index)" @mouseleave="divMouseLeave(index)"
          class=" h-full w-full rounded-xl mr-5 flex items-center justify-center relative overflow-hidden">
          <div v-if="current === index" :class="div_leave_trans ? 'div_translate_enter' : 'div_translate_leave'"
            class="absolute bg-black bg-opacity-70 w-full h-full flex flex-col items-center justify-center">
            <span class="text-white text-3xl mb-5 font-bold">{{ i[0].toUpperCase() + i.slice(1) }}</span>
            <button @mouseover="btnMouseOver" @mouseleave="btnMouseLeave" :class="btn_trans ? 'btn_translate' : ''"
              class="text-white  border-2 py-2 px-6 rounded-2xl font-bold text-lg">
              Look</button>
          </div>
          <img :src="'./src/assets/promotions/' + i + '.jpg'" class="h-full w-full rounded-xl" alt="">
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
const promotions = ref(['notebooks', 'phones', 'tablets', 'watches', 'accessories', 'consoles','accessories', 'consoles'])

const divMouseOver = (curr) => {
  current.value = curr; 
  div_leave_trans.value = true; 
}
const divMouseLeave = (curr) => {
  div_leave_trans.value = false;
  setTimeout(()=>{
    if(current.value == curr )
      current.value = -1;
  },200)
}


const btnMouseOver = () => { btn_trans.value = true }
const btnMouseLeave = () => { btn_trans.value = false; }


</script>

<style scoped>
.div_translate_enter {
  animation: div_anim_enter 0.4s;
  cursor: pointer;
}

.div_translate_leave {
  animation: div_anim_leave 0.4s;
  cursor: all-scroll
}

.btn_translate {
  transform: scale(1.1);
  transition: 0.4s;
  background-color: white;
  color: black;
  cursor: pointer;
}

@keyframes div_anim_enter {
  from {
    transform: translateY(-100%)
  }

  to {
    transform: translateY(0%);
  }
}

@keyframes div_anim_leave {
  from {
    transform: translateY(0%)
  }

  to {
    transform: translateY(-100%);
  }
}
</style>