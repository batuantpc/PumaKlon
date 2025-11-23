<template>
  <button class="icon-btn" @click="$emit('click')">
    <slot />
  </button>
</template>

<style scoped>
.icon-btn {
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  transition: color 0.2s;
}

.icon-btn:hover {
  color: #ffb400; /* hover olunca sarı renk */
}
</style>
