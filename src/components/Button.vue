<template>
  <button @click.prevent="handleClick">{{ label }}</button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleClick() {},
  },
};
</script>

<style scoped>
button {
  background: rgb(55, 55, 227);
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}
</style>
