import { mutations } from '@/store/cart/mutations';
import { CartState } from '@/store/cart/types';
import { PizzaFixture } from './fixtures';

const {
  ADD_TO_CART, INCREASE_QTY, CLEAR_CART, SUBTRACT_QTY, REMOVE_ITEM,
} = mutations;

const state:CartState = {
  selected: [],
};

describe('mutations', () => {
  it('ADD_TO_CART', () => {
    const payload = PizzaFixture;

    ADD_TO_CART(state, payload);
    ADD_TO_CART(state, payload);
    expect(state.selected).toHaveLength(1);
  });

  it('INCREASE_QTY', () => {
    INCREASE_QTY(state, 0);
    expect(state.selected[0].qty).toEqual(3);
  });

  it('SUBTRACT_QTY', () => {
    SUBTRACT_QTY(state, 0);
    expect(state.selected[0].qty).toEqual(2);
  });

  it('REMOVE_ITEM', () => {
    REMOVE_ITEM(state, 0);
    expect(state.selected).toHaveLength(0);
  });

  it('CLEAR_CART', () => {
    CLEAR_CART(state);
    expect(state.selected).toHaveLength(0);
  });
});
