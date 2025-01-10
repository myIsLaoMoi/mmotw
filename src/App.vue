<template>
  <div class="app-container">
    <!-- Header -->
    <el-header class="header">
      <el-menu
        mode="horizontal"
        background-color="#1f2937"
        text-color="#d1d5db"
        active-text-color="#ffffff"
      >
        <el-menu-item index="1">
          <router-link to="/" class="logo">PokeKING</router-link>
        </el-menu-item>
        <el-menu-item index="2">
          <router-link to="/home">天王</router-link>
        </el-menu-item>
        <el-menu-item index="3">
          <router-link to="/profile">个人中心</router-link>
        </el-menu-item>
      </el-menu>
    </el-header>

    <!-- Main Content -->
    <router-view/>

    <!-- Footer -->
    <Footer/>
  </div>
</template>

<script>
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>

<style scoped>
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
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
</style>
