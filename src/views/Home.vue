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
    </section>
  </Layout>
</template>

<script>
import Layout from "../components/Layout.vue";
import ProductCard from "../components/ProductCard.vue";

export default {
  components: {
    Layout,
    ProductCard,
  },
  data() {
    return {
      products: [
        {
          title: "dummy-text",
          description: "dummy-text",
          price: 10,
          currency: "DH",
          img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3f3e7049-5c99-428c-abcd-e246b086f2ed/air-force-1-07-mens-shoes-rXkGJX.png",
        },
        {
          title: "dummy-text",
          description: "dummy-text",
          price: 3,
          currency: "DH",
          img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3f3e7049-5c99-428c-abcd-e246b086f2ed/air-force-1-07-mens-shoes-rXkGJX.png",
        },
        {
          title: "dummy-text",
          description: "dummy-text",
          price: 5,
          currency: "DH",
          img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3f3e7049-5c99-428c-abcd-e246b086f2ed/air-force-1-07-mens-shoes-rXkGJX.png",
        },
      ],
      categories: [
        {
          title: "dummy-text",
          description: "dummy-text",
          img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3f3e7049-5c99-428c-abcd-e246b086f2ed/air-force-1-07-mens-shoes-rXkGJX.png",
        },
        {
          title: "dummy-text",
          description: "dummy-text",

          img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3f3e7049-5c99-428c-abcd-e246b086f2ed/air-force-1-07-mens-shoes-rXkGJX.png",
        },
        {
          title: "dummy-text",
          description: "dummy-text",

          img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3f3e7049-5c99-428c-abcd-e246b086f2ed/air-force-1-07-mens-shoes-rXkGJX.png",
        },
      ],
    };
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
