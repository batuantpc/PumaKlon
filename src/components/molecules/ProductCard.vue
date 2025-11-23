<template>
  <div class="product-card">
    <!-- FAVORİ BUTONU -->
    <button class="favorite-btn" @click.stop="toggleFavorite">
      <span v-if="isFavorite">❤️</span>
      <span v-else>🤍</span>
    </button>

    <!-- TIKLANABİLİR ALAN -->
    <div class="clickable-area" @click="goToProductDetail">
      <img :src="image" :alt="name" class="product-image" />
      <h3 class="product-name">{{ name }}</h3>
      <p class="product-price">{{ price }} ₺</p>
    </div>

    <!-- SEPETE EKLE -->
    <button class="add-to-cart" @click.stop="addToCart">Sepete Ekle</button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useFavoritesStore } from '@/stores/favorites'
import { useCartStore } from '@/stores/cart'

const props = defineProps({
  id: { type: Number, required: true },
  name: String,
  price: Number,
  image: String
})

const router = useRouter()
const favoritesStore = useFavoritesStore()
const cartStore = useCartStore()

const isFavorite = computed(() => {
  return favoritesStore.favorites.some(item => item.id === props.id)
})

const toggleFavorite = (event) => {
  event.stopPropagation()
  favoritesStore.toggleFavorite({
    id: props.id,
    name: props.name,
    price: props.price,
    image: props.image
  })
}

const goToProductDetail = () => {
  router.push(`/product/${props.id}`)
}

const addToCart = (event) => {
  event.stopPropagation()
  
  console.log('🛒 Sepete ekleniyor:', props.id, props.name)
  
  cartStore.addToCart({
    id: props.id,
    name: props.name,
    price: props.price,
    image: props.image
  })
  
  alert(`${props.name} sepete eklendi! 🛒`)
}
</script>

<style scoped>
.product-card {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 15px;
  width: 230px;
  text-align: center;
  transition: transform 0.3s ease;
  position: relative;
}

.product-card:hover {
  transform: translateY(-5px);
}

.clickable-area {
  cursor: pointer;
}

.favorite-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: white;
  border: none;
  font-size: 22px;
  cursor: pointer;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  z-index: 10;
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
}

.product-name {
  font-size: 16px;
  font-weight: 600;
  margin: 10px 0 5px 0;
  color: #333;
}

.product-price {
  color: #ffb400;
  font-weight: bold;
  margin-bottom: 15px;
}

.add-to-cart {
  background: #000;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  width: 100%;
  transition: all 0.3s;
}

.add-to-cart:hover {
  background: #ffb400;
  color: black;
}
</style>