<template>
  <div v-if="visible" class="modal-overlay" @click.self="close">
    <div class="modal-content">
      <button class="close-btn" @click="close">✕</button>

      <h2>Hızlı Menü</h2>

      <ul class="menu-list">
        <li><a href="#">Hesabım</a></li>
        <li><a href="#">Mağazalar</a></li>
        <li><a href="#">Sık Sorulan Sorular</a></li>
      </ul>

      <!-- 🌐 Dil seçeneği -->
      <div class="language-select">
        <label for="lang">🌐 Dil Seç:</label>
        <select id="lang" v-model="selectedLang">
          <option value="tr">Türkçe</option>
          <option value="en">English</option>
          <option value="de">Deutsch</option>     
          <option value="fr">Français</option>
          
        </select>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  visible: Boolean
})
const emit = defineEmits(['close'])

function close() {
  emit('close')
}

// seçilen dil (ref ile izlenebilir)
const selectedLang = ref('tr')
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0,0,0,0.6);
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  z-index: 100;
}

.modal-content {
  background: #fff;
  width: 260px;
  margin: 20px;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0,0,0,0.2);
  padding: 20px 15px;
  position: relative;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: none;
  font-size: 18px;
  cursor: pointer;
}

.menu-list {
  list-style: none;
  padding: 0;
  margin: 0 0 20px 0;
}

.menu-list li {
  margin: 8px 0;
}

.menu-list a {
  display: block;
  padding: 8px 10px;
  text-decoration: none;
  color: #111;
  border-radius: 5px;
}

.menu-list a:hover {
  background: #f5f5f5;
  color: #ffb400;
}

/* 🌐 Dil seçimi alanı */
.language-select {
  border-top: 1px solid #ddd;
  padding-top: 10px;
  margin-top: 10px;
}

.language-select label {
  font-weight: bold;
  font-size: 14px;
  color: #333;
}

.language-select select {
  margin-left: 8px;
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 14px;
  cursor: pointer;
}
.language-select select:hover {
  border-color: #ffb400;
}
</style>
