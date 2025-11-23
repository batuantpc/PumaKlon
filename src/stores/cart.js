import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const items = ref([])

  const addToCart = (product) => {
    const existingItem = items.value.find(item => item.id === product.id)
    
    if (existingItem) {
      existingItem.quantity += 1
    } else {
      items.value.push({
        ...product,
        quantity: 1
      })
    }
    console.log('🛒 Sepete eklendi:', product.name, 'Sepet:', items.value)
  }

  const removeFromCart = (productId) => {
    items.value = items.value.filter(item => item.id !== productId)
  }

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId)
      return
    }
    
    const item = items.value.find(item => item.id === productId)
    if (item) {
      item.quantity = newQuantity
    }
  }

  const totalPrice = () => {
    return items.value.reduce((total, item) => {
      return total + (item.price * item.quantity)
    }, 0)
  }

  const totalItems = () => {
    return items.value.reduce((total, item) => total + item.quantity, 0)
  }

  const clearCart = () => {
    items.value = []
  }

  return {
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    totalPrice,
    totalItems,
    clearCart
  }
})