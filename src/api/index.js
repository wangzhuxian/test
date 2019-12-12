import api from "./axios";

// 请求新歌发布和轮播图的数据
export function getNewSongData(){
   return api.get('/m_kugou/?json=true');
}
