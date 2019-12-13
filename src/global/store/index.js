import { getClickSongs } from '@/api';
import api from '@/api/axios';
export default {
  namespaced: true,
  state: {
    head: {
      toggle: false,
      title: '',
      style: { background: 'rgba(43,162,251,0)' }
    },
    audio: {
      songUrl: '',
      imgUrl: 'http://m.kugou.com/v3/static/images/index/logo_kugou.png',
      title: '',
      singer: '',
      currentLength: 0,
      songLength: 0,
      currentFlag: false
    },
    audioLoading: false,
    detailPlayerFlag: false,
    showPlayer: false, // 播放详情 默认false
    listenCount: 0,
    isPlay: true,
    listInfo: {
      songList: [],
      songIndex: 0
    }
  },
  getters: {
    detailPlayerFlag: state => state.detailPlayerFlag,
    audio: state => state.audio,
    head: state => state.head,
    audioLoading: state => state.audioLoading,
    showPlayer: state => state.showPlayer,
    isPlay: state => state.isPlay
  },
  mutations: {
    // 点击播放按钮要执行的操作
    setAudio(state, audio) {
      if (state.listenCount !== 0) {
        state.showPlayer = true;
      }
      state.listenCount++;
      state.audio = { ...state.audio, audio };
    },
    // 点击切换的加载操作
    toggleAudioLoading(state, flag) {
      state.audioLoading = flag;
    },
    // 播放闲情的标志
    handleDetailPlayerFlag(state, payload) {
      state.detailPlayerFlag = payload.flag;
    },

    // 当更改时间进度的时候执行的操作
    setCurrent(state, payload) {
      state.currentFlag = payload.flag;
    },

    setLrc (state, lrc) {
      state.audio = { ...state.audio, lrc };
    },

    setListInfo(state, payload) {
      console.log('setListsInfo', payload);
      state.listInfo.songList = payload.songList;
      state.listInfo.songIndex = payload.songIndex;
    },
    isNowPlay: (state, payload) => {
      state.isPlay = payload.flag;
    }
  },
  actions: {
    // 获取播放音乐的数据
    getSongs({ commit }, hash) {
      if (hash) {
        commit('toggleAudioLoading', true); // 执行动作加载
        getClickSongs(hash).then(res => {
          console.log(res);
          const songUrl = res.url;
          const imgUrl = res.imgUrl.replace('{size}', 400);
          const title = res.songName;
          const songLength = res.timeLength;
          const singer = res.singerName;
          const currentLength = 0;
          const audio = {
            songUrl,
            imgUrl,
            title,
            singer,
            songLength,
            currentLength
          };
          commit('setAudio', audio);
          commit('toggleAudioLoading', false);
        });
      }
    },
    getLrc({ commit }, { hash, timelength }) {
      if (hash && timelength) {
        api
          .get(
            `/m_kugou/app/i/krc.php?cmd=100&timelength=${timelength}&hash=${hash}`
          )
          .then(res => {
            commit('setLrc', res.data);
          });
      }
    },
    prevNext({ dispatch, state },type) {
      let { songList, index } = state.listInfo;
      if (type === 'next') {
        index <= 0 ? songList.length - 1 : --index;
      } else {
        index === songList.length - 1 ? 0 : ++index;
      }
      const hash = songList[index] && songList[index].hash;
      dispatch('getSong', hash);
    }
  }
};
