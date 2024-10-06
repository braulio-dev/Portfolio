<script setup lang="js">
import ThemeButton from '@/components/ThemeButton.vue'
</script>

<template>
  <header class="sticky py-6 top-0 shadow bg-primary-foreground/15 backdrop-blur-3xl">
    <nav class="flex justify-between container w-full align-middle">
      <router-link to="">
        <img class="w-[100px]" src="/logo.png" alt="Logo" />
      </router-link>

      <div class="nav-buttons flex">
        <ul class="flex space-x-10 items-center">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/about">About</router-link>
          </li>
          <li>
            <router-link to="/projects">Projects</router-link>
          </li>
          <li>
            <router-link to="/contact">Contact</router-link>
          </li>
          <li>
            <ThemeButton />
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
