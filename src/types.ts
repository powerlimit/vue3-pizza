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

export interface PizzaSortFields {
  title: string;
  price: string;
  frequency: string;
}

export interface FilterOption {
  label: string;
  value: string;
}
