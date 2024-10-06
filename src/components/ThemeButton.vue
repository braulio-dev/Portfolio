<script setup lang="js">
import { useColorMode } from '@vueuse/core'
import { Button } from '@/components/ui/button'
import { SunIcon } from '@heroicons/vue/24/solid'
import { MoonIcon } from '@heroicons/vue/24/outline'

// Pass { disableTransition: false } to enable transitions
const mode = useColorMode()

const toggleMode = () => {
  mode.value = mode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <Button variant="ghost" size="icon" @click="toggleMode">
    <SunIcon
      class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
    />
    <MoonIcon
      class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
    />
    <span class="sr-only">Theme Toggle</span>
  </Button>
</template>
