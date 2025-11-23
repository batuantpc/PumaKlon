import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useRecentlyViewedStore = defineStore('recentlyViewed', () => {
  const items = ref([])
  const MAX_ITEMS = 5 // Maksimum 5 ürün göster

  // ÜRÜN EKLE
  const addProduct = (product) => {
    // Aynı ürün varsa kaldır (yeniden eklemek için)
    items.value = items.value.filter(item => item.id !== product.id)
    
    // Yeni ürünü başa ekle
    items.value.unshift(product)
    
    // Maksimum sayıyı kontrol et
    if (items.value.length > MAX_ITEMS) {
      items.value = items.value.slice(0, MAX_ITEMS)
    }
    
    console.log('👀 Son gezilenler:', items.value.map(p => p.name))
  }

  // SON GEZİLENLERİ GETİR
  const getRecentProducts = () => {
    return items.value
  }

  // TEMİZLE
  const clearRecent = () => {
    items.value = []
  }

  return {
    items,
    addProduct,
    getRecentProducts,
    clearRecent
  }
})