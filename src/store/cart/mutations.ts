import { MutationTree } from 'vuex';
import { CartState } from '@/store/cart/types';
import { Pizza } from '@/types';

export const mutations: MutationTree<CartState> = {
  ADD_TO_CART(state, payload: Pizza) {
    const idx = state.selected.findIndex((p) => p.id === payload.id);
    if (idx >= 0) {
      const item = state.selected[idx];
      item.qty++;
      item.dough = payload.dough;
      item.size = payload.size;
    } else {
      state.selected.push(payload);
    }
  },
  INCREASE_QTY(state, index: number) {
    state.selected[index].qty++;
  },

  SUBTRACT_QTY(state, index: number) {
    const current = state.selected[index];
    current.qty--;
  },

  REMOVE_ITEM(state, index: number) {
    state.selected.splice(index, 1);
  },

  CLEAR_CART(state) {
    state.selected = [];
  },
};
