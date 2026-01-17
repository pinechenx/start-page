<template>
  <div class="container" :class="{ 'show': store.imgLoaded }">
    <img :src="wallpaper" class="bg-img" :class="{ 'animate': store.imgLoaded }" @load="imgLoadComplete" alt="wallpaper" />
    <div class="cover"></div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { store } from '@/store/store.js'

const wallpaper = ref('')
// 本地图片
// wallpaper.value = '/images/bg1.jpg'
// bing每日图片
wallpaper.value = 'https://bing.ee123.net/img/'

// 动画播放时间
const startTime = ref('')
onMounted(() => {
  startTime.value = Date.now()
})

const imgLoadComplete = () => {
  const time = Date.now() - startTime.value
  const delay = time < 1600 ? 1600 - time : 0
  setTimeout(() => {
    store.imgLoaded = true
  }, delay)
}
</script>
<style lang="scss" scoped>
.container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
  transition: 0.25s;
  opacity: 0;
  contain: layout style paint;

  &.show {
    opacity: 1;
  }

  .bg-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    backface-visibility: hidden;
    transform: translateZ(0) scale(1.5);
    filter: blur(10px) brightness(0.3);
    &.animate {
      will-change: transform, filter, opacity;
      animation: fade-blur-in 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
      animation-delay: 0.36s;
    }
  }
  .cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(#0000, #00000080), radial-gradient(#0000 33%, #0000004d 166%);
  }
}
</style>
