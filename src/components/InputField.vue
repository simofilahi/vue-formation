<template>
  <div class="form-group">
    <label :for="name">{{ label }}</label>
    <input
      :type="type"
      :id="name"
      :name="name"
      :value="value"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "text",
    },
    value: {
      type: [String, Number],
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      id: `input-${Math.floor(Math.random() * 10000)}`,
    };
  },
};
</script>

<style scoped>
input {
  padding: 10px;
  width: 200px;
}
label {
  display: block;
}
</style>
