<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import IconLogo from '@/components/icons/IconLogo.vue'
import IconLove from '@/components/icons/IconLove.vue'
import { RouterLink } from 'vue-router'

const activeMenu = ref(false)
const isScrolled = ref(false)

function toggleScroll() {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', toggleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', toggleScroll)
})

function closeMenu() {
  activeMenu.value = false
}
</script>


<template>
  <header
    :class="['fixed top-0 left-0 w-full z-40 grid grid-cols-12 items-center px-4 h-20 transition-all duration-300', isScrolled ? 'bg-paasul-pink1' : 'bg-transparent']">
    <RouterLink to="/" class="flex items-center gap-2 col-span-3">
      <IconLogo />
      <p class="font-kaisei text-lg">paasul shop</p>
    </RouterLink>
    <IconLove class="col-end-12 justify-self-end" />
  </header>
</template>

