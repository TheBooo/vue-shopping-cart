<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">
      <div class="cart">
        Cart
        <span class="counter">{{counter}}</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Navbar",
  computed: {
    ...mapGetters(["allCart"]),
    counter: function() {
      return this.allCart.length;
    }
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["getCart"])
  },
  created() {
    this.getCart();
  }
};
</script>

<style scoped>
#nav {
  padding: 30px;
  background-color: lightblue;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 80px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
.cart {
  position: relative;
  padding: 1rem;
}
.counter {
  background-color: bisque;
  padding: 0.05rem;
  border-radius: 0.5rem;
  position: absolute;
  right: 0;
  bottom: 0;
}
</style>