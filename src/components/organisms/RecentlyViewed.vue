<template>
  <section class="recently-viewed" v-if="recentProducts.length > 0">
    <h2 class="title">⏰ Son Gezilen Ürünler</h2>
    
    <div class="recent-grid">
      <ProductCard
        v-for="product in recentProducts"
        :key="product.id"
        :id="product.id"
        :name="product.name"
        :price="product.price"
        :image="product.image"
      />
    </div>
    
    <button @click="clearRecent" class="clear-btn">Listeyi Temizle</button>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRecentlyViewedStore } from '@/stores/recentlyViewed'
import ProductCard from '@/components/molecules/ProductCard.vue'

const recentlyViewedStore = useRecentlyViewedStore()

const recentProducts = computed(() => recentlyViewedStore.getRecentProducts())

const clearRecent = () => {
  if (confirm('Son gezilenler listesini temizlemek istediğinize emin misiniz?')) {
    recentlyViewedStore.clearRecent()
  }
}
</script>

<style scoped>
.recently-viewed {
  padding: 40px 20px;
  background: #f8f8f8;
  text-align: center;
}

.title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 30px;
  color: #333;
}

.recent-grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
}

.clear-btn {
  background: none;
  border: 1px solid #ddd;
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
  color: #666;
  font-size: 14px;
  transition: all 0.3s;
}

.clear-btn:hover {
  border-color: #ff4444;
  color: #ff4444;
}
</style>