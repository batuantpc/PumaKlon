<template>
  <div class="cart-page">
    <div class="container">
      <h1>🛒 Sepetim</h1>
      
      <div v-if="cartItems.length === 0" class="empty-cart">
        <div class="empty-icon">🛒</div>
        <h2>Sepetiniz boş</h2>
        <p>Alışverişe devam etmek için ürünlere göz atın.</p>
        <button @click="$router.push('/')" class="shop-btn">Alışverişe Başla</button>
      </div>

      <div v-else class="cart-content">
        <!-- SEPETTEKİ ÜRÜNLER -->
        <div class="cart-items">
          <div v-for="item in cartItems" :key="item.id" class="cart-item">
            <img :src="item.image" :alt="item.name" class="item-image" />
            
            <div class="item-details">
              <h3>{{ item.name }}</h3>
              <p class="item-price">{{ item.price }} ₺</p>
            </div>
            
            <div class="quantity-controls">
              <button @click="decreaseQuantity(item.id)" class="qty-btn">-</button>
              <span class="quantity">{{ item.quantity }}</span>
              <button @click="increaseQuantity(item.id)" class="qty-btn">+</button>
            </div>
            
            <div class="item-total">
              {{ item.price * item.quantity }} ₺
            </div>
            
            <button @click="removeItem(item.id)" class="remove-btn">🗑️</button>
          </div>
        </div>

        <!-- SEPET ÖZETİ -->
        <div class="cart-summary">
          <h3>Sipariş Özeti</h3>
          <div class="summary-row">
            <span>Toplam:</span>
            <span>{{ totalPrice }} ₺</span>
          </div>
          <button class="checkout-btn">Ödemeye Geç</button>
          <button @click="clearCart" class="clear-btn">Sepeti Temizle</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cart'

const router = useRouter()
const cartStore = useCartStore()

const cartItems = computed(() => cartStore.items)
const totalPrice = computed(() => cartStore.totalPrice())

const increaseQuantity = (productId) => {
  const item = cartItems.value.find(item => item.id === productId)
  cartStore.updateQuantity(productId, item.quantity + 1)
}

const decreaseQuantity = (productId) => {
  const item = cartItems.value.find(item => item.id === productId)
  cartStore.updateQuantity(productId, item.quantity - 1)
}

const removeItem = (productId) => {
  cartStore.removeFromCart(productId)
}

const clearCart = () => {
  if (confirm('Sepeti tamamen temizlemek istediğinize emin misiniz?')) {
    cartStore.clearCart()
  }
}
</script>

<style scoped>
.cart-page {
  padding: 40px 20px;
  min-height: 80vh;
  background: #fafafa;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
}

.empty-cart {
  text-align: center;
  padding: 60px 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.empty-icon {
  font-size: 80px;
  margin-bottom: 20px;
}

.cart-content {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 30px;
}

.cart-items {
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.cart-item {
  display: grid;
  grid-template-columns: 80px 1fr auto auto auto;
  gap: 15px;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #eee;
}

.cart-item:last-child {
  border-bottom: none;
}

.item-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
}

.item-details h3 {
  margin: 0 0 5px 0;
  font-size: 16px;
}

.item-price {
  color: #ffb400;
  font-weight: bold;
  margin: 0;
}

.quantity-controls {
  display: flex;
  align-items: center;
  gap: 10px;
}

.qty-btn {
  background: #f0f0f0;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.qty-btn:hover {
  background: #ddd;
}

.quantity {
  font-weight: bold;
  min-width: 20px;
  text-align: center;
}

.item-total {
  font-weight: bold;
  color: #000;
}

.remove-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  padding: 5px;
}

.remove-btn:hover {
  color: #ff4444;
}

.cart-summary {
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  height: fit-content;
}

.cart-summary h3 {
  margin-top: 0;
  margin-bottom: 20px;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  font-size: 16px;
}

.checkout-btn {
  background: #000;
  color: white;
  border: none;
  padding: 15px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
  margin-bottom: 10px;
  transition: all 0.3s;
}

.checkout-btn:hover {
  background: #ffb400;
  color: black;
}

.clear-btn {
  background: none;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  transition: all 0.3s;
}

.clear-btn:hover {
  border-color: #ff4444;
  color: #ff4444;
}

/* Responsive */
@media (max-width: 768px) {
  .cart-content {
    grid-template-columns: 1fr;
  }
  
  .cart-item {
    grid-template-columns: 60px 1fr;
    gap: 10px;
  }
  
  .quantity-controls, .item-total, .remove-btn {
    grid-column: 1 / -1;
    justify-self: start;
    margin-top: 10px;
  }
}
</style>