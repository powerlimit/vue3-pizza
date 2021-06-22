import { shallowMount } from '@vue/test-utils';
import PizzaItemOptions from '@/components/PizzaItemOptions.vue';
import { DOUGH_OPTIONS, SIZE_OPTIONS } from '@/constants';

describe('PizzaSort.vue', () => {
  it('Emits event with params when clicked buttons', async () => {
    const wrapper = shallowMount(PizzaItemOptions);
    await wrapper
      .findAll('[data-test=dough-btn]')[0]
      .trigger('click');
    expect(wrapper.emitted('dough-selected')[0]).toEqual([DOUGH_OPTIONS[0]]);
    await wrapper
      .findAll('[data-test=size-btn]')[1]
      .trigger('click');
    expect(wrapper.emitted('size-selected')[0]).toEqual([SIZE_OPTIONS[1]]);
  });
});
