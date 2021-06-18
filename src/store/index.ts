import { StoreOptions, createStore } from 'vuex';
import { RootState } from './types';
import { cart } from './cart';

const store: StoreOptions<RootState> = {
  modules: {
    cart,
  },
};

export default createStore(store);
