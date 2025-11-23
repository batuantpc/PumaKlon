<template>
  <input
    :type="type"
    :placeholder="placeholder"
    v-model="model"
    class="base-input"
  />
</template>

<script setup>
const props = defineProps({
  type: { type: String, default: 'text' },
  placeholder: { type: String, default: '' },
  modelValue: String
})
const emit = defineEmits(['update:modelValue'])
const model = defineModel()
</script>

<style scoped>
.base-input {
  border: none;
  outline: none;
  padding: 6px 10px;
  border-radius: 20px;
  font-size: 14px;
}
</style>
