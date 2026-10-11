

<template>
  <BaseCard>
    <h1 class="head">Flash Cards</h1>
    <template #footer>
      <button type="button" @click="startGame">开始游戏</button>
    </template>
  </BaseCard>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import BaseCard from '@/components/BaseCard.vue'; 
  const router = useRouter();
  const startGame = ()=>{
    router.push({name:'game'})
  }
</script>

<style scoped>
.head {
  font-size: 40px;
  font-weight: 700;
  color: #111111;
}
button {
  width: 100%;
  height: 56px;
  border: none;
  background: transparent;
  color: #111111;
  font: inherit;
  font-size: 16px;
  font-weight: 650;
  cursor: pointer;
}
button:hover {
  color: #000000;
}
</style>