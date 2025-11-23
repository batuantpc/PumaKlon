<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- logo ve baş kısmı -->
      <div class="footer-section">
        <div class="logo">
          <img src="@/assets/pumalogo.png" alt="Puma" width="120" />
        </div>
        <p class="newsletter-text">Yeniliklerden haberdar olmasanız da olur!</p>
        <div class="newsletter">
          <input type="email" placeholder="E-posta adresiniz" class="email-input" />
          <button class="subscribe-btn">Üye Ol</button>
        </div>
      </div>

      <!--  müşteri hizmetleri alt kısım -->
      <div class="footer-section">
        <h4>Müşteri Hizmetleri</h4>
        <ul>
          <li><a href="#">Sıkça Sorulan Sorular</a></li>
          <li><a href="#">Mağazalarımız</a></li>
          <li><a href="#">Kampanyalarımız </a></li>
          <li><a href="#">İade & Değişim</a></li>
          <li><a href="#">Bize Ulaşın</a></li>
        </ul>
      </div>

      <!-- hakkımızdanın alt kısmı -->
      <div class="footer-section">
        <h4>Hakkımızda</h4>
        <ul>
          <li><a href="#">Puma Hikayesi</a></li>
          <li><a href="#">Kariyer</a></li>
          <li><a href="#">Sürdürülebilirlik</a></li>
          <li><a href="#">Basın</a></li>
        </ul>
      </div>

      <!-- politikalar ve koşullar -->
      <div class="footer-section">
        <h4>Yasal</h4>
        <ul>
          <li><a href="#">Gizlilik Politikası</a></li>
          <li><a href="#">Çerez Politikası</a></li>
          <li><a href="#">Kullanım Koşulları</a></li>
          <li><a href="#">KVKK Aydınlatma Metni</a></li>
        </ul>
      </div>
    </div>

    <!-- en alt kısım  -->
    <div class="footer-bottom">
      <p>&copy; 2024 PUMA. Tüm hakları saklı değildir .</p>
      <div class="social-icons">
        <a href="#">📘</a>
        <a href="#">📷</a>
        <a href="#">🐦</a>
        <a href="#">🎵</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #000;
  color: white;
  padding: 40px 20px 20px;
  margin-top: auto;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px;
}

.footer-section h4 {
  color: #ffb400;
  margin-bottom: 15px;
  font-size: 16px;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section ul li {
  margin-bottom: 8px;
}

.footer-section ul li a {
  color: #ccc;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s;
}

.footer-section ul li a:hover {
  color: #ffb400;
}

.newsletter {
  display: flex;
  margin-top: 10px;
  gap: 8px;
}

.email-input {
  padding: 8px 12px;
  border: 1px solid #333;
  border-radius: 4px;
  background: #111;
  color: white;
  flex: 1;
}

.subscribe-btn {
  background: #ffb400;
  color: black;
  border: none;
  padding: 8px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

.subscribe-btn:hover {
  background: #e6a200;
}

.footer-bottom {
  max-width: 1200px;
  margin: 30px auto 0;
  padding-top: 20px;
  border-top: 1px solid #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.social-icons {
  display: flex;
  gap: 15px;
}

.social-icons a {
  color: white;
  font-size: 18px;
  text-decoration: none;
}

.social-icons a:hover {
  color: #ffb400;
}

.newsletter-text {
  color: #ccc;
  margin-bottom: 10px;
  font-size: 14px;
}

/* Responsive */
@media (max-width: 768px) {
  .footer-container {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .footer-bottom {
    flex-direction: column;
    gap: 15px;
    text-align: center;
  }
}
</style>