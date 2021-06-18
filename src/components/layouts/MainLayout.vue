<template>
  <div class="container">
    <TopBar />
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TopBar from '../TopBar.vue';

export default defineComponent({
  name: 'MainLayout',
  components: {
    TopBar,
  },
});
</script>

<style scoped lang="scss">
@import "../../assets/scss/mixins";
.container {
  max-width: 1340px;
  background: #FFFFFF;
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  min-height: 840px;
  @include media-breakpoint-down(sm) {
    border-radius: 0;
  }
}
.content {
  padding: 40px 38px 35px 77px;
  @include media-breakpoint-down(xl) {
    padding: 30px;
  }

  @include media-breakpoint-down(sm) {
    padding: 15px;
  }
}
</style>
