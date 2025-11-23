import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFavoritesStore = defineStore('favorites', () => {
  const favorites = ref([])

  function toggleFavorite(product) {
    const index = favorites.value.findIndex(p => p.id === product.id)
    if (index >= 0) {
      favorites.value.splice(index, 1) // varsa kaldır
    } else {
      favorites.value.push(product) // yoksa ekle
    }
  }

  return { favorites, toggleFavorite }
})
