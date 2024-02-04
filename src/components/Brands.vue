<template>
  <div class="flex flex-row  items-center relative mb-5 overflow-hidden border-black w-full " >
    <div class="flex flex-row " ref="main_div" >

      <template v-for="(i, index) in img_list" >
        <div  v-if="index>=start " class="m-1 w-40 h-40" :class="anim ? 'animation_effect_right' : 'animation_effect_left' " >
          <img class=" w-40 h-40" :src="i" alt="" >
          <!-- <span> {{ div_width / 8 }} </span> -->
        </div>
      </template>

    </div>

    <!-- Left Icon -->
    <div @click="popVal"
      class=" absolute left-0 p-1 rounded-full w-11 h-11 flex items-center justify-center text-black bg-gray-200 hover:bg-gray-400 hover:text-white cursor-pointer ">
      <i class="fa-solid fa-chevron-left fa-lg"></i>
    </div>

    <!-- Right Icon -->
    <div @click="addVal"
      class="absolute right-0 p-1 rounded-full w-11 h-11 flex items-center justify-center text-black bg-gray-200 hover:bg-gray-400 hover:text-white cursor-pointer ">
      <i class="fa-solid fa-chevron-right fa-lg"></i>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue';

const start = ref(0 );
const end = ref(8);
const anim = ref(false);


const img_list = [
      "./src/assets/brands/apple.svg",
      "./src/assets/brands/gopro.svg",
      "./src/assets/brands/harman.svg",
      "./src/assets/brands/incase.svg",
      "./src/assets/brands/jabra.svg",
      "./src/assets/brands/jbl.svg",
      "./src/assets/brands/logite.svg",
      "./src/assets/brands/marshall.svg",
      "./src/assets/brands/dbram.svg",
      "./src/assets/brands/ic.svg",
      "./src/assets/brands/ic1.svg",
      "./src/assets/brands/ic2.svg",
      "./src/assets/brands/bose.svg",
]

const popVal = () => {
  if(start.value>=1){
    anim.value = true;
    setTimeout(()=>{
      anim.value = false;
    },10)
    start.value -= 1;
    end.value -= 1;
  }
}
const addVal = () => {
  if(img_list.length - 8 > start.value ){
    anim.value = false;
    setTimeout(()=>{
      anim.value = true;
    },10)

    start.value += 1;
    end.value += 1;
  }
}
const main_div = ref(null);
const div_width = ref(0);
onMounted(()=>{
  console.log(main_div);
  setTimeout(()=>{
    div_width.value = main_div.value.clientWidth;
    console.log(div_width.value);
  },1)
})

// const cavidan = computed(()=>{
//   width.value = main_div.value?.clientWidth;
//   return width.value;
// })

const div_style = reactive({
  width: div_width.value / 8 + 'px',
  height: div_width.value / 8 + 'px'
})

</script>

<style >

.animation_effect_right {
  animation: animationeffectright 0.1s
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
  animation: animationeffectleft 0.1s
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