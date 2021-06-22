<template>
  <div class="wrap">
    <div class="d-flex">
      <button
        v-for="dOpt in doughOptions"
        :key="dOpt.title"
        @click="selectDough(dOpt)"
        class="btn-clean col"
        :class="{selected: (state.dOptSelected.title === dOpt.title)}"
        data-test="dough-btn"
      >{{ dOpt.title }}
      </button>
    </div>
    <div class="d-flex">
      <button
        v-for="sOpt in sizeOptions"
        :key="sOpt.title"
        @click="selectSize(sOpt)"
        class="btn-clean col"
        :class="{selected: (state.sOptSelected.title === sOpt.title)}"
        data-test="size-btn"
      >{{ sOpt.title }} см.
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { SIZE_OPTIONS, DOUGH_OPTIONS } from '@/constants';
import PizzaOption from '@/types/PizzaOption';

export default defineComponent({
  emits: ['dough-selected', 'size-selected'],
  setup(props, { emit }) {
    const state = reactive({
      dOptSelected: DOUGH_OPTIONS[0],
      sOptSelected: SIZE_OPTIONS[0],
    });

    function selectDough(val: PizzaOption): void {
      state.dOptSelected = val;
      emit('dough-selected', val);
    }

    function selectSize(val: PizzaOption): void {
      state.sOptSelected = val;
      emit('size-selected', val);
    }

    return {
      state,
      doughOptions: DOUGH_OPTIONS,
      sizeOptions: SIZE_OPTIONS,
      selectDough,
      selectSize,
    };
  },
});
</script>

<style scoped lang="scss">
@import "../assets/scss/variables";

.wrap {
  background: #F3F3F3;
  padding: 3px;
  width: 100%;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
}

button {
  margin: 3px;
  height: 32px;
  line-height: 32px;
  font-weight: 700;
  font-size: 14px;
  border-radius: 5px;
  transition: all .3s ease;

  &.selected {
    background: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
  }
}
</style>
