import { createStore } from 'vuex';
import productsModule from '@/store/modules/products';
import cartModule from '@/store/modules/cart';

const store = createStore({
  modules: {
    prods: productsModule,
    cart: cartModule,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  getters: {
    isAuthenticated(state) {
      return state.isLoggedIn;
    },
  },
  mutations: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
  actions: {
    login(context) {
      context.commit('login');
    },
    logout(context) {
      context.commit('logout');
    },
  },
});

export default store;
