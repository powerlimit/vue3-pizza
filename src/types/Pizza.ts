import PizzaOption from '@/types/PizzaOption';

interface Pizza {
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

export default Pizza;
