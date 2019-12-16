<template>
  <div class="page-search">
    <div class="search-panel">
      <div class="search-input">
        <span class="search-icon"></span>
        <input type="text" v-model="keyword" placeholder="歌手/歌名/拼音" @keydown.enter="search" />
      </div>
      <a href="javascript:;" @click="search" class="search-btn">搜索</a>
    </div>

    <div class="search-list" v-show="togglePanel">
      <div class="search-list-title">最近热门</div>
      <mt-cell
        v-for="(item, index) in hotList"
        :title="item.keyword"
        @click.native="replaceInput(item.keyword)"
        :key="index">
      </mt-cell>
    </div>

    <div class="songs-list" v-show="!togglePanel">
      <div class="search-total">共有{{total}}条搜索结果</div>
      <mt-cell
        v-for="(item, index) in songList"
        :title="item.filename"
        @click.native="playAudio(index)"
        :key="index">
        <img src="@/assets/images/download_icon.png" width="20" height="20" />
      </mt-cell>
    </div>
  </div>
</template>

<script>
import { Indicator } from 'mint-ui'
import { PLAY_AUDIO } from '@/mixins'
import { getHotSongList, getSeachData} from '@/api';
export default {
  mixins: [PLAY_AUDIO],
  data () {
    return {
      keyword: '',
      hotList: [],
      togglePanel: true,
      total: null,
      songList: []
    }
  },
  watch:{
    keyword: {
      immediate: true,
      deep: true,
      handler(val) {
        if(!val) {
          this.togglePanel = true;
        }
      }
    }
  },
  created () {
   this.getList();
  },
  mounted() {},
  methods: {
    getList() {
      Indicator.open({
        text: '加载中...',
        spinnerType: 'snake'
      });
     getHotSongList().then((res) => {
       this.hotList = res.info;
       Indicator.close();
     })   
    },
    search() {
      this.togglePanel = false;
      Indicator.open({
        text: '加载中...',
        spinnerType: 'snake',
      });
      if(this.keyword) {
        getSeachData(this.keyword).then((res) => {
          this.songList = res.info
          this.total = res.total
          Indicator.close()
        })
      }
    },
    replaceInput(keyword) {
       this.keyword = keyword;
       this.search();
    }
  }
}
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
