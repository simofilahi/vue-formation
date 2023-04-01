<template>
  <nav class="nav-container">
    <div class="logo-container">logo</div>
    <ul class="links-container">
      <li class="link-item">Home</li>
      <li class="link-item">About</li>
      <li class="link-item">Contact Us</li>
    </ul>
    <div class="user-icon">user icon</div>
  </nav>
</template>

<script>
export default {};
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
}

.user-icon {
  margin-right: 24px;
}
</style>
