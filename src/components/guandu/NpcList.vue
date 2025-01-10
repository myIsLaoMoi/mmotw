<template>
  <div class="npc-container">
    <div class="npc-item" @click="handleClick('科拿')">
      <img src="https://pokeking.oss-cn-hangzhou.aliyuncs.com/img/npc/%E7%A7%91%E6%8B%BF.png" alt="科拿">
      <div class="npc-name">科拿</div>
    </div>
    <div class="npc-item" @click="handleClick('希巴')">
      <img src="https://pokeking.oss-cn-hangzhou.aliyuncs.com/img/npc/%E5%B8%8C%E5%B7%B4.png" alt="希巴">
      <div class="npc-name">希巴</div>
    </div>
    <div class="npc-item" @click="handleClick('菊子')">
      <img src="https://pokeking.oss-cn-hangzhou.aliyuncs.com/img/npc/%E8%8F%8A%E5%AD%90.png" alt="菊子">
      <div class="npc-name">菊子</div>
    </div>
    <div class="npc-item" @click="handleClick('渡')">
      <img src="https://pokeking.oss-cn-hangzhou.aliyuncs.com/img/npc/%E6%B8%A1.png" alt="渡">
      <div class="npc-name">渡</div>
    </div>
    <div class="npc-item" @click="handleClick('小茂')">
      <img src="https://pokeking.oss-cn-hangzhou.aliyuncs.com/img/npc/%E5%B0%8F%E8%8C%82.png" alt="小茂">
      <div class="npc-name">小茂</div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const handleClick = (name) => {
  router.push(`/guandu/${name}`)
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
