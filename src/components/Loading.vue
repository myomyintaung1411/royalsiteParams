<template>
   <div class="loading-wrapper" v-show="msg.show">
    <div class="loading-overlay"></div>
    <div class="loading-content flex flex-col justify-center items-center space-y-3 bg-black bg-opacity-80 px-5 py-5 rounded-lg">
      <div class="custom-loader"></div>
      <span class="text-base text-white tracking-wider">{{msg.title}}</span>
    </div>
  </div>
</template>

<script>
export default {
    name:"Loading",
    props:{
        msg:Object
    }
}
</script>

<style scoped>
.loading-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none; /* Disable pointer events */
  touch-action: none ;
   user-select: none;
  -webkit-touch-callout: none; /* Disable touch callout */

  /* background-color: rgba(0, 0, 0, 0.1);  */
}

.loading-content {
  position: relative;
}
 .custom-loader {
  width: 48px;
  height: 48px;
  margin: auto;
  position: relative;
}

.custom-loader:before {
  content: '';
  width: 48px;
  height: 5px;
  background: #f0808050;
  position: absolute;
  top: 60px;
  left: 0;
  border-radius: 50%;
  animation: shadow324 0.5s linear infinite;
}

.custom-loader:after {
  content: '';
  width: 100%;
  height: 100%;
  background: #f08080;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 4px;
  animation: jump7456 0.5s linear infinite;
}

@keyframes jump7456 {
  15% {
    border-bottom-right-radius: 3px;
  }

  25% {
    transform: translateY(9px) rotate(22.5deg);
  }

  50% {
    transform: translateY(18px) scale(1, .9) rotate(45deg);
    border-bottom-right-radius: 40px;
  }

  75% {
    transform: translateY(9px) rotate(67.5deg);
  }

  100% {
    transform: translateY(0) rotate(90deg);
  }
}

@keyframes shadow324 {

  0%,
    100% {
    transform: scale(1, 1);
  }

  50% {
    transform: scale(1.2, 1);
  }
}
</style>