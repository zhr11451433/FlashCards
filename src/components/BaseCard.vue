<script setup lang="ts"></script>


<template>
<div class="card">
    <!-- 上半部分：题目 / 开始界面的标题+选项 -->
    <div class="card__body">
      <slot />
    </div>

    <!-- 下半部分：按钮栏 -->
    <div class="card__footer">
      <slot name="footer" />
    </div>
  </div>
</template>


<style scoped>
.card {
  /* ① 白底 + 灰边框 */
  background: #ffffff;
  border: 2px solid #bfbfbf;
  border-radius: 12px;

  /* ② 这就是"内层灰块到卡片边缘的距离" */
  padding: 6px;

  /* ③ 这就是"上下两块之间的距离" */
  display: flex;
  flex-direction: column;
  gap: 8px;

  /* ④ 想让两个块有明显高度，得给卡片一个最小高度 */
  width: min(660px, 100%);
  min-height: 370px;
  /* font-family: "Segoe UI", "Microsoft YaHei", sans-serif; */
}

/* 两个灰块共用的部分 */
.card__body,
.card__footer {
  background: #f5f5f5;
  border-radius: 8px; /* 比外层 12px 小，嵌套圆角才不别扭 */
}

.card__body {
  flex: 1;              /* 吃掉剩余高度，把 footer 顶到底部 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 40px 24px;
  text-align: center;
}

.card__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  font-size: 15px;
}
</style>