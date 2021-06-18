<template>
  <div class="sort" data-test="open-modal" @click="opened = !opened">
    <strong>
      <img
        :class="{rotated: !opened}"
        src="../assets/images/caret.svg"
        alt="">
      Сортировка по:
    </strong>
    <span class="selected">{{ selectedOption.label }}</span>
    <ul v-click-outside="closeModal" class="sort-options" v-if="opened">
      <li
        v-for="option in sortOptions"
        :key="option.label"
      >
        <button
          data-test="sort-btn"
          @click="setSort(option)"
          class="btn-clean">
          {{ option.label }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { SORT_OPTIONS } from '@/constants';
import { FilterOption } from '@/types';

export default defineComponent({
  // sortOptions = SORT_OPTIONS;
  //
  // selectedOption = SORT_OPTIONS[0];
  //
  // opened = false;
  //
  // closeModal(): void {
  //   this.opened = false;
  // }
  //
  // @Emit('on-sort')
  // setSort(val: FilterOption): void {
  //   this.selectedOption = val;
  // }
});
</script>

<style scoped lang="scss">
@import "../assets/scss/variables";

.selected {
  border-bottom: 1px dotted $primary;
  color: $primary;
}

.sort {
  cursor: pointer;
  position: relative;

  &-options {
    position: absolute;
    top: 100%;
    right: 0;
    background: #FFFFFF;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.09);
    border-radius: 10px;
    padding: 13px 0;

    button {
      padding: 10px 14px;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 0.015em;
      display: block;
      width: 100%;
      text-align: left;
      transition: all .3s ease;
      &:hover {
        color: $primary;
        background: rgba($primary, .05);
      }
    }

  }
}

.rotated {
  transform: rotate(180deg);
}

img {
  position: relative;
  top: -3px;
}
</style>
