import { defineStore } from 'pinia'
import { useProductsStore } from './product'
import { buyProducts } from '../api/shop'

export const useCartStore = defineStore('cart', {
  state() {
    return {
      // 购物车数据列表
      carProduct: [],
      // 支付状态
      checkStatus: null
    }
  },
  getters: {
    // 计算总金额
    totalCart(state) {
      return state.carProduct.reduce((total, item) => {
        return (total += item.price * item.quantity)
      }, 0)
    }
  },
  actions: {
    // 添加购物车数据
    addProductToCart(product) {
      // 商品库存不足
      if (product.inventory < 0) return
      // 查询购物车是否存在该物品，若存在，则数量++；若不存在，则push并且数量为1
      let cartItem = this.carProduct.find((item) => item.id == product.id)
      if (cartItem) {
        cartItem.quantity++
      } else {
        this.carProduct.push({ ...product, quantity: 1 })
      }
      // 商品列表数据--
      const productsStore = useProductsStore()
      productsStore.decrementProduct(product)
    },
    // 购物车结算
    async checkCart() {
      const ret = await buyProducts()
      this.checkStatus = ret ? '成功' : '失败'
    }
  }
})
