const state = {
  cart: [],
};

const getters = {
  allCart: (state) => state.cart,
};

const actions = {
  getCart({ commit }) {
    const cartData = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    commit("setCart", cartData);
  },

  addItem({ commit }, item) {
    //old items
    const cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    cart.push(item); //add new one
    localStorage.setItem("cart", JSON.stringify(cart));
    commit("newItem", item);
  },

  deleteItem({ commit }, id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart = cart.filter((item) => item.id !== id); //delete one
    localStorage.setItem("cart", JSON.stringify(cart));
    commit("removeItem", id);
  },

  updateItem({ commit }, updateItem) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart = cart.map((item) => (item.id === updateItem.id ? updateItem : item));
    localStorage.setItem("cart", JSON.stringify(cart));
    commit("updateItem", updateItem);
  },
};

const mutations = {
  setCart: (state, data) => (state.cart = data),
  newItem: (state, item) => state.cart.push(item),
  removeItem: (state, id) =>
    (state.cart = state.cart.map((item) => item.id !== id)),
  updateItem: (state, updateItem) =>
    (state.cart = state.cart.map((item) =>
      item.id === updateItem.id ? updateItem : item
    )),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
