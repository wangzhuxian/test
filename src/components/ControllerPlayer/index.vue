<template>
  <div class="comp-control-player" :class="{ 'audio-panel-hide': toggleHide }">
    <audio
      :src="audio.songUrl"
      autoplay
      id="audioPlay"
      @timeupdate="change()"
      @ended="next()"
      @error="next()"
    ></audio>
    <div
      class="audio-panel-control"
      @click="togglePanel"
      :class="{ 'toggle-control': toggleHide }"
    >
      <mt-spinner type="snake" :size="27" v-show="audioLoading"></mt-spinner>
    </div>
    <div class="audio-panel">
      <img
        alt=""
        class="player-img"
        :src="audio.imgUrl"
        @click="showDetailPlayer()"
      />
      <div class="player-status">
        <p class="player-title ellipsis">{{ audio.title }}</p>
        <p class="player-singer ellipsis">{{ audio.singer }}</p>
      </div>
      <div class="player-controls">
        <span
          class="player-play"
          @click="toggleStatus()"
          :class="{ 'player-pause': isPlay }"
        ></span>
        <span class="player-next" @click="next()"></span>
      </div>
    </div>
  </div>
</template>
<script>
import { MapGetters, MapActions, MapMutations } from 'vuex';
export default {
  name: 'control-player',
  data() {
    return {
      toggleHide: false
    };
  },
  computed: {
      ...MapGetters('global', ['audio', 'audioLoading', 'showPlayer', 'isPlay']),
  },
  methods: {
      ...MapMutations('global',['isNowPlay']),
      ...MapActions('global', ['prevNext']),
      togglePanel() {
          this.toggleHide = !this.toggleHide;
      },
      // 歌曲详情结果
      showDetailPlayer(){

      },
      // 点击播放按钮
      toggleStatus(){
          let isNowPlay = this.play;
          const audioElement = document.querySelector('#audio');
          isNowPlay === true ? audioElement.pause() : audioElement.play();
          this.isNowPlay({flag: !isNowPlay});
      },
      // 点击下一曲播放
      next(){
          this.prevNext('next');
      }
  }
};
</script>
<style lang="scss" scoped>
@import './style.scss';
</style>
