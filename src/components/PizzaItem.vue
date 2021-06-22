<template>
  <div class="item flex-box">
    <img :src="require(`../assets/images/${item.image}.png`)" alt="">
    <h3 class="h3 text-center">{{item.title}}</h3>
    <PizzaItemOptions
      v-on="{'dough-selected': handleDoughSelect, 'size-selected': handleSizeSelect}"
      style="margin-bottom: 17px;"
    />
    <div class="d-flex justify-between align-center">
      <strong>{{totalPrice}} ₽</strong>
      <button @click="handleAddToCart" class="btn-clean btn-add">
        + Добавить
        <span class="selected-count" v-if="selectedItem">{{selectedItem.qty}}</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, computed, reactive, PropType,
} from 'vue';
import { useStore } from 'vuex';

import PizzaItemOptions from '@/components/PizzaItemOptions.vue';
import { DOUGH_OPTIONS, SIZE_OPTIONS } from '@/constants';
import PizzaOption from '@/types/PizzaOption';
import Pizza from '@/types/Pizza';

export default defineComponent({
  props: {
    item: {
      type: Object as PropType<Pizza>,
      required: true,
    },
  },

  components: {
    PizzaItemOptions,
  },

  setup(props) {
    const store = useStore();
    const state = reactive({
      dough: DOUGH_OPTIONS[0] as PizzaOption,
      size: SIZE_OPTIONS[0] as PizzaOption,
    });

    function handleDoughSelect(val: PizzaOption): void {
      state.dough = val;
    }

    function handleSizeSelect(val: PizzaOption): void {
      state.size = val;
    }
    const item = props.item as Pizza;
    function handleAddToCart(): void {
      store.commit('ADD_TO_CART', {
        ...item,
        size: state.size,
        dough: state.dough,
        qty: 1,
      });
    }

    const totalPrice = computed(() => {
      return (item.price * state.dough.multiplier * state.size.multiplier).toFixed(2);
    });

    const selectedItem = computed(() => {
      return store.getters.getSelectedPizzaById(item.id);
    });

    return {
      totalPrice,
      selectedItem,
      handleDoughSelect,
      handleSizeSelect,
      handleAddToCart,
    };
  },

});
</script>

<style scoped lang="scss">
@import "../assets/scss/variables";
.item {
  margin-top: 30px;
  padding: 35px 17.5px;
  img {
    max-width: 100%;
    margin: 0 auto;
  }
}
.h3 {
  font-weight: 800;
  font-size: 20px;
  margin-bottom: 20px;
}

.selected-count {
  display: inline-block;
  width: 22px;
  line-height: 22px;
  background: $primary;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  color: #ffffff;
  transition: all .3s ease;
  margin-left: 3px;
}

.btn-add {
  border-radius: $btn-border-radius;
  height: 40px;
  line-height: 40px;
  border: 1px solid $primary;
  font-weight: bold;
  padding: 0 17px;
  color: $primary;
  transition: all .3s ease;
  &:hover {
    background: $primary;
    color: #fff;
    .selected-count {
      color: $primary;
      background: #fff;
    }
  }
}
</style>
