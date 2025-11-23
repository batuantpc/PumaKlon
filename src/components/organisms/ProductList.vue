<template>
  <section class="products">
    <h2 class="title">Yeni Gelen Ürünler</h2>

    <div class="product-grid">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :id="product.id"
        :name="product.name"
        :price="product.price"
        :image="product.image"
      />
    </div>
  </section>
</template>

<script setup>
import ProductCard from '@/components/molecules/ProductCard.vue'

const products = [
  {
    id: 1,
    name: 'Puma Beyaz Spor Ayakkabı',
    price: 6161,
    image: '/src/assets/products/beyazaykkabı.jpg'
  },
  {
    id: 2,
    name: 'PUMA x ROSÉ Speedcat Babet Ayakkabı',
    price: 699,
    image: '/src/assets/products/speedcatbabet.avif'
  },
  {
    id: 3,
    name: 'FENTY x PUMA T7 UNISEX Track Ceket',
    price: 899,
    image: '/src/assets/products/fentyceket.avif'
  },
  {
    id: 4,
    name: 'Puma Kapüşonlu Sweatshirt',
    price: 1199,
    image: '/src/assets/products/sweat.avif'
  },
  {
    id: 5,
    name: 'PUMA x SONIC THE HEDGEHOG Genç Track Ceket',
    price: 900,
    image: '/src/assets/products/çocuk.avif'
  }
]
</script>

<style scoped>
.products {
  padding: 60px 40px;
  text-align: center;
  background-color: #fafafa;
}

.title {
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 40px;
  color: #111;
}

.product-grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
}
</style>