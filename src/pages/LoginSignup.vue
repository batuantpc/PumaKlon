<template>
  <div class="auth-page">
    <!-- Giriş kısmı -->
    <div class="login-section">
      <h2>Giriş</h2>
      <form class="login-form">
        <input type="email" placeholder="E-POSTA*" required />
        <input type="password" placeholder="ŞİFRE*" required />
        <button type="submit" class="login-btn">GİRİŞ YAP</button>
        <a href="#" class="forgot">ŞİFRENİ Mİ UNUTTUN?</a>
      </form>
    </div>

    <!-- Yeni Üye kısmı -->
    <div class="signup-section">
      <h2>Yeni Üye</h2>
      <form class="signup-form">
        <input type="text" placeholder="ADI*" required />
        <input type="text" placeholder="SOYADI*" required />
        <input type="email" placeholder="E-POSTA*" required />
        <input type="password" placeholder="ŞİFRE*" required />
        <input type="password" placeholder="ŞİFREYİ DOĞRULA*" required />

        <label class="newsletter">
          <input type="checkbox" />
          <span>En yeni kampanyalardan haberdar olmak için bültene abone olmak istiyorum.</span>
        </label>

        <p class="agreement">
          Hesap oluşturarak <a href="#">Üyelik Sözleşmesi’ni</a> okuduğunuzu, anladığınızı ve
          <a href="#">Gizlilik Politikası</a> ile <a href="#">Aydınlatma Metni</a>’ni kabul ettiğinizi onaylıyorsunuz.
        </p>

        <button type="submit" class="signup-btn">ÜYE OL</button>
      </form>
    </div>
  </div>
</template>

<script setup>
// Şimdilik form submit işlemleri boş
</script>

<style scoped>
.auth-page {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 60px;
  padding: 60px 80px;
  font-family: "Poppins", sans-serif;
  background: #fff;
  color: #111;
}

/* Sol - Giriş */
.login-section,
.signup-section {
  flex: 1;
  max-width: 450px;
}

h2 {
  font-size: 24px;
  border-bottom: 2px solid #ddd;
  padding-bottom: 8px;
  margin-bottom: 25px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

input[type="text"],
input[type="email"],
input[type="password"] {
  padding: 12px 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

button {
  background-color: #000;
  color: white;
  border: none;
  padding: 12px 15px;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background-color: #ffb400;
  color: #000;
}

.login-btn {
  margin-top: 10px;
}

.forgot {
  font-size: 13px;
  text-decoration: none;
  color: #000;
  margin-top: 5px;
}

.forgot:hover {
  text-decoration: underline;
}

.newsletter {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-top: 10px;
  font-size: 13px;
}

.newsletter input {
  margin-top: 3px;
}

.agreement {
  font-size: 12px;
  color: #444;
  line-height: 1.4;
}

.agreement a {
  color: #d10000;
  text-decoration: none;
}

.agreement a:hover {
  text-decoration: underline;
}

.signup-btn {
  margin-top: 15px;
}
</style>
