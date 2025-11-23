<template>
  <div class="product-detail">
    <div class="container">
      <button @click="$router.back()" class="back-btn">← Geri Dön</button>
      
      <div class="product-content">
        <div class="image-section">
          <img :src="product.image" :alt="product.name" />
        </div>
        
        <div class="info-section">
          <h1>{{ product.name }}</h1>
          <p class="price">{{ product.price }} ₺</p>
          <p class="description">Bu ürünün detayları burada yer alacak.</p>
          
          <button class="add-to-cart-btn">Sepete Ekle</button>
          <button @click="toggleFavorite" class="favorite-btn">
            {{ isFavorite ? '❤️ Favorilerden Çıkar' : '🤍 Favorilere Ekle' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useFavoritesStore } from '@/stores/favorites'
import { useRecentlyViewedStore } from '@/stores/recentlyViewed' 

const route = useRoute()
const favoritesStore = useFavoritesStore()
const recentlyViewedStore = useRecentlyViewedStore()
const productId = parseInt(route.params.id)
//SON GELİNLER İÇİN
onMounted(() => {
  console.log('Ürün detayı açıldı:', productId)
  
  if (product.value.id) {
    // SON GEZİLENLERE EKLE
    recentlyViewedStore.addProduct(product.value)
  }
})
// TÜM ÜRÜNLERİ TEK BİR YERDE TANIMLAMAK İÇİN
const allProducts = [
  // NORMAL ÜRÜNLER (1-5)
  {
    id: 1,
    name: 'Puma Beyaz Spor Ayakkabı',
    price: 6161,
    image: '/src/assets/products/beyazaykkabı.jpg',
    description: 'Premium beyaz spor ayakkabı. Rahat ve şık tasarım.'
  },
  {
    id: 2, 
    name: 'PUMA x ROSÉ Speedcat Babet Ayakkabı',
    price: 699,
    image: '/src/assets/products/speedcatbabet.avif',
    description: 'Özel tasarım Speedcat babet ayakkabı.'
  },
  {
    id: 3,
    name: 'FENTY x PUMA T7 UNISEX Track Ceket',
    price: 899,
    image: '/src/assets/products/fentyceket.avif',
    description: 'Fenty ile özel tasarım track ceket.'
  },
  {
    id: 4,
    name: 'Puma Kapüşonlu Sweatshirt',
    price: 1199,
    image: '/src/assets/products/sweat.avif',
    description: 'Rahat kapüşonlu sweatshirt.'
  },
  {
    id: 5,
    name: 'PUMA x SONIC THE HEDGEHOG Genç Track Ceket',
    price: 900,
    image: '/src/assets/products/çocuk.avif',
    description: 'Sonic the Hedgehog koleksiyonu özel tasarım.'
  },
  // EN ÇOK SATANLAR (6-11)
  {
    id: 6,
    name: 'Türkiye Voleybol Milli Takım 2025 Erkek Forma',
    price: 1499,
    image: '/src/assets/products/forma1.avif',
    description: 'Türkiye Voleybol Milli Takımı resmi forması.'
  },
  {
    id: 7,
    name: 'Puma Erkek Tişört',
    price: 699,
    image: 'https://picsum.photos/250/200?random=11',
    description: 'Rahat ve şık erkek tişört.'
  },
  {
    id: 8,
    name: 'Puma Çocuk Eşofman Takımı',
    price: 899,
    image: 'https://picsum.photos/250/200?random=12',
    description: 'Çocuklar için rahat eşofman takımı.'
  },
  {
    id: 9,
    name: 'Puma Sweatshirt',
    price: 1199,
    image: 'https://picsum.photos/250/200?random=13',
    description: 'Kaliteli kumaştan üretilmiş sweatshirt.'
  },
  {
    id: 10,
    name: 'Puma Sırt Çantası',
    price: 499,
    image: 'https://picsum.photos/250/200?random=14',
    description: 'Günlük kullanım için pratik sırt çantası.'
  },
  {
    id: 11,
    name: 'Puma Koşu Ayakkabısı',
    price: 1699,
    image: 'https://picsum.photos/250/200?random=15',
    description: 'Koşu ve spor aktiviteleri için özel tasarım.'
  }
]

// ÜRÜNÜ BUL
const product = ref(allProducts.find(p => p.id === productId) || {})

const isFavorite = computed(() => 
  favoritesStore.favorites.some(item => item.id === productId)
)

const toggleFavorite = () => {
  if (product.value.id) {
    favoritesStore.toggleFavorite(product.value)
  }
}

onMounted(() => {
  console.log('Ürün detayı açıldı. ID:', productId)
  console.log('Bulunan ürün:', product.value)
  
  // Eğer ürün bulunamazsa
  if (!product.value.id) {
    console.error('Ürün bulunamadı! ID:', productId)
  }
})
</script>

<style scoped>
.product-detail {
  padding: 40px 20px;
  background: #fafafa;
  min-height: 80vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.back-btn {
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  margin-bottom: 20px;
  color: #333;
}

.back-btn:hover {
  color: #ffb400;
}

.product-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.image-section img {
  width: 100%;
  border-radius: 10px;
}

.info-section h1 {
  font-size: 28px;
  margin-bottom: 10px;
}

.price {
  font-size: 24px;
  color: #ffb400;
  font-weight: bold;
  margin-bottom: 20px;
}

.description {
  color: #666;
  line-height: 1.6;
  margin-bottom: 30px;
}

.add-to-cart-btn {
  background: #000;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px;
  margin-right: 15px;
}

.add-to-cart-btn:hover {
  background: #ffb400;
  color: black;
}

.favorite-btn {
  background: white;
  color: #000;
  border: 1px solid #ddd;
  padding: 15px 20px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px;
}

.favorite-btn:hover {
  border-color: #ffb400;
}
</style>