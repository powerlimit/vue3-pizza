import { GetterTree } from 'vuex';
import { RootState } from '@/store/types';
import { CartState, TotalAmount } from '@/store/cart/types';

export const getters:GetterTree<CartState, RootState> = {
  getSelectedPizzaById: (state) => (id: number) => state.selected.find((p) => p.id === id),
  getTotal: ({ selected }): TotalAmount => {
    const totalQty = selected.reduce((acc, val) => acc + val.qty, 0);
    const totalPrice = selected.reduce((acc, val) => acc
      + val.qty * val.size.multiplier * val.dough.multiplier * val.price, 0);

    return {
      qty: totalQty,
      price: totalPrice.toFixed(2),
    };
  },

};
