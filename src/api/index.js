import api from "./axios";

// 请求新歌发布和轮播图的数据
export function getNewSongData(){
   return api.get('/m_kugou/?json=true');
}

// 点击播放音乐请求的数据
export function getClickSongs(hash) {
   return api.get(`/m_kugou/api/v1/song/get_song_info?cmd=playInfo&hash=${hash}`)
}
// 点击请求最近热门的数据
export function getHotSongList() {
   return api.get('/mobliecdn_kugou/api/v3/search/hot?format=json&plat=0&count=30').then((res) => {
      return res.data;
   });
}
// 跳转到该搜索页的数据内容
export function getSeachData(keyword) {
   return api.get(`/mobliecdn_kugou/api/v3/search/song?format=json&keyword=${keyword}&page=1&pagesize=30&showtype=1`).then((res) => {
      return res.data;
   })
}