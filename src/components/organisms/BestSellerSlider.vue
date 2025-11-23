<template>
  <section class="bestseller">
    <h2 class="title">En Çok Satanlar</h2>

    <div class="slider-container">
      <div class="slider" ref="slider">
        <!-- her ürünü ayrı bir div içine almak için -->
        <div 
          v-for="(product, index) in bestSellers" 
          :key="index" 
          class="slide-item"
        >
          <ProductCard
            :id="product.id || index + 100"
            :name="product.name"
            :price="product.price"
            :image="product.image"
          />
        </div>
      </div>

      <button class="arrow left" @click="scrollLeft">‹</button>
      <button class="arrow right" @click="scrollRight">›</button>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import ProductCard from '@/components/molecules/ProductCard.vue'

const slider = ref(null)

const bestSellers = [
  {
    id: 6,  // 1-5 arası normal ürünlerde kullanılıyor, 6'dan başlat
    name: 'Türkiye Voleybol Milli Takım 2025 Erkek Forma',
    price: 1499,
    image: '/src/assets/products/forma1.avif'
  },
  {
    id: 7,
    name: 'Puma Erkek Tişört',
    price: 699,
    image: 'https://picsum.photos/250/200?random=11'
  },
  {
    id: 8,
    name: 'Puma Çocuk Eşofman Takımı',
    price: 899,
    image: 'https://picsum.photos/250/200?random=12'
  },
  {
    id: 9,
    name: 'Puma Sweatshirt',
    price: 1199,
    image: 'https://picsum.photos/250/200?random=13'
  },
  {
    id: 10,
    name: 'Puma Sırt Çantası',
    price: 499,
    image: 'https://picsum.photos/250/200?random=14'
  },
  {
    id: 11,
    name: 'Puma Koşu Ayakkabısı',
    price: 1699,
    image: 'https://picsum.photos/250/200?random=15'
  }
]

function scrollLeft() {
  if (slider.value) {
    slider.value.scrollBy({ left: -300, behavior: 'smooth' })
  }
}

function scrollRight() {
  if (slider.value) {
    slider.value.scrollBy({ left: 300, behavior: 'smooth' })
  }
}
</script>

<style scoped>
.bestseller {
  padding: 60px 40px;
  background-color: #fafafa;
  position: relative;
  text-align: center;
  font-family: "Poppins", sans-serif;
}

.title {
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 40px;
  color: #111;
}

.slider-container {
  position: relative;
  overflow: hidden;
  width: 100%;
}

.slider {
  display: flex;
  gap: 25px;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding-bottom: 15px;
  scrollbar-width: none; /* Firefox için bu kod */
  -ms-overflow-style: none; /* microsoft edge için bu kod */
}

.slider::-webkit-scrollbar {
  display: none; /* çubuğu sakla ama işlevi devam etsin*/
}

/* Her slide için bir tane konteynır olayı */
.slide-item {
  flex: 0 0 auto;
}

/* yan taraftaki sağ sol okları */
.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  font-size: 24px;
  padding: 10px 15px;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s;
  z-index: 10;
}

.arrow:hover {
  background: #ffb400;
  color: black;
}

.arrow.left {
  left: 10px;
}

.arrow.right {
  right: 10px;
}
</style>