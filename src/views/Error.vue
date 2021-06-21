<template>
  <div>
    <h1 class="h1">
      Ошибка сети. <br>
      <router-link :to="{name: 'Home'}">Вернитесь на главную</router-link>
      или повторите попытку позже.
    </h1>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Error',
});
</script>

<style scoped>

</style>
