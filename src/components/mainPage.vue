<template>
  <div class="page-container">

    <!-- Main Content -->
    <el-main class="main-content">
      <div class="league-cards">
        <el-card v-for="league in leagues" :key="league.name" class="league-card">
          <h2 class="league-title">{{ league.name }}</h2>
          <el-button 
            type="primary" 
            class="league-button" 
            @click="handleLeagueClick(league.name)"
          >
            进入联盟
          </el-button>
        </el-card>
      </div>
    </el-main>

  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const leagues = [
  { name: '关都联盟', path: '/guandu' },
  { name: '丰源联盟', path: '/fengyuan' },
  { name: '合众联盟', path: '/hezhong' },
  { name: '神奥联盟', path: '/shenao' },
  { name: '成都联盟', path: '/' },
  { name: '其他联盟', path: '/' }
]

const handleLeagueClick = (leagueName) => {
  if (leagueName === '关都联盟') {
    router.push('/guandu')
  } else {
    router.push(leagues.find(l => l.name === leagueName).path)
  }
}
</script>

<style scoped>
.page-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
}

.header {
  padding: 0;
}

.logo {
  font-size: 1.25rem;
  font-weight: 700;
  color: inherit;
  text-decoration: none;
}

a {
  text-decoration: none;
}

.main-content {
  flex: 1;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.league-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
}

@media (max-width: 768px) {
  .league-cards {
    grid-template-columns: 1fr;
  }
}

.league-card {
  background-color: #f3f4f6;
  padding: 2rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.league-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0;
}

.league-button {
  width: 100%;
}

.footer {
  background-color: white;
  border-top: 1px solid #e5e7eb;
  padding: 1rem;
  text-align: center;
  font-size: 0.875rem;
  color: #4b5563;
}
</style>
