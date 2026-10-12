<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  current: number
  total: number
}>()

const percent = computed(() => {
  if (props.total === 0) return 0
  return Math.round((props.current / props.total) * 100)
})
</script>

<template>
  <div class="track">
    <div
      class="fill"
      :style="{ width: `calc((100% - 140px) * ${percent} / 100)` }"
    ></div>
    <span
      class="percent"
      :style="{ left: `calc((100% - 140px) * ${percent} / 100 + 12px)` }"
    >
      {{ percent }}%
    </span>
    <span class="count">{{ current }} of {{ total }}</span>
  </div>
</template>

<style scoped>
.track {
  position: relative;
  height: 36px;
  border: 1px solid #d8d8d8;
  border-radius: 12px;
  background: #ffffff;
  box-sizing: border-box;
}

.fill {
  position: absolute;
  left: 4px;
  top: 4px;
  bottom: 4px;
  background: #c8c8c8;
  border-radius: 6px;
}

.percent,
.count {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #5c5c5c;
  font-size: 14px;
}

.percent {
  font-weight: 650;
}

.count {
  right: 16px;
}
</style>