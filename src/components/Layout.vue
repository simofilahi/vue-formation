<template>
  <div>
    <Header />
    <main class="main">
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
.main {
  padding: 50px 20px;
  height: 100%;
}
</style>
