// 自定义mock数据
const products = [
  { id: 1, title: 'app', price: 400, inventory: 2 },
  { id: 2, title: 'phone', price: 500, inventory: 5 },
  { id: 3, title: 'call', price: 600, inventory: 3 }
]
// 商品数据列表
export const getProducts = async () => {
  await wait(100)
  return products
}
// 购买商品状态
export const buyProducts = async () => {
  await wait(100)
  return Math.random() > 0.5
}

async function wait(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay))
}
