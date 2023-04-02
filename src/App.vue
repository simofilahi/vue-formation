<template>
  <router-view class="router-container"></router-view>
</template>

<script>
import Button from "./components/Button.vue";
import Input from "./components/InputField.vue";
import Modal from "./components/Modal.vue";
import Layout from "./components/Layout.vue";
import Home from "./views/Home.vue";

export default {
  components: {
    Button,
    Input,
    Modal,
    Layout,
    Home,
  },
  data() {
    return {
      email: "",
    };
  },
};
</script>

<style scoped>
.router-container {
  height: 100%;
  width: 100%;
}
</style>
