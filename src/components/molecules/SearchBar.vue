<template>
  <div class="search-bar">
    <Input
      v-model="searchQuery"
      placeholder="ARAMA"
    />
    <Button @click="searchProduct">🔍</Button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Input from '../atoms/Input.vue'
import Button from '../atoms/Button.vue'

const searchQuery = ref('')

function searchProduct() {
  if (searchQuery.value.trim() === '') {
    alert('Lütfen arama terimi girin!')
    return
  }
  alert(`"${searchQuery.value}" için arama yapılıyor...`)
}
</script>

<style scoped>
.search-bar {
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  padding: 4px 8px;
}
</style>
