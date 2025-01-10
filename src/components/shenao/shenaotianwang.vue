<template>
  <div class="shenao-page">
    <h1>神奥联盟</h1>
    <div class="npc-container">
      <div class="npc-item">
        <img src="https://pokeking.oss-cn-hangzhou.aliyuncs.com/img/npc/%E9%98%BF%E6%9F%B3.png" alt="阿柳">
        <div class="npc-name">阿柳</div>
      </div>
      <div class="npc-item">
        <img src="https://pokeking.oss-cn-hangzhou.aliyuncs.com/img/npc/%E8%8F%8A%E9%87%8E.png" alt="菊野">
        <div class="npc-name">菊野</div>
      </div>
      <div class="npc-item">
        <img src="https://pokeking.oss-cn-hangzhou.aliyuncs.com/img/npc/%E5%A5%A5%E5%B7%B4.png" alt="奥巴">
        <div class="npc-name">奥巴</div>
      </div>
      <div class="npc-item">
        <img src="https://pokeking.oss-cn-hangzhou.aliyuncs.com/img/npc/%E4%BA%94%E6%B4%8B.png" alt="五洋">
        <div class="npc-name">五洋</div>
      </div>
      <div class="npc-item">
        <img src="https://pokeking.oss-cn-hangzhou.aliyuncs.com/img/npc/%E5%B8%8C%E7%BD%97%E5%A8%9C.png" alt="希罗娜">
        <div class="npc-name">希罗娜</div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 组件逻辑
</script>

<style scoped>
.shenao-page {
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
