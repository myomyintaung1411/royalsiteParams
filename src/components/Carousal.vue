
<template>
    <div class="h-fit w-full">
    <swiper :loop="true" :effect="'fade'" 
       :pagination='{"clickable": true}' :modules="[Autoplay,Pagination,Navigation,EffectFade]"  class="mySwiper " :autoplay='{
    "delay": 2500,
    "disableOnInteraction": false,
  }'>
      <swiper-slide  class=" lg:h-[600px] w-full overflow-hidden">
        <img src="@/assets/11.jpg" alt="environment" class=" h-[200px] w-full sm:h-[700px]   object-cover"/>
      </swiper-slide>
      <swiper-slide  class=" lg:h-[600px] w-full overflow-hidden">
        <img src="@/assets/22.jpg" alt="environment" class=" h-[200px] w-full sm:h-[700px]   object-cover"/>
      </swiper-slide>
      <swiper-slide  class=" lg:h-[600px] w-full overflow-hidden">
        <img src="@/assets/33.jpg" alt="environment" class=" h-[200px] w-full sm:h-[700px]   object-cover"/>
      </swiper-slide>
      <swiper-slide  class=" lg:h-[600px] w-full overflow-hidden">
        <img src="@/assets/44.jpg" alt="environment" class=" h-[200px] w-full sm:h-[700px]   object-cover"/>
      </swiper-slide>
  
    </swiper>
</div>
  </template>
  <script setup>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from "swiper/vue";
  
  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/navigation"
  import "swiper/css/pagination";
  import "swiper/css/effect-fade";
  import {reactive,computed} from 'vue'
  
  // import Swiper core and required modules
  import SwiperCore, {
    Autoplay,Pagination,Navigation,EffectFade
  } from 'swiper';
  </script>
  
  <style >
    /* change active bullet color to red */
  /* .swiper-pagination-bullet-active {
      opacity: 1;
      background: var(--swiper-pagination-color, var(--swiper-theme-color));
  } */
  
  .swiper-pagination-bullet {
          background-color: #f5cb78;
          /* width: 1rem;
          height: 1rem; */
      }
  
  /*move swiper pagination on top to image */
  /* .swiper-pagination {
      text-align: center;
      transition: 300ms opacity;
      transform: translate3d(0, 0, 0);
      z-index: 10;
      width: 5rem;
      height: 5rem;
  
  } */
  </style>