<template>
  <div>
    <img :src="imgSrc" height="200" width="200" />
    <h5>{{ title }}</h5>
    <p>{{ description }}</p>
    <p>{{ price }} {{ currency }}</p>
    <Button label="Buy" />
  </div>
</template>

<script>
import Button from "./Button.vue";

export default {
  props: ["title", "description", "imgSrc", "currency", "price"],
  components: {
    Button,
  },
};
</script>

<style>
.container {
  display: flex;
  padding: 10px;
  flex-direction: column;
}
</style>
