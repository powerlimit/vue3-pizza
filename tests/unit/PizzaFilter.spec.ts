import { shallowMount } from '@vue/test-utils';
import PizzaFilter from '@/components/PizzaFilter.vue';

const mock = jest.fn();
describe('PizzaSort.vue', () => {
  it('Emits event when clicked', async () => {
    const wrapper = shallowMount(PizzaFilter, {
      global: {
        directives: {
          'click-away': mock,
        },
      },
    });
    const button = wrapper.findAll('[data-test=pizza-filter]')[1];
    button.trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted('on-filter')).toBeTruthy();
  });
});
