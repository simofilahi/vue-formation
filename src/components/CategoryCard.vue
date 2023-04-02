<template>
  <div class="container">
    <img class="img" :src="imgSrc" :alt="alt" />
    <h5>{{ title }}</h5>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: ["imgSrc", "alt", "title", "description"],
};
</script>

<style scoped>
.container {
  display: flex;
  padding: 10px;
  flex-direction: column;
  cursor: pointer;
}
.img {
  height: 100%;
  width: 100%;
}
</style>
