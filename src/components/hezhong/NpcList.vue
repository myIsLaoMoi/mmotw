<template>
  <div class="npc-container">
    <div class="npc-item" @click="handleClick('式美')">
      <img src="https://pokeking.oss-cn-hangzhou.aliyuncs.com/img/npc/%E5%BC%8F%E7%BE%8E.png" alt="式美">
      <div class="npc-name">式美</div>
    </div>
    <div class="npc-item" @click="handleClick('基玛')">
      <img src="https://pokeking.oss-cn-hangzhou.aliyuncs.com/img/npc/%E5%9F%BA%E7%8E%9B.png" alt="基玛">
      <div class="npc-name">基玛</div>
    </div>
    <div class="npc-item" @click="handleClick('卡特莉亚')">
      <img src="https://pokeking.oss-cn-hangzhou.aliyuncs.com/img/npc/%E5%8D%A1%E7%89%B9%E8%8E%89%E4%BA%9A.png" alt="卡特莉亚">
      <div class="npc-name">卡特莉亚</div>
    </div>
    <div class="npc-item" @click="handleClick('练武')">
      <img src="https://pokeking.oss-cn-hangzhou.aliyuncs.com/img/npc/%E7%BB%83%E6%AD%A6.png" alt="练武">
      <div class="npc-name">练武</div>
    </div>
    <div class="npc-item" @click="handleClick('阿迪克')">
      <img src="https://pokeking.oss-cn-hangzhou.aliyuncs.com/img/npc/%E9%98%BF%E8%BF%AA%E5%85%8B.png" alt="阿迪克">
      <div class="npc-name">阿迪克</div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const handleClick = (name) => {
  router.push(`/hezhong/${name}`)
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
