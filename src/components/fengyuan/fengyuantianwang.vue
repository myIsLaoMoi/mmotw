<template>
  <div class="fengyuan-page">
    <h1>丰原联盟</h1>
    <div class="npc-container">
      <div class="npc-item">
        <img src="https://pokeking.oss-cn-hangzhou.aliyuncs.com/img/npc/%E8%8A%B1%E6%9C%88.png" alt="花月">
        <div class="npc-name">花月</div>
      </div>
      <div class="npc-item">
        <img src="https://pokeking.oss-cn-hangzhou.aliyuncs.com/img/npc/%E8%8A%99%E8%93%89.png" alt="芙蓉">
        <div class="npc-name">芙蓉</div>
      </div>
      <div class="npc-item">
        <img src="https://pokeking.oss-cn-hangzhou.aliyuncs.com/img/npc/%E6%B3%A2%E5%A6%AE.png" alt="波妮">
        <div class="npc-name">波妮</div>
      </div>
      <div class="npc-item">
        <img src="https://pokeking.oss-cn-hangzhou.aliyuncs.com/img/npc/%E6%BA%90%E6%B2%BB.png" alt="源治">
        <div class="npc-name">源治</div>
      </div>
      <div class="npc-item">
        <img src="https://pokeking.oss-cn-hangzhou.aliyuncs.com/img/npc/%E7%B1%B3%E5%8F%AF%E5%88%A9.png" alt="米可利">
        <div class="npc-name">米可利</div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 组件逻辑
</script>

<style scoped>
.fengyuan-page {
  padding: 2rem;
  text-align: center;
}

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

h1 {
  color: #1f2937;
  margin-bottom: 1rem;
}

p {
  color: #4b5563;
}
</style>
