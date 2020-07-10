<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>
<script>
import Navbar from "./components/Navbar";
export default {
  components: { Navbar }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: var(--main-cursive-font);
  line-height: 1.4;
  letter-spacing: 0.1rem;
}
a {
  text-decoration: none;
}
</style>
