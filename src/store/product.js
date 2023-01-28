import { defineStore } from 'pinia'
import { getProducts } from '../api/shop'

export const useProductsStore = defineStore('product', {
  state: () => {
    return {
      all: []
    }
  },
  getters: {},
  actions: {
    // 获取商品数据列表
    async loadAllProduct() {
      const ret = await getProducts()
      this.all = ret
    },
    // 删减商品数据
    decrementProduct(product) {
      const item = this.all.find((item) => item.id == product.id)
      if (item.inventory > 0) item.inventory--
    }
  }
})
