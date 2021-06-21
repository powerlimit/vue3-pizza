<template>
     <div>
       <div class="d-flex align-center justify-between">
         <!--    <PizzaFilter @on-filter="handleFilter" />-->
         <!--    <PizzaSort @on-sort="handleSort" />-->
       </div>
       <h1 class="h1" style="margin-top: 32px;">Все пиццы</h1>
       <div class="placeholder" v-if="loading">
         Загрузка...
       </div>
       <div class="placeholder" v-else-if="!filtered.length">
         Нет доступных товаров
       </div>
       <div class="grid" v-else>
         <PizzaItem
           v-for="item in filtered"
           :key="item.id"
           :item="item"
         />
       </div>
     </div>

</template>

<script lang="ts">
import { defineComponent, toRefs, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { FILTER_OPTIONS, SORT_OPTIONS } from '@/constants';
import { FilterOption, Pizza, PizzaSortFields } from '@/types';
import { cloneDeep } from 'lodash';
import ApiService from '@/serveces/ApiService';
// import PizzaFilter from '@/components/PizzaFilter.vue';
// import PizzaSort from '@/components/PizzaSort.vue';
import PizzaItem from '@/components/PizzaItem.vue';

export default defineComponent({
  name: 'Home',
  components: {
    // PizzaFilter,
    // PizzaSort,
    PizzaItem,
  },

  setup() {
    const router = useRouter();

    const state = reactive({
      loading: true,
      items: [] as Pizza[],
      filtered: [] as Pizza[],
      sortOption: SORT_OPTIONS[0] as FilterOption,
      filterOption: FILTER_OPTIONS[0] as FilterOption,
    });
    function filterItems(): void {
      const data = cloneDeep(state.items);
      if (state.filterOption.value) {
        state.filtered = data.filter((i: Pizza) => i.type === state.filterOption.value);
      }
      const sortField = state.sortOption.value as keyof PizzaSortFields;
      if (sortField) {
        state.filtered = data.sort((a, b) => (a[sortField] < b[sortField] ? -1 : 1));
      }
    }

    ApiService.getItems().then((res) => {
      state.loading = false;
      state.items = res.data;
      filterItems();
    }).catch(() => {
      router.push({ name: 'Error' });
    });
    return {
      ...toRefs(state),
    };
  },
});
</script>
<style scoped lang="scss">

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
