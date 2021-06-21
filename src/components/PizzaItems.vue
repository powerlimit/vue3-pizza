<template>
  <div class="placeholder" v-if="!filtered.length">
    Нет доступных товаров
  </div>
  <div class="grid" v-else>
    <PizzaItem
      v-for="item in filtered"
      :key="item.id"
      :item="item"
    />
  </div>
</template>

<script lang="ts">
import {
  defineComponent, PropType, computed,
} from 'vue';
import PizzaItem from '@/components/PizzaItem.vue';
import { Pizza, PizzaFilterField, PizzaSortField } from '@/types';
import { cloneDeep } from 'lodash';

export default defineComponent({
  name: 'PizzaItems',
  components: { PizzaItem },
  props: {
    items: {
      required: true,
      type: Array as PropType<Pizza[]>,
    },
    order: {
      type: String as PropType<PizzaSortField>,
    },
    filter: {
      type: String as PropType<PizzaFilterField>,
    },
  },
  setup(props) {
    const filtered = computed(() => {
      let data = JSON.parse(JSON.stringify(props.items));

      if (props.filter) {
        data = data.filter((i: Pizza) => i.type === props.filter);
      }
      const order = props.order as PizzaSortField;
      if (order) {
        data = data.sort((a:Pizza, b:Pizza) => {
          return a[order] < b[order] ? -1 : 1;
        });
      }
      return data;
    });

    return {
      filtered,
    };
  },
});
</script>

<style scoped>

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, auto));
}
</style>
