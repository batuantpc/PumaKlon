<template>
  <section class="hero">
    <div class="hero-content">
      <h2>Yeni Sezon Kadın Koleksiyonu</h2>
      <p>Tarzını yansıt, performansını yükselt. Puma'nın yeni koleksiyonunu keşfet!</p>
      <button class="hero-btn">Keşfet</button>
    </div>
  </section>
</template>

<script setup>
// Şimdilik bu kısım boş kalacak, ilerde router veya veri eklenecek
</script>

<style scoped>
.hero {
  width: 100%;
  height: 90vh; /* neredeyse tam ekran */
  background-image: url('@/assets/banner1.jpeg'); /* buraya kendi görselini koy */
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: white;
  padding-left: 60px;
  font-family: "Poppins", sans-serif;
  position: relative;
}

/* Arka planı koyulaştırmak için opsiyonel bir katman */
.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.45);
  z-index: 0;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 500px;
}

.hero-content h2 {
  font-size: 48px;
  margin-bottom: 15px;
  line-height: 1.2;
  font-weight: 700;
}

.hero-content p {
  font-size: 18px;
  margin-bottom: 25px;
  line-height: 1.5;
  color: #f0f0f0;
}

.hero-btn {
  background-color: #ffb400;
  color: black;
  border: none;
  padding: 12px 28px;
  font-size: 16px;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bold;
}
.hero-btn:hover {
  background-color: #fff;
  color: #000;
}
</style>
