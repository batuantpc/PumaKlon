<template>
  <div class="favorites-page">
    <div class="container">
      <h1 class="page-title">❤️ Favorilerim</h1>
      
      <div v-if="favorites.length === 0" class="empty-favorites">
        <div class="empty-icon">🤍</div>
        <h2>Henüz favori ürününüz yok</h2>
        <p>Favorilere eklemek istediğiniz ürünlerikalp ikonuna tıklayarak favorilere ekleyebilirsiniz.</p>
        <button @click="$router.push('/')" class="shop-btn">Alışverişe Başla</button>
      </div>

      <div v-else class="favorites-container">
        <div class="favorites-count">
          Toplam {{ favorites.length }} ürün
        </div>
        <div class="favorites-grid">
          <ProductCard
            v-for="product in favorites"
            :key="product.id"
            :id="product.id"
            :name="product.name"
            :price="product.price"
            :image="product.image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useFavoritesStore } from '@/stores/favorites'
import ProductCard from '@/components/molecules/ProductCard.vue'

const favoritesStore = useFavoritesStore()
const favorites = computed(() => favoritesStore.favorites)
</script>

<style scoped>
.favorites-page {
  min-height: 80vh;
  padding: 40px 20px;
  background: #fafafa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.page-title {
  text-align: center;
  font-size: 32px;
  margin-bottom: 40px;
  color: #000;
}

.empty-favorites {
  text-align: center;
  padding: 60px 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.empty-icon {
  font-size: 60px;
  margin-bottom: 20px;
}

.empty-favorites h2 {
  color: #333;
  margin-bottom: 10px;
}

.empty-favorites p {
  color: #666;
  margin-bottom: 30px;
}

.shop-btn {
  background: #000;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s;
}

.shop-btn:hover {
  background: #ffb400;
  color: black;
}

.favorites-count {
  margin-bottom: 20px;
  color: #666;
  font-size: 14px;
}

.favorites-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
</style>