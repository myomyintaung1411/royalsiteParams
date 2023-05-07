<template>
  <div class="how-section relative bg_img" 

  >
    <div class="lg:max-w-7xl px-0 mx-auto mt-3 pt-3 opacity-95 bg-white">
        <div class="flex justify-between px-3  items-center">
            
            <ArrowLeftIcon @click="goBack()" class="w-10 h-10 text-black"></ArrowLeftIcon>
            <h1 class="text-center text-2xl text-black">玩法说明</h1>
            <h1 class="text-white ">""</h1>
        </div>
        <div class="flex justify-center px-3 space-x-8 items-center py-6 text-black cursor-pointer">
            <p @click="showRules(0)" :class="activeTab === 0 ? 'text-[#634b06] font-bold border-b-4 border-[#2e0327]' : ''">百家乐</p>
            <p @click="showRules(1)" :class="activeTab === 1 ? 'text-[#634b06] font-bold border-b-4 border-[#2e0327]' : ''">龙虎</p>
            <p  @click="showRules(2)" :class="activeTab === 2 ? 'text-[#634b06] font-bold border-b-4 border-[#2e0327]' : ''">牛牛</p>
            <p @click="showRules(3)" :class="activeTab === 3 ? 'text-[#634b06] font-bold border-b-4 border-[#2e0327]' : ''">好路详解</p>
        </div>
        <div class="w-full h-auto pb-4 bg-[#2e0327]">
            <img v-if="activeTab === 0" src="@/assets/images/gzbjl.jpg" alt="" class="w-full h-full">
            <img v-else-if="activeTab === 1" src="@/assets/images/lh.jpg" alt="" class="w-full h-full">
            <img v-else-if="activeTab === 2" src="@/assets/images/nn.jpg" alt="" class="w-full h-full">
            <img v-else src="@/assets/images/hl.jpg" alt="" class="w-full h-full">
        </div>
    </div>
  </div>
</template>
<script setup>
import { ArrowLeftIcon  } from "@heroicons/vue/outline";
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();

 const activeTab = ref(0)
 const showRules = (number) => {
  activeTab.value = number
 }
 const goBack = () => {
    router.push('/')
 }

</script>

<style>
.how-section{
    width: 100%;
    height: 100vh;
  
      background: url(@/assets/images/howsection.jpg);
      background-repeat: no-repeat !important;
      background-size: cover;
}
.bg_img::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: #2e0327;
  opacity: 0.9;
}
</style>

