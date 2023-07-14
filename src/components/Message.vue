<template>
    <div class="message w-full    sm:w-auto  " v-if="isShow">
      <div class=" message-item max-w-xs sm:max-w-none mx-auto sm:w-auto  break-words sm:whitespace-nowrap tracking-widest sm:inline-block">
        {{ message }}
      </div>
      <!-- <button @click="close">关闭弹窗</button> -->
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  export default {
    props: {
      message: {
        type: String, required: true,
      },
      duration: {
        type: Number, default: 3,
      },
    },
    setup(props) {
      let isShow = ref(false);
      const show = () => {
        isShow.value = true;
        setTimeout(() => {
          isShow.value = false;
        }, props.duration * 1000);
      };
      const close = () => {
        isShow.value = false;
      };
      return { isShow, show, close };
    },
    created() {
      this.show();
    },
  };
  </script>

  <style scoped>

.message {
    /* position: fixed;
    top: 24px;
    right: 24px;
    z-index: 1000;
    max-width: 200px;
    margin-bottom: 0;
    text-align: right; */
    position: fixed;
    left: 50%;
    top: 50%;
    /* background-color: rgba(0, 0, 0, 0.7); */
    color: white;
    transform: translate(-50%, -50%);
    border-radius: 4px;
    padding: 8px 10px;
    z-index: 1000;
    
  }

  .message-item {
      display: block;
      padding: 12px 24px;
      /* border: 1px solid #b3d0cf; */
      /* margin-left: 8px;
      margin-bottom: 12px; */
      /* background-color: #e6f3ff; */
      font-size: 14px;
      background-color: rgba(0, 0, 0, 0.8);
      text-align: center;
      /* box-shadow: 0 1px 1px 0 hsla(0, 0%, 80.4%, 0.5); */
      border-radius: 2px;
      cursor: default;
      color: white;
    }
</style>