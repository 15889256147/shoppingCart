<template>
  <div class="cart">
    <h2>你的购物车</h2>
    <p>
    <ul>
      <li v-for="item in cartStore.carProduct">{{ item.title }} - {{ item.price }} x {{ item.quantity }}</li>
    </ul>
    <p>商品总价：{{ cartStore.totalCart }}</p>
    <p>
      <button @click="cartStore.checkCart">结算</button>
    </p>
    <p v-show="cartStore.checkStatus">结算{{ cartStore.checkStatus }}!</p>
    </p>
  </div>
</template>

<script setup>
import { useCartStore } from '../store/cart'
const cartStore = useCartStore()

</script>

<style>

</style>