<template>
  <nav class="nav-container">
    <div class="logo-container">logo</div>
    <ul class="links-container">
      <router-link to="/" class="link-item">Home</router-link>
      <router-link to="/about" class="link-item">About</router-link>
      <router-link to="/contact" class="link-item">Contact</router-link>
    </ul>
    <img
      class="cart-icon"
      :src="cartIcon"
      height="24"
      width="24"
      @click="cartIconHandleClick"
    />
    <img class="user-icon" :src="userIcon" height="24" width="24" />
  </nav>
</template>

<script>
import cartIcon from "@/assets/cart.svg";
import userIcon from "@/assets/person.svg";

export default {
  data() {
    return {
      cartIcon,
      userIcon,
    };
  },
  methods: {
    cartIconHandleClick() {
      alert("Hi!");
    },
  },
};
</script>

<style>
.nav-container {
  height: 100px;
  width: 100%;
  display: flex;
  background: black;
  color: white;
  justify-content: center;
  align-items: center;
  padding: 10px;
}
.logo-container {
  width: 100px;
  margin-left: 24px;
}

.links-container {
  flex: 1;
  display: flex;
  flex-direction: row;
}

.link-item {
  display: inline-block;
  margin: 5px;
  cursor: pointer;
  text-decoration: none;
  color: white;
}

.user-icon {
  margin-right: 24px;
  cursor: pointer;
}

.cart-icon {
  margin-right: 24px;
  cursor: pointer;
}
</style>
