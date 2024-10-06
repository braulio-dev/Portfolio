<script setup>
import HeaderLayout from '@/layouts/HeaderLayout.vue'
import FooterLayout from '@/layouts/FooterLayout.vue'
</script>

<template>
  <div id="app">
    <HeaderLayout />
    <main>
      <router-view></router-view>
    </main>
    <FooterLayout />
  </div>
</template>
