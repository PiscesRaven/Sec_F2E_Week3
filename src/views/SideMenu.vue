<template lang='pug'>
.sideMenu
  .userInfo 
  ul.menu
    .title 首頁
    .title 音樂庫
  ul.methodsMenu
    li
      i.material-icons folder
      | 你的歌單
    li
      i.material-icons search
      | 搜尋歌曲
    li 
      i.material-icons music_note
      | 熱門點播
  ul.subMenu
    .title 關注我們
    li youtube
    li fackbook
    li line 
    li 分享
</template>
<script lang='ts'>
import { Vue } from "vue-property-decorator";

export default class SideMenu extends Vue {}
</script>
