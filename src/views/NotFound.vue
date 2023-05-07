<template>
  <header class=" relative shadow bg_img how-section">
    <div class="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8 h-screen w-full flex flex-col justify-center items-center opacity-95">
      <div class="mr-4 max-w-lg">
        <img src="@/assets/images/20945761.jpg" alt="" >
      </div>
      <h1 class="text-3xl font-bold leading-tight text-white py-3"> 404 Page Not Found</h1>
      <a href="/" class="px-8 py-3 bg-[#cc1daf] hover:bg-[#7a256c] shadow-lg">Home</a>
    </div>
  </header>
</template>
<style>
 .how-section {
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
