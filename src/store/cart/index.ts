import { Module } from 'vuex';
import { RootState } from '@/store/types';
import { CartState } from '@/store/cart/types';
import { mutations } from '@/store/cart/mutations';
import { getters } from '@/store/cart/getters';

const state: CartState = {
  selected: [],
};

export const cart: Module<CartState, RootState> = {
  state,
  mutations,
  getters,
};
