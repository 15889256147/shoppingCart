<template>
  <ul>
    <li v-for="item in produceStore.all">
      {{ item.title }} - {{ item.price }}
      <br>
      <button :disabled="!item.inventory" @click="cartStore.addProductToCart(item)">添加到购物车</button>
    </li>
  </ul>
</template>

<script setup>
import { useProductsStore } from '../store/product'
import { useCartStore } from '../store/cart'

const produceStore = useProductsStore()
const cartStore = useCartStore()

produceStore.loadAllProduct()
</script>

<style>

</style>