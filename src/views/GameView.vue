<script setup lang="ts">
import { computed, ref } from 'vue'
import FlashCard from '@/components/FlashCard.vue'
import ProgressBar from '@/components/ProgressBar.vue'
import { flashcards, type FlashCard as FlashCardData } from '@/data/flashcards'

const flipped = ref(false)
const currentIndex = ref(0)

const card = computed(() => cardAt(currentIndex.value))
const canPrev = computed(() => currentIndex.value > 0)
const canNext = computed(() => currentIndex.value < flashcards.length - 1)
// const percent = computed(
//   () => ((currentIndex.value + 1) / flashcards.length) * 100,
// )

function prev() {
  if (currentIndex.value === 0) return
  currentIndex.value -= 1
  flipped.value = false
}

function next() {
  if (currentIndex.value === flashcards.length - 1) return
  currentIndex.value += 1
  flipped.value = false
}

function cardAt(index: number): FlashCardData {
  const card = flashcards[index]
  if (!card) throw new Error(`卡片不存在：${index}`)
  return card
}
</script>

<template>
  <div class="game">
    <ProgressBar :current="currentIndex + 1" :total="flashcards.length" />
    <FlashCard
      :card="card"
      :flipped="flipped"
      :can-prev="canPrev"
      :can-next="canNext"
      @toggle="flipped = !flipped"
      @prev="prev"
      @next="next"
    />
  </div>
</template>

<style scoped>
.game {
  width: min(660px, 100%);
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>