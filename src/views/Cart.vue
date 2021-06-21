<template>
  <div class="cart">
    <div class="cart-body" v-if="selectedItems.length">
      <div class="d-flex align-center justify-between">
        <h1 class="h1">
          <img src="../assets/images/iconfinder_shopping-cart.svg" alt="">&nbsp;
          Корзина
        </h1>
        <button class="btn-clean btn-clear-cart" @click="handleClearCart">
          <img src="../assets/images/trash.svg" alt=""> Очистить корзину
        </button>
      </div>
      <CartItem
        v-for="(item, idx) in selectedItems"
        :key="item.id"
        :item="item"
        :index="idx"
      />
      <div class="total mt-54">
        <span>Всего пицц: <strong>{{total.qty}} шт.</strong></span>
        <span>
          Сумма заказа:
          <strong class="text-primary">{{total.price}} ₽</strong>
        </span>
      </div>
      <div class="d-flex justify-between mt-54">
        <router-link to="/" class="btn-back-outlined btn">
          <img src="../assets/images/angle.svg" alt=""> Вернуться назад
        </router-link>
        <button class="btn btn-clean btn-primary" @click="handleCheckout">Оплатить сейчас</button>
      </div>
    </div>
    <div v-else class="empty flex-box align-center text-center">
      <h1 class="h1 d-flex align-center">
        Корзина пустая&nbsp;<img src="../assets/images/smile.png" alt="">
      </h1>
      <p>
        Вероятней всего, вы не заказывали ещё пиццу. <br>
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img class="cart-img" src="../assets/images/cart-empty.svg" alt="">
      <router-link class="btn-back" to="/">Вернуться назад</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { createToast } from 'mosha-vue-toastify';
import { Pizza } from '@/types';
import CartItem from '@/components/CartItem.vue';
import { CartState, TotalAmount } from '@/store/cart/types';
import { useStore } from 'vuex';

export default defineComponent({
  components: { CartItem },

  setup() {
    const store = useStore();
    const selectedItems = computed<Pizza[]>(() => {
      return store.state.cart.selected;
    });
    const total = computed<TotalAmount>(() => store.getters.getTotal);

    function handleClearCart(): void {
      // eslint-disable-next-line no-restricted-globals,no-alert
      const confirmed = confirm('Вы действительно хотите очистить корзину?');
      if (confirmed) {
        store.commit('CLEAR_CART');
      }
    }

    function handleCheckout(): void {
      createToast({
        title: 'Ваш заказ оформлен успешно!',
        type: 'success',
      });
      store.commit('CLEAR_CART');
    }

    return {
      handleClearCart,
      handleCheckout,
      selectedItems,
      total,
    };
  },

});
</script>

<style scoped lang="scss">
@import "../assets/scss/mixins";
.cart {
  &-img {
    margin-bottom: 74px;
    max-width: 100%;
  }
  &-body {
    max-width: 820px;
    margin: auto;
  }
}
.empty {
  padding-top: 160px;
}
p {
  margin-top: 10px;
  margin-bottom: 45px;
  font-size: 18px;
  line-height: 145.4%;
  letter-spacing: 0.01em;
  color: #777777;
}

.btn-back {
  background: $dark;
  color: #ffffff;
  text-decoration: none !important;
  font-weight: 700;
  padding: 14px 20px;
  border-radius: $btn-border-radius;
  transition: background-color .3s ease;
  &:hover {
    background: lighten($dark, 10%);
  }
}

.btn-clear-cart {
  color: #B6B6B6;
  display: flex;
  align-items: center;
}
.total {
  font-size: 22px;
  line-height: 27px;
  letter-spacing: 0.01em;
  color: #000000;
  display: flex;
  justify-content: space-between;
  @include media-breakpoint-down(sm) {
    flex-direction: column;
  }
}
.btn {
  border-radius: $btn-border-radius;
  width: 211px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none !important;
  transition: all .3s ease;
  font-weight: bold;
  &:hover {
    box-shadow: 0 3px 3px rgba(#D0D0D0, .8);
  }
  img {
    margin-right: 5px;
  }
  &-back-outlined {
    border: 1px solid #CACACA;
    color: #CACACA;
  }
  &-primary {
    color: #fff;
    background: $primary;
  }
}
</style>
