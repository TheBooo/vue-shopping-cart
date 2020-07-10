<template>
  <main class="photos-container">
    <div v-for="photo in allPhotos" :key="photo.id" class="photo-container">
      <div class="image-container">
        <img :src="photo.url" :alt="photo.title" class="image" />
      </div>
      <div class="title">{{photo.title.slice(0, 20)}}</div>
      <button @click="addToCart(photo)">Add to cart</button>
    </div>
  </main>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Photos",
  computed: mapGetters(["allPhotos"]),
  data() {
    return {};
  },
  methods: {
    ...mapActions(["fetchPhotos", "addCartItem"]),
    addToCart(photo) {
      console.log(photo);
      this.addCartItem(photo);
      alert(`${photo.title} added to the cart`);
    }
  },
  created() {
    this.fetchPhotos();
  }
};
</script>

<style scoped>
button {
  padding: 0.5rem;
  background-color: lightblue;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: #42b983;
}

.photos-container {
  width: 90vw;
  margin: 1rem auto;
  max-width: 1170px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  grid-column-gap: 1.5rem;
  grid-row-gap: 2rem;
}
.photo-container {
  border: 1px solid lightblue;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
.image-container {
  overflow: hidden;
  display: flex;
  justify-content: center;
}
.image {
  height: 14rem;
  width: auto;
}
.title {
  padding: 0.5rem;
  font-weight: 500;
  font-size: 1.2rem;
  margin: 0 auto;
}
</style>