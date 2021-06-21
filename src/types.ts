export interface PizzaOption {
  title: string;
  multiplier: number;
}

export interface Pizza {
  id: number;
  title: string;
  price: number;
  image: string;
  type: string;
  frequency: number;
  qty?: number;
  size?: PizzaOption;
  dough?: PizzaOption;
}

export type PizzaSortField = 'title' | 'price' | 'frequency';
export type PizzaFilterField = '' | 'meet' | 'vegan' | 'grill' | 'hot' | 'closed';

export interface FilterOption {
  label: string;
  value: string;
}

export interface HomeState {
  loading: boolean;
  items: Pizza[];
  sortOption: FilterOption;
  filterOption: FilterOption;
}
