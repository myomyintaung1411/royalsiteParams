<script setup>
import { ref } from "vue";

const loader = ref(true);

setTimeout(() => {
  loader.value = false;
}, 1000);
</script>

<template>
  <div>
      <div v-if="loader" class="preloader">
      <div class="scene" id="scene">
          <input type="checkbox" id="andicator" />
          <div class="cube">
              <div class="cube__face cube__face--front"><i></i></div>
              <div class="cube__face cube__face--back"><i></i><i></i></div>
              <div class="cube__face cube__face--right">
                  <i></i> <i></i> <i></i> <i></i> <i></i>
              </div>
              <div class="cube__face cube__face--left">
                  <i></i> <i></i> <i></i> <i></i> <i></i> <i></i>
              </div>
              <div class="cube__face cube__face--top">
                  <i></i> <i></i> <i></i>
              </div>
              <div class="cube__face cube__face--bottom">
                  <i></i> <i></i> <i></i> <i></i>
              </div>
          </div>
      </div>
  </div>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style>
html{
  scroll-behavior: smooth;
}
*{
  box-sizing: border-box;
}
html {
    scrollbar-width: none; /* For Firefox */
    -ms-overflow-style: none; /* For Internet Explorer and Edge */
}

html::-webkit-scrollbar {
    width: 0px; /* For Chrome, Safari, and Opera */
}

.loading-open {
    overflow: hidden;
}

