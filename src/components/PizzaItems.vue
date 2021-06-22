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
import Pizza from '@/types/Pizza';
import PizzaSortField from '@/types/PizzaSortField';
import PizzaFilterField from '@/types/PizzaFilterField';

export default defineComponent({
  props: {
    items: {
      type: Array as PropType<Pizza[]>,
      required: true,
    },
    order: {
      type: String as PropType<PizzaSortField>,
    },
    filter: {
      type: String as PropType<PizzaFilterField>,
    },
  },
  name: 'PizzaItems',
  components: { PizzaItem },
  setup(props) {
    const filtered = computed(() => {
      const items = props.items as Pizza[];
      let data = [...items];

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
.placeholder {
  margin-top: 20px;
  font-size: 20px;
  font-weight: 700;
}
</style>
