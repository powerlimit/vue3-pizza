<template>
  <div class="wrap">
    <div class="d-flex">
      <button
        v-for="dOpt in doughOptions"
        :key="dOpt.title"
        @click="selectDough(dOpt)"
        class="btn-clean col"
        :class="{selected: (dOptSelected === dOpt)}"
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
        :class="{selected: (sOptSelected === sOpt)}"
        data-test="size-btn"
      >{{ sOpt.title }} см.
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { PizzaOption } from '@/types';
import { SIZE_OPTIONS, DOUGH_OPTIONS } from '@/constants';

export default defineComponent({
  // doughOptions = DOUGH_OPTIONS;
  //
  // dOptSelected = this.doughOptions[0];
  //
  // sizeOptions = SIZE_OPTIONS;
  //
  // sOptSelected = this.sizeOptions[0];
  //
  // @Emit('dough-selected')
  // selectDough(val: PizzaOption): void {
  //   this.dOptSelected = val;
  // }
  //
  // @Emit('size-selected')
  // selectSize(val: PizzaOption): void {
  //   this.sOptSelected = val;
  // }
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
