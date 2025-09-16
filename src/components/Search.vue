<script setup>
import { ref, onMounted } from 'vue'
import siteConfig from '@/config/site.config.js'
const time = ref('')
const searchEngine = ref(siteConfig.searchEngineList[0])
onMounted(() => {
  time.value = new Date().toLocaleTimeString()
  setInterval(() => {
    time.value = new Date().toLocaleTimeString()
  }, 1000)

  searchEngine.value = JSON.parse(localStorage.getItem('searchEngine'))

  document.addEventListener('keydown', e => {
    if (e.altKey) {
      if (e.key >= 1 && e.key <= siteConfig.searchEngineList.length) {
        changeSearchEngine(siteConfig.searchEngineList[e.key - 1])
      }
    }
  })
})

const searchValue = ref('')
const searchRef = ref(null)
function submit(e) {
  e.preventDefault()
  window.open(searchEngine.value.url + searchValue.value)
}

function changeSearchEngine(list) {
  localStorage.setItem('searchEngine', JSON.stringify(list))
  searchEngine.value = list
  showEngineList.value = false
}

const showEngineList = ref(false)
</script>
<template>
  <div class="time">{{ time }}</div>

  <div class="search-wrapper" @mouseleave="showEngineList = false">
    <form class="search-form" @submit="submit">
      <div class="icon" @mouseenter="showEngineList = true">
        <img :src="searchEngine.icon" alt="search engine icon" />
      </div>
      <input ref="searchRef" type="text" placeholder="搜索" v-model="searchValue" />
    </form>
    <div class="search-engine-list" v-show="showEngineList">
      <div
        class="engine-list"
        v-for="list in siteConfig.searchEngineList"
        :key="list.name"
        @click="changeSearchEngine(list)">
        <div class="engine-info">
          <div class="engine-icon">
            <img width="14px" height="14px" :src="list.icon" alt="search engine icon" />
          </div>
          <div class="engine-name">{{ list.name }}</div>
        </div>
        <div class="engine-shortcut">{{ list.shortcut }}</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.time {
  padding-top: 100px;
  text-align: center;
  font-family: 'Consolas';
  font-weight: 500;
  font-size: 42px;
  color: #fff;
}
.search-wrapper {
  margin: 20px auto;
  width: 90%;
  max-width: 640px;
  position: relative;
  .search-form {
    position: relative;
    background-color: rgba(249, 250, 251, 0.42);
    border-radius: 8px;
    padding: 0 12px;
    height: 42px;
    display: flex;
    align-items: center;
    transition: all 0.3s;
    &:focus-within {
      background-color: #fff;
      .icon {
        display: block;
      }
    }
    &:hover {
      background-color: #fff9;
      box-shadow: #0000004d 0 0 10px;
    }
    &:focus-within:hover {
      background-color: #fff;
      box-shadow: none;
    }
    &:hover input::placeholder {
      color: #666;
      transition: color 0.3s;
    }

    .icon {
      display: none;
      position: absolute;
      color: #00000080;
      padding: 5px;
      z-index: 10;
      &:hover {
        cursor: pointer;
        background-color: #f6f5f1;
        padding: 5px;
        border-radius: 6px;
      }
      img {
        width: 14px;
        height: 14px;
        display: flex;
        align-items: center;
      }
    }

    input {
      width: 100%;
      height: 100%;
      border-radius: 8px;
      border: none;
      outline-style: none;
      background: none;
      text-align: center;
      font-size: 14px;
      padding: 0 20px;
      &::placeholder {
        color: #fff;
      }
      &:focus::placeholder {
        color: transparent;
        transition: color 0.3s;
      }
    }
  }
  .search-engine-list {
    background-color: #fff;
    border-radius: 8px;
    width: 160px;
    padding: 10px;
    position: absolute;

    .engine-list {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 10px 0;
      padding: 3px 9px;
      border-radius: 6px;
      &:first-child {
        margin-top: 0;
      }
      &:last-child {
        margin-bottom: 0;
      }
      &:hover {
        cursor: pointer;
        background-color: #0000001a;
      }
      .engine-info {
        display: flex;
        align-items: center;
        .engine-icon {
          margin-right: 6px;
          opacity: 0.6;
        }
        .engine-name {
          color: #000;
        }
      }
      .engine-shortcut {
        color: #00000080;
        font-size: 14px;
      }
    }
  }
}
</style>
