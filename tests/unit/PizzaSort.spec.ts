import { shallowMount } from '@vue/test-utils';
import PizzaSort from '@/components/PizzaSort.vue';

const mock = jest.fn();
describe('PizzaSort.vue', () => {
  it('Emits event when clicked button', async () => {
    const wrapper = shallowMount(PizzaSort, {
      global: {
        directives: {
          'click-away': mock,
        },
      },
    });
    const openModal = wrapper.find('[data-test=open-modal]');
    openModal.trigger('click');
    await wrapper.vm.$nextTick();
    const button = wrapper.find('[data-test=sort-btn]');
    button.trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted('on-sort')).toBeTruthy();
  });
});
