import { Pizza } from '@/types';

export interface CartState {
  selected: Pizza[];
}

export interface TotalAmount {
  qty: number;
  price: string;
}
