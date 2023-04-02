<template>
  <Layout>
    <section class="featured-products">
      <h4>Featured Product</h4>
      <ul class="grid-container">
        <li class="grid-item" v-for="(product, index) in products" :key="index">
          <ProductCard
            :title="product.title"
            :description="product.description"
            :price="product.price"
            :imgSrc="product.img"
            :currency="product.currency"
          />
        </li>
      </ul>
    </section>
    <section class="categories">
      <h4>Categories</h4>
      <ul class="grid-container">
        <li
          class="grid-item"
          v-for="(category, index) in categories"
          :key="index"
        >
          <CategoryCard
            :imgSrc="category.img"
            :title="category.title"
            :description="categories.description"
          />
        </li>
      </ul>
    </section>
  </Layout>
</template>

<script>
import CategoryCard from "../components/CategoryCard.vue";

import Layout from "../components/Layout.vue";
import ProductCard from "../components/ProductCard.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    Layout,
    ProductCard,
    CategoryCard,
  },
  computed: {
    ...mapGetters({ products: "getProducts", categories: "getCategories" }),
  },
  methods: {
    ...mapActions(["fetchProducts", "fetchCategories"]),
  },
  created() {
    this.fetchProducts();
    this.fetchCategories();
  },
};
</script>

<style>
li {
  list-style-type: none;
  display: grid;
}

.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 10px;
}

.grid-item {
  background-color: #ccc;
  padding: 10px;
}
</style>
