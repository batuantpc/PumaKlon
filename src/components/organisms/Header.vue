<template>
  <header class="navbar">
    <!-- LOGO -->
    <div class="logo" @click="$router.push('/')">
      <img src="/src/assets/pumalogo.png" alt="Puma Logo" class="logo-img" />
    </div>

    <!-- MENÜ -->
    <nav class="menu">
      <a href="#">Kadın</a>
      <a href="#">Erkek</a>
      <a href="#">Çocuk</a>
      <a href="#">Koleksiyonlar</a>
      <a href="#">Spor</a>
    </nav>

    <!-- ARAMA -->
    <div class="search-container">
      <SearchBar />
    </div>

    <!-- İKONLAR -->
    <div class="actions">
      <!-- FAVORİ BUTONU -->
      <IconButton @click="goToFavorites" class="heart-btn">❤️</IconButton>
      
      <!-- SEPET İKONU + SAYAÇ -->
      <div class="cart-icon" @click="goToCart">
        <IconButton class="cart-btn">🛒</IconButton>
        <span v-if="cartTotal > 0" class="cart-badge">{{ cartTotal }}</span>
      </div>
      
      <!-- KULLANICI BUTONU -->
      <IconButton @click="$router.push('/login')" class="user-btn">👤</IconButton>
    </div>

    <!-- MODAL -->
    <UserModal :visible="showModal" @close="showModal = false" />
  </header>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cart'
import UserModal from '../organisms/UserModal.vue'
import SearchBar from '../molecules/SearchBar.vue'
import IconButton from '../atoms/IconButton.vue'

const router = useRouter()
const cartStore = useCartStore()
const showModal = ref(false)

// SEPETTEKİ TOPLAM ÜRÜN SAYISI
const cartTotal = computed(() => cartStore.totalItems())

// FAVORİLERE GİT
const goToFavorites = () => {
  router.push('/favorites')
}

// SEPET SAYFASINA GİT
const goToCart = () => {
  router.push('/cart')
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  color: white;
  padding: 15px 30px;
  font-family: Arial, sans-serif;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  flex-wrap: wrap;
  gap: 15px;
}

/* LOGO */
.logo {
  flex: 0 0 auto;
  cursor: pointer;
}

.logo-img {
  height: 40px;
  width: auto;
  transition: transform 0.2s;
}

.logo-img:hover {
  transform: scale(1.05);
}

/* MENÜ */
.menu {
  display: flex;
  gap: 20px;
  flex: 1;
  justify-content: center;
}

.menu a {
  text-decoration: none;
  color: white;
  font-weight: 500;
  font-size: 14px;
  transition: all 0.2s;
}

.menu a:hover {
  text-decoration: underline;
  text-decoration-color: #ffb400;
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
}

/* ARAMA */
.search-container {
  flex: 0 1 300px;
  display: flex;
  justify-content: center;
  min-width: 200px;
}

/* İKONLAR */
.actions {
  display: flex;
  gap: 15px;
  flex: 0 0 auto;
  align-items: center;
}

.heart-btn {
  color: red !important;
  font-size: 18px;
}

.cart-btn, .user-btn {
  font-size: 18px;
}

/* SEPET İKONU STİLLERİ */
.cart-icon {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.cart-badge {
  position: absolute;
  top: -5px;
  right: -5px;
  background: #ff4444;
  color: white;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .navbar {
    padding: 10px 15px;
    gap: 10px;
  }
  
  .menu {
    order: 3;
    width: 100%;
    justify-content: center;
    margin-top: 10px;
  }
  
  .search-container {
    flex: 1;
    min-width: auto;
  }
  
  .logo-img {
    height: 30px;
  }
  
  .menu a {
    font-size: 12px;
  }
  
  .actions {
    gap: 10px;
  }
}
</style>