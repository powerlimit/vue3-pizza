import Pizza from '@/types/Pizza';

export interface CartState {
  selected: Pizza[];
}

export interface TotalAmount {
  qty: number;
  price: string;
}
