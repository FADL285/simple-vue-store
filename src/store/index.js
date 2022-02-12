import { createStore } from 'vuex';
import productsModule from '@/store/modules/products';
import cartModule from '@/store/modules/cart';

const store = createStore({
  modules: {
    prods: productsModule,
    cart: cartModule,
  },
});

export default store;
