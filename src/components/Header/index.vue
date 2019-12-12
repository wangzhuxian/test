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
      <div
        v-for="(item) in tabNav"
        :key="item.index"
        @click="handleRoute(item)"
        class="header-nav-item"
        :class="{'is_active':  currentIndex === item.index}"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
export default {
  data() {
    return {
      tabNav: [
        { name: '新歌', path: '/newSongs',index: 0 },
        { name: '排行', path: '/rank' , index: 1},
        { name: '歌单', path: '/plist' , index: 2,},
        { name: '歌手', path: '/singer', index: 3 }
      ],
      currentIndex: 0 // 默认下标值为0
    };
  },

  computed: {},

  watch: {},

  methods: {
    ...mapMutations('global',['handleDetailPlayerFlag']),
    handleRoute(item) {
      this.currentIndex = item.index;
      this.$router.push(item.path);
    },
    searchRouter() {
      this.handleDetailPlayerFlag({flag: false});
      this.$router.push({ path: '/search' })
    }
  }
};
</script>
<style lang="scss" scoped>
@import './style.scss';
</style>
