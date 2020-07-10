<template>
  <div class="cart-container">
    <div v-for="item in allCart" :key="item.id" class="item-container">
      <div class="item-info">
        <div class="image">
          <img :src="item.thumbnailUrl" :alt="item.title" />
        </div>
        <div class="title">{{ item.title }}</div>
      </div>
      <div class="amount-container">
        <button @click="decreaseAmount(item)" class="btn">-</button>
        <span class="amount">{{ item.amount }}</span>
        <button @click="increaseAmount(item)" class="btn">+</button>
        <button @click="removeItem(item.id)" class="btn btn-del">
          <Delete /> Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import Delete from "vue-material-design-icons/Delete";

export default {
  name: "Cart",
  components: { Delete },
  computed: mapGetters(["allCart"]),
  methods: {
    ...mapActions(["getCart", "deleteItem", "updateItem"]),

    increaseAmount(item) {
      item.amount += 1;
      this.updateItem(item);
    },

    decreaseAmount(item) {
      if (item.amount > 1) {
        item.amount -= 1;
        this.updateItem(item);
      }
    },

    removeItem(id) {
      this.deleteItem(id);
      this.getCart();
    },
  },

  created() {
    this.getCart();
  },
};
</script>

<style scoped>
.cart-container {
  width: 90vw;
  margin: 1rem auto;
  max-width: 1170px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.item-container {
  -webkit-box-shadow: 0px 0px 5px 2px rgba(120, 120, 120, 0.3);
  -moz-box-shadow: 0px 0px 5px 2px rgba(120, 120, 120, 0.3);
  box-shadow: 0px 0px 5px 2px rgba(120, 120, 120, 0.3);
}
.item-info {
  display: flex;
}
.image {
  padding: 1rem;
}
.title {
  padding: 1rem;
  font-weight: 500;
  font-size: 1.2rem;
}

.amount-container {
  display: flex;
  align-items: center;
  padding: 0 1rem;
}
.btn {
  padding: 0.5rem;
  margin: 0.5rem;
  background-color: lightblue;
  border: none;
  cursor: pointer;
}
.btn:hover {
  background-color: lightgreen;
}
.btn-del {
  margin: 1.5rem;
  color: lightblue;
  font-size: 1rem;
  background-color: darkred;
  display: flex;
  align-items: center;
}
.amount {
  margin: 0.5rem;
}
</style>
