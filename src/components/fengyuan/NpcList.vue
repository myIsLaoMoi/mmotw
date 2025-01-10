<template>
  <div class="npc-container">
    <div class="npc-item" @click="handleClick('花月')">
      <img src="https://pokeking.oss-cn-hangzhou.aliyuncs.com/img/npc/花月.png" alt="花月">
      <div class="npc-name">花月</div>
    </div>
    <div class="npc-item" @click="handleClick('芙蓉')">
      <img src="https://pokeking.oss-cn-hangzhou.aliyuncs.com/img/npc/芙蓉.png" alt="芙蓉">
      <div class="npc-name">芙蓉</div>
    </div>
    <div class="npc-item" @click="handleClick('波妮')">
      <img src="https://pokeking.oss-cn-hangzhou.aliyuncs.com/img/npc/波妮.png" alt="波妮">
      <div class="npc-name">波妮</div>
    </div>
    <div class="npc-item" @click="handleClick('源治')">
      <img src="https://pokeking.oss-cn-hangzhou.aliyuncs.com/img/npc/源治.png" alt="源治">
      <div class="npc-name">源治</div>
    </div>
    <div class="npc-item" @click="handleClick('米可利')">
      <img src="https://pokeking.oss-cn-hangzhou.aliyuncs.com/img/npc/米可利.png" alt="米可利">
      <div class="npc-name">米可利</div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const handleClick = (name) => {
  router.push(`/fengyuan/${name}`)
}
</script>

<style scoped>
.npc-container {
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.npc-item {
  width: 200px;
  margin: 0.5rem;
  transition: all 0.2s ease;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  padding: 8px;
}

.npc-item:hover {
  transform: scale(1.05);
}

.npc-name {
  margin-top: 0.5rem;
  font-size: 1.1rem;
  font-weight: 500;
  color: #1f2937;
}

.npc-item img {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
}

.npc-item:hover img {
  transform: scale(1.05);
}
</style>
