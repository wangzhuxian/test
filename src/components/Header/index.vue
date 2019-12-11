<template>
  <div class="header">
    <!-- 这个是logo的标志 -->
    <div class="logo-container">
      <div class="head-logo">
        <a href="#">
          <img src="http://m.kugou.com/v3/static/images/index/logo.png" />
        </a>
      </div>
      <div class="head-search" @click="searchRouter">
        <img src="http://m.kugou.com/v3/static/images/index/search.png" />
      </div>
    </div>
    <!-- 这个是导航栏 -->
    <div class="header-nav">
      <mt-navbar v-model="routeName" class="container">
        <mt-tab-item id="newSongs">新歌</mt-tab-item>
        <mt-tab-item id="rank">排行</mt-tab-item>
        <mt-tab-item id="plist">歌单</mt-tab-item>
        <mt-tab-item id="singer">歌手</mt-tab-item>
      </mt-navbar>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      routeName: ['newSongs', 'rank', 'plist', 'singer'].includes(this.$route.name)
        ? this.$router.name
        : 'newSongs'
    };
  },
  mounted() {
    console.log(this.routeName)
  },
  computed() {
    
  },
  methods: {
    searchRouter() {
      console.log('aaaa');
    }
  }
};
</script>
<style lang="scss" scoped>
@import './style.scss';
</style>