body {
  padding: 0;
  margin: 0;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.7;
  font-family: "Open Sans", sans-serif;
  background: #350b2d;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}
.my-progress-bar{
  color:#fff !important;
  background:#d8d8d8 !important
}
.preloader {
    width: 100%;
    height: 100%;
    background: #2e0327;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    text-align: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
  }
  
  
  .scene .cube__face--left i:nth-child(1) {
    grid-area: 1 / 1 / 1 / 1;
  }
  .scene .cube__face--left i:nth-child(2) {
    grid-area: 2 / 1 / 2 / 1;
  }
  .scene .cube__face--left i:nth-child(3) {
    grid-area: 3 / 1 / 3 / 1;
  }
  .scene .cube__face--left i:nth-child(4) {
    grid-area: 1 / 3 / 1 / 3;
  }
  .scene .cube__face--left i:nth-child(5) {
    grid-area: 2 / 3 / 2 / 3;
  }
  .scene .cube__face--left i:nth-child(6) {
    grid-area: 3 / 3 / 3 / 3;
  }
  .scene .cube__face--right i:nth-child(1) {
    grid-area: 1 / 1 / 1 / 1;
  }
  .scene .cube__face--right i:nth-child(2) {
    grid-area: 3 / 1 / 3 / 1;
  }
  .scene .cube__face--right i:nth-child(3) {
    grid-area: 2 / 2 / 2 / 2;
  }
  .scene .cube__face--right i:nth-child(4) {
    grid-area: 1 / 3 / 1 / 3;
  }
  .scene .cube__face--right i:nth-child(5) {
    grid-area: 3 / 3 / 3 / 3;
  }
  .scene .cube__face--bottom i:nth-child(1) {
    grid-area: 1 / 1 / 1 / 1;
  }
  .scene .cube__face--bottom i:nth-child(2) {
    grid-area: 3 / 1 / 3 / 1;
  }
  .scene .cube__face--bottom i:nth-child(3) {
    grid-area: 1 / 3 / 1 / 3;
  }
  .scene .cube__face--bottom i:nth-child(4) {
    grid-area: 3 / 3 / 3 / 3;
  }
  .scene .cube__face--top i:nth-child(1) {
    grid-area: 1 / 1 / 1 / 1;
  }
  .scene .cube__face--top i:nth-child(2) {
    grid-area: 2 / 2 / 2 / 2;
  }
  .scene .cube__face--top i:nth-child(3) {
    grid-area: 3 / 3 / 3 / 3;
  }
  .scene .cube__face--back i:nth-child(1) {
    grid-area: 1 / 1 / 1 / 1;
  }
  .scene .cube__face--back i:nth-child(2) {
    grid-area: 3 / 3 / 3 / 3;
  }
  .scene .cube__face--front i:nth-child(1) {
    grid-area: 2 / 2 / 2 / 2;
  }
  .scene:after, .scene .cube__face i:after {
    display: block;
    content: "";
    position: absolute;
  }
  .roll {
    margin-bottom: 100px;
    min-height : 30px;
  }
  .roll:hover .roll__three-d-box, .roll:focus .roll__three-d-box {
    transform: translateZ(-25px) rotateX(90deg);
  }
  .roll__three-d-box {
    transition: all 0.3s ease-out;
    transform: translateZ(-25px);
    transform-style: preserve-3d;
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
  }
  .roll__three-d-box--front {
    transform: rotatex(0deg) translatez(14px);
  }
  .roll__three-d-box--back {
    transform: rotatex(-90deg) translatez(14px);
    background-color: #c0392b !important;
  }
  .roll:hover ~ div {
    transform: scale(0.7);
  }
  .roll:hover ~ div > div {
    animation-duration: 0.5s;
  }
  .scene {
    width: 150px;
    height:150px;
    perspective: 600px;
    transition: 1.5s;
  }
  .scene:after {
    width: 250px;
    height: 30px;
    background: #c0392b;
    border-radius: 50%;
    filter: blur(40px);
    position: relative;
    top: 112px;
    left: 35px;
    z-index: 50;
    opacity: 0.4;
  }
  .scene input {
    display: none;
  }
  .scene input:checked + div {
    animation-play-state: paused;
    animation-duration: 0.5s;
  }
  .scene .cube {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transform: translateZ(-100px);
    animation: roll 8s linear infinite alternate;
  }
  .scene .cube__face {
    display: grid;
    grid-template: repeat(3, 45px)/repeat(3, 45px);
    border: 1px solid #2e0327;
    background: #4b0e40;
    position: absolute;
    width: 200px;
    height: 200px;
    padding: 32.5px;
  }
  .scene .cube__face--front i::after {
    background: #e74c3c;
  }
  .scene .cube__face--back i::after {
    background: #1abc9c;
  }
  .scene .cube__face--top i::after {
    background: #2980b9;
  }
  .scene .cube__face--bottom i::after {
    background: #f1c40f;
  }
  .scene .cube__face--right i::after {
    background: #27ae60;
  }
  .scene .cube__face--left i::after {
    background: #9b59b6;
  }
  .scene .cube__face--front {
    transform: rotateY(0deg) translateZ(100px);
  }
  .scene .cube__face--back {
    transform: rotateY(90deg) translateZ(100px);
  }
  .scene .cube__face--left {
    transform: rotateY(180deg) translateZ(100px);
  }
  .scene .cube__face--right {
    transform: rotateY(-90deg) translateZ(100px);
  }
  .scene .cube__face--top {
    transform: rotateX(90deg) translateZ(100px);
  }
  .scene .cube__face--bottom {
    transform: rotateX(-90deg) translateZ(100px);
  }
  .scene .cube__face i {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
  }
  .scene .cube__face i:after {
    width: 25px;
    height: 25px;
    border-radius: 50%;
   
  }
  /*# sourceMappingURL=application.css.map */
  @keyframes redlight {
    from {
        color: red;
   }
    to {
        color: black;
   }
  }
  @keyframes roll {
    from, to {
        transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
   }
    16% {
        transform: rotateY(-90deg);
   }
    33% {
        transform: rotateY(-90deg) rotateZ(90deg);
   }
    50% {
        transform: rotateY(-180deg) rotateZ(90deg);
   }
    66% {
        transform: rotateY(-270deg) rotateX(90deg);
   }
    83% {
        transform: rotateX(90deg);
   }
  }
  
</style>
