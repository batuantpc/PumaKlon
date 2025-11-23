<template>
  <section class="campaigns">
    <h2 class="title">Kampanyalar</h2>

    <div class="campaign-list">
      <!-- 1. kampanya -->
      <div class="campaign-card">
        <img src="@/assets/indirim1.jpg" alt="Kadın Kampanyası" />
        <div class="text">
          <h3>%50’ye Varan Ferrari Ürünleri</h3>
          <button class="btn">Keşfet</button>
        </div>
      </div>

      <!-- 2. kampanya -->
      <div class="campaign-card">
        <img src="@/assets/indirim2.jpeg" alt="Erkek Kampanyası" />
        <div class="text">
          <h3>%60’a Varan Ayakkabı fırsatları</h3>
          <button class="btn">İncele</button>
        </div>
      </div>

      <!-- 3. kampanya -->
      <div class="campaign-card">
        <img src="@/assets/indirim3.jpg" alt="Çocuk Kampanyası" />
        <div class="text">
          <h3>Antrenman Ürünlerinde %50 İndirim</h3>
          <button class="btn">Alışverişe Başla</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

</script>

<style scoped>
.campaigns {
  background-color: #f8f8f8;
  padding: 60px 40px;
  text-align: center;
  font-family: "Poppins", sans-serif;
}

.title {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 40px;
  color: #111;
}

/* 3 kartın yan yana dizilmesi */
.campaign-list {
  display: flex;
  justify-content: center; /* ortala */
  align-items: stretch;
  gap: 30px; /* aralarına boşluk */
  flex-wrap: nowrap; /* yan yana kal */
}


.campaign-card {
  position: relative;
  width: 350px;
  height: 230px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease;
}

.campaign-card:hover {
  transform: scale(1.05);
}

.campaign-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.7);
  transition: all 0.3s ease;
}

.campaign-card:hover img {
  filter: brightness(0.9);
}

.text {
  position: absolute;
  bottom: 20px;
  left: 20px;
  text-align: left;
  color: white;
}

.text h3 {
  font-size: 20px;
  margin-bottom: 10px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.btn {
  background-color: #ffb400;
  border: none;
  color: black;
  padding: 8px 18px;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn:hover {
  background-color: white;
  color: black;
}

/* küçük ekranlarda alta geçsin yapı bozulmasın */
@media (max-width: 1100px) {
  .campaign-list {
    flex-wrap: wrap;
  }

  .campaign-card {
    width: 90%;
    max-width: 400px;
  }
}
</style>
