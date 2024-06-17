<script setup lang="ts">
import IconBed from '@/components/icons/IconBed.vue'
import IconBath from '@/components/icons/IconBath.vue'
import IconArea from '@/components/icons/IconArea.vue'
import IconLove from '@/components/icons/IconLove.vue'
import { ref } from 'vue'

const props = defineProps<{
  id: number
  title: string
  price: string
  address: string
  beds: number
  bathrooms: number
  area: number
  imgCardPath: string
  imgAlt: string
}>()

const like = ref(true)
</script>
<template>
  <article class="group">
    <RouterLink to="/">
      <picture class="block rounded-t-lg overflow-hidden">
        <img
          class="transition-all duration-300 ease-in-out group-hover:scale-110"
          :src="imgCardPath"
          :alt="imgAlt"
        />
      </picture>
    </RouterLink>
    <div
      class="relative bg-white px-6 py-8 border border-indigo-200 border-t-0 rounded-b-lg space-y-4"
    >
      <p class="text-gray-500 flex items-center">
        <span class="text-2xl font-bold text-indigo-500">${{ price }}</span
        >/month
      </p>
      <h3 class="text-2xl font-semibold">
        <RouterLink class="text-black" to="/">{{ title }}</RouterLink>
      </h3>
      <button
        class="absolute right-6 top-8 !mt-0 border border-indigo-200 rounded-full p-2"
        @click="like = !like"
      >
        <IconLove
          class="stroke-indigo-500 relative top-[1px]"
          :class="{ 'fill-indigo-500': !like }"
        />
      </button>
      <address class="text-gray-500 not-italic border-b border-indigo-100 pb-4">
        {{ address }}
      </address>

      <ul class="flex justify-between text-sm *:flex *:gap-2">
        <li>
          <IconBed class="size-5 stroke-indigo-500" /> <span>{{ beds }} beds</span>
        </li>
        <li>
          <IconBath class="size-5 stroke-indigo-500" /> <span>{{ bathrooms }} bathrooms</span>
        </li>
        <li>
          <IconArea class="size-5 stroke-indigo-500" /> <span>{{ area }} m<sup>2</sup></span>
        </li>
      </ul>
    </div>
  </article>
</template>
