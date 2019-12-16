
let PLAY_AUDIO = {
  methods: {
    playAudio(index) {
      const songInfo = this.container.songList[index];
      this.$store.commit('global/setListInfo', {
        songList: this.container.songList,
        songIndex: index
      });
      this.$store.dispatch('global/getSongs', songInfo.hash);
      this.$store.dispatch('global/getLrc', {
        hash: songInfo.hash,
        timelength: songInfo.duration * 1000
      });
      this.$store.commit('global/isNowPlay', {flag: true});
    }
  }
};

module.exports = {
  PLAY_AUDIO
};
// mixins 可以实现在vue组件中的功能复用