<template lang='pug'>
  .mainContainer
    SideMenu
    .videoContainer
      .embed
        .cover
        #player
      .thumbnail(:style="(`background-image: url(https://i.ytimg.com/vi/${playId}/mqdefault.jpg)`)")
      .listContainer
        ul.videoList
          li.list(v-for="(item,index) in list" :key="index+1" @click="changeVide(item.url)" :class="{active : playId === item.url}")
              .name {{item.title}}
              .time {{item.time}}
              .methods
                i.material-icons add
                i.material-icons remove
      .panel
        .timeBar
        .panelBtn
          i.material-icons.previousBtn skip_previous
          i.material-icons.playingBtn play_circle_outline
          i.material-icons.skipBtn  skip_next
          i.material-icons.repeatBtn repeat


</template>
<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import SideMenu from "./SideMenu.vue";
@Component({
  components: {
    SideMenu
  }
})
export default class Main extends Vue {
  // data
  private playId: string = "";
  private videoData: object = {};
  private list: object[] = [
    {
      title: "ONE OK ROCK - 完全感覚 Dreamer -LIVE-",
      url: "R3CiFzTd5Vk",
      time: "5:30"
    },
    {
      title: "Fall Out Boy - Alone Together (Part 4 of 11)",
      url: "LFhEBmNwX_E",
      time: "4:13"
    },
    {
      title: "Of Monsters And Men - Empire (Official Lyric Video)",
      url: "H2lzxGcbz-g",
      time: "4:22"
    },
    {
      title: "【MAD】ナルト 山下宏幸 シルエット",
      url: "jEcPWq8tTY4",
      time: "3:57"
    },
    {
      title: "Of Monsters And Men - Empire (Official Lyric Video)",
      url: "H2lzxGcbz-g",
      time: "4:22"
    },
    {
      title: "【MAD】ナルト 山下宏幸 シルエット",
      url: "jEcPWq8tTY4",
      time: "3:57"
    }
  ];
  public created() {
    this.addApi();
  }

  // methods
  public addApi() {
    var tag = document.createElement("script");
    tag.src = "https://www.youtube.com/player_api";
    var firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    this.videoIframe("R3CiFzTd5Vk");
  }

  public videoIframe(url: string) {
    let vm = this;
    vm.playId = url;
    window.onload = function() {
      let player = new YT.Player("player", {
        height: "100%",
        width: "100%",
        videoId: url,
        events: {
          // onReady: playVideo
        }
      });
      vm.videoData = player;
    };
  }
  public changeVide(url: string) {
    if (this.playId === url) return;
    this.playId = url;
    this.videoData.loadVideoById(url);
  }
}
</script>


