<script setup lang="ts">
import BaseCard from "@/components/BaseCard.vue";
import { flashcards, type FlashCard } from "@/data/flashcards";
import  {computed, ref}  from "vue";
//换卡时把 flipped 设回 false，下一张才会从题目开始，而不是接着显示上一张的答案。
const prev = ()=>{
  if(currentIndex.value ===0){
    return 
  }
  currentIndex.value -=1
  flipped.value = false
}

const next = ()=>{
  if(currentIndex.value === flashcards.length-1){
    return 
  }
  currentIndex.value +=1
  flipped.value =false
}

// false = 显示问题，true = 显示答案
const flipped = ref(false)
//记下当前是第几张
const currentIndex = ref(0)
// 当前这张卡
const card = computed(()=>{
  return cardAt(currentIndex.value)
})
// 卡片主体显示什么
const text = computed(()=>{
  return flipped.value ? card.value.answer :card.value.question
})
// 中间按钮显示什么
const toggleLabel = computed(() => flipped.value ? 'Hide Answer' : 'Show Answer')

function cardAt(index:number):FlashCard{
  const card = flashcards[index]
  if(!card){
    throw new Error(`卡片不存在：${index}`)   // 正常流程到不了这里
  }
  return card
}
</script>

<template>
  <BaseCard>
    <!-- 根据 flipped 这个布尔值，动态地给这个 <p> 标签添加或移除 card-text--answer 这个 CSS 类。 -->
    <p class="card-text" :class="{'card-text--answer': flipped}">{{ text }}</p>
    <template #footer>
      <button :disabled="currentIndex === 0" @click="prev">&lt; Previous</button>
      <button class="primary" @click="flipped = !flipped">{{ toggleLabel }}</button>
      <button :disabled="currentIndex === flashcards.length-1" @click="next">Next &gt;</button>
    </template>
  </BaseCard>
</template> 

<style scoped>
/* 基础：问题和答案共享的一切 */
.card-text {
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