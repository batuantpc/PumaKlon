<template>
  <Header />
  <RouterView />
  <Footer />
</template>

<script setup>
import Header from './components/organisms/Header.vue'
import Footer from './components/organisms/Footer.vue'
</script>

<style>
body {
  margin: 0;
  font-family: 'Poppins', Arial, sans-serif;
  background-color: #fff;
}
</style>
