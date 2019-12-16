<template>
  <div class="comp-control-player" :class="{ 'audio-panel-hide': toggleHide }">
    <audio
      :src="audio.songUrl"
      autoplay
      id="audioPlay"
      ref="audio"
      @timeupdate="playChange()"
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
import { mapActions, mapMutations, mapGetters } from 'vuex';
export default {
  name: 'control-player',
  data() {
    return {
      toggleHide: false
    };
  },
  computed: {
    ...mapGetters('global', ['audio', 'audioLoading', 'showPlayer', 'isPlay'])
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.audio.src = this.audio.songUrl;
    });
  },
  methods: {
    ...mapMutations('global', ['isNowPlay']),
    ...mapActions('global', ['prevNext']),
    togglePanel() {
      this.toggleHide = !this.toggleHide;
    },
    // 歌曲详情结果
    showDetailPlayer() {},

    playChange() {
      const time =  this.$refs.audio.currentTime;
      if (this.audio.currentFlag) {
        document.getElementById(
          'audioPlay'
        ).currentTime = this.audio.currentLength;
        this.$store.commit('global/setCurrent', false);
      } else {
        this.$store.commit('global/setAudioTime', time);
      }
    },
    // 点击播放按钮
    toggleStatus() {
      let isNowPlay = this.isPlay;
      const audioElement =  this.$refs.audio;
      isNowPlay === true ? audioElement.pause() : audioElement.play();
      this.isNowPlay({ flag: !isNowPlay });
    },
    // 点击下一曲播放
    next() {
      this.prevNext('next');
    }
  }
};
</script>
<style lang="scss" scoped>
@import './style.scss';
</style>
