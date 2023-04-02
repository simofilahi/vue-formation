import { createApp } from "vue";
import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      products: null,
      categories: null,
    };
  },
  mutations: {
    setCategories(state, data) {
      //   console.log({ data });
      state.categories = data;
    },
    setProducts(state, data) {
      console.log({ data });
      state.products = data;
    },
  },
  actions: {
    fetchProducts(context) {
      fetch("http://localhost:3000/products", { method: "get" })
        .then((res) => res.json())
        .then((res) => context.commit("setProducts", res))
        .catch((e) => console.log(e));
    },
    fetchCategories(context) {
      fetch("http://localhost:3000/categories", { method: "get" })
        .then((res) => res.json())
        .then((res) => {
          context.commit("setCategories", res);
        })
        .catch((e) => console.log(e));
    },
  },
  getters: {
    getProducts(state) {
      return state.products;
    },
    getCategories(state) {
      return state.categories;
    },
  },
});

export default store;
