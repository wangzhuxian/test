<template>
<div>
  <music-header></music-header>
</div>
</template>

<script>
import MusicHeader from "@/components/Header";
export default {
  components: {
    "music-header" : MusicHeader,
  }
};
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
