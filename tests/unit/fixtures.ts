import Pizza from '@/types/Pizza';
import { DOUGH_OPTIONS, SIZE_OPTIONS } from '@/constants';

export const PizzaFixture:Pizza = {
  id: 1,
  title: 'Pizza',
  qty: 1,
  dough: DOUGH_OPTIONS[0],
  size: SIZE_OPTIONS[0],
  type: 'type',
  image: 'fixture',
  frequency: 1,
  price: 1,
};
