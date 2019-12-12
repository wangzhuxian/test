<template>
  <div id="app">
    <music-header></music-header>
    <div style="margin-top: 100px;">
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
  </div>
</template>
<script>
import MusicHeader from '@/components/Header';
export default {
  components: {
    'music-header': MusicHeader
  }
};
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
