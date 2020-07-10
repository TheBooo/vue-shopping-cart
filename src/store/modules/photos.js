import axios from "axios";

const state = {
  photos: [],
};

const getters = {
  allPhotos: (state) => state.photos,
};

const actions = {
  async fetchPhotos({ commit }) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/photos?_limit=20"
    );

    commit("setPhotos", response.data);
  },
};

const mutations = {
  setPhotos: (state, photos) => (state.photos = photos),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
