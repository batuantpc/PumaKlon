<template>
  <button class="base-btn" @click="$emit('click')">
    <slot />
  </button>
</template>

<style scoped>
.base-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  padding: 5px;
  border-radius: 5px;
  transition: color 0.2s;
}
.base-btn:hover {
  color: #ffb400;
}
</style>
