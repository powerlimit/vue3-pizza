<template>
     <div>
       <div class="d-flex align-center justify-between">
             <PizzaFilter @on-filter="handleFilter" />
             <PizzaSort @on-sort="handleSort" />
       </div>
       <h1 class="h1" style="margin-top: 32px;">Все пиццы</h1>
       <div class="placeholder" v-if="loading">
         Загрузка...
       </div>
       <PizzaItems
         v-else
         :items="items"
         :order="sortOption.value"
         :filter="filterOption.value"
       />
     </div>
</template>

<script lang="ts">
import {
  defineComponent, ref,
} from 'vue';
import { useRouter } from 'vue-router';
import { FILTER_OPTIONS, SORT_OPTIONS } from '@/constants';
import ApiService from '@/serveces/ApiService';
import PizzaFilter from '@/components/PizzaFilter.vue';
import PizzaSort from '@/components/PizzaSort.vue';
import PizzaItems from '@/components/PizzaItems.vue';
import Pizza from '@/types/Pizza';
import FilterOption from '@/types/FilterOption';

export default defineComponent({
  name: 'Home',
  components: {
    PizzaFilter,
    PizzaSort,
    PizzaItems,
  },

  setup() {
    const router = useRouter();

    const items = ref<Pizza[]>([]);
    const sortOption = ref<FilterOption>(SORT_OPTIONS[0]);
    const filterOption = ref<FilterOption>(FILTER_OPTIONS[0]);
    const loading = ref<boolean>(true);

    function handleFilter(val: FilterOption): void {
      filterOption.value = val;
    }

    function handleSort(val: FilterOption): void {
      sortOption.value = val;
    }

    ApiService.getItems().then((res) => {
      items.value = res.data;
    }).catch(() => {
      router.push({ name: 'Error' });
    }).finally(() => {
      loading.value = false;
    });
    return {
      items,
      loading,
      sortOption,
      filterOption,
      handleSort,
      handleFilter,
    };
  },
});
</script>
