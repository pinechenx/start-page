<template>
  <footer>
    <span class="text">Copyright © {{ new Date().getFullYear() }}</span>
    <span class="text hide2">Made by {{ siteConfig.author }}</span>
    <span class="text hide1" v-if="siteConfig.icpFilingNumber">
      <a class="link" href="https://beian.miit.gov.cn" target="_blank">{{ siteConfig.icpFilingNumber }}</a>
    </span>
    <span class="text" v-if="siteConfig.policeFilingNumber">
      <img class="icp-icon" src="https://s2.loli.net/2024/10/27/MaB9VmiEwrT1xje.png" alt="备案图标" />
      <a class="link" :href="policeFilingUrl" target="_blank">{{ siteConfig.policeFilingNumber }}</a>
    </span>
  </footer>
  <div class="box"></div>
</template>
<script setup>
import siteConfig from '@/config/site.config.js'
const policeFilingUrl = `https://beian.mps.gov.cn/#/query/webSearch?code=${siteConfig.policeFilingNumber.match(/\d+/)[0]}`
</script>
<style lang="scss" scoped>
footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2.5rem;
  background: rgba(0, 0, 0, 0.15);
  opacity: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  z-index: 1;
  white-space: nowrap;

  .text {
    color: #fff;
    padding: 0 5px;

    .link {
      color: #fff;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }

    .icp-icon {
      vertical-align: -3px;
      padding-right: 5px;
      border: 0;
    }
  }
}
.box {
  height: 2.5rem;
}

@media (max-width: 768px) {
  .hide1 {
    display: none;
  }
}
@media (max-width: 480px) {
  .hide2 {
    display: none;
  }
}
</style>
