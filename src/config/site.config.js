import googleicon from '@/assets/google.svg'
import bingicon from '@/assets/bing.svg'
import baiduicon from '@/assets/baidu.svg'
import sogouicon from '@/assets/sogou.svg'

export default {
  // 作者
  author: '流明灵石',

  // 搜索引擎
  searchEngineList: [
    { name: '谷歌', url: 'https://www.google.com/search?q=', icon: googleicon, shortcut: 'Alt + 1' },
    { name: '必应', url: 'https://www.bing.com/search?q=', icon: bingicon, shortcut: 'Alt + 2' },
    { name: '百度', url: 'https://www.baidu.com/s?wd=', icon: baiduicon, shortcut: 'Alt + 3' },
    { name: '搜狗', url: 'https://www.sogou.com/web?query=', icon: sogouicon, shortcut: 'Alt + 4' },
  ],

  // 备案信息 为空则不显示
  icpFilingNumber: '赣ICP备18008477号-3', // 备案号
  policeFilingNumber: '赣公网安备36100002000260', // 公安备案号
}
