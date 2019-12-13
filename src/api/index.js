import api from "./axios";

// 请求新歌发布和轮播图的数据
export function getNewSongData(){
   return api.get('/m_kugou/?json=true');
}

// 点击播放音乐请求的数据
export function getClickSongs(hash) {
   return api.get(`/m_kugou/api/v1/song/get_song_info?cmd=playInfo&hash=${hash}`)
}