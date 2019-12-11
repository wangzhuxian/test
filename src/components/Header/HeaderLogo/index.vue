<template>
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
</template>

<script>
export default {
  methods: {
    searchRouter () {
      // this.$store.commit('showDetailPlayer', false)
      // this.$router.push({ path: '/search' })
      console.log("我负责跳转")
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./style.scss"
</style>
