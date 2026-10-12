<script setup lang="ts">
import { computed } from 'vue'
import BaseCard from '@/components/BaseCard.vue'
import type { FlashCard } from '@/data/flashcards'

const props = defineProps<{
  card: FlashCard
  flipped: boolean
  canPrev: boolean
  canNext: boolean
}>()

const emit = defineEmits<{
  toggle: []
  prev: []
  next: []
}>()

const text = computed(() =>
  props.flipped ? props.card.answer : props.card.question,
)

const toggleLabel = computed(() =>
  props.flipped ? 'Hide Answer' : 'Show Answer',
)
</script>

<template>
  <BaseCard>
    <p class="card-text" :class="{ 'card-text--answer': flipped }">{{ text }}</p>
    <template #footer>
      <button :disabled="!canPrev" @click="emit('prev')">&lt; Previous</button>
      <button class="primary" @click="emit('toggle')">{{ toggleLabel }}</button>
      <button :disabled="!canNext" @click="emit('next')">Next &gt;</button>
    </template>
  </BaseCard>
</template>

<style scoped>
/* 基础：问题和答案共享的一切 */
.card-text {
  margin-block: auto;
  max-width: 100%;
  min-width: 0;
  overflow-wrap: anywhere;
  font-size: 40px;
  font-weight: 700;
  color: #111111;
}

/* 修饰：只在答案态叠加 */
.card-text--answer {
  font-size: 22px;
  font-weight: 500;
  line-height: 1.75;
  color: #333333;
}
button {
  /* flex: 1; */
  height: 56px;
  border: none;
  background: transparent;
  color: #8a8a8a;
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.15s;
}
button.primary {
  color: #1a1a1a;
  font-weight: 650;
}
/* 使用 :not(:disabled)
不要等变色了再去覆盖它，而是直接告诉浏览器：“只有当按钮没被禁用时，才允许触发 hover 变色。” */
button:hover:not(:disabled) {
  color: #1a1a1a;
}
button.primary:hover:not(:disabled) {
  color: #000000;
}
/* 禁用状态 */
button:disabled {
  color: #c8c8c8;
  cursor: not-allowed; /* 改成禁止图标，用户体验更好 */
  /* 如果你还想让按钮变透明，可以加 opacity: 0.5; */
}
</style>