<template>
  <div v-if="container.isShowData">
    <div class="swiper" style="height: 150px;">
      <mt-swipe :auto="5000">
        <mt-swipe-item v-for="(banner, index) in container.banners" :key="index">
          <a :href="banner.extra.tourl">
            <img :src="banner.imgurl" :title="banner.title" />
          </a>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="play-song">
     <div style="display: flex justify-content: space-around;">
        <mt-cell
        v-for="(song, index) in container.songList"
        :title="song.filename"
        :key="index"
        @click.native="playAudio(index)"
      >
        <img src="@/assets/images/download_icon.png" width="20" height="20" />
      </mt-cell>
     </div>
    </div>
  </div>
</template>

<script>
import { getNewSongData } from '@/api';
import { Indicator } from 'mint-ui';
import downLoadImg from "@/assets/images/download_icon.png";
import {mapState, mapActions, mapMutations} from "vuex";
import {PLAY_AUDIO} from "@/mixins";
export default {
   mixins: [PLAY_AUDIO],
  data() {
    return {
      container: {
        banners: [],
        songList: [],
        isShowData: false,
      }
    };
  },
  async mounted() {
    Indicator.open({
      text: '加载中...',
      spinnerType: 'snake'
    });
    await getNewSongData().then(res => {
      this.container.isShowData = true;
      this.container.banners = res.banner;
      this.container.songList = res.data;
      Indicator.close();
    });
  },
  methods: {

  }
};
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
