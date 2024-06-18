<script setup lang="ts">
import { defineProps } from 'vue'
import Scribble from '@/components/icons/Scribble.vue'
import Star from '@/components/icons/Star.vue'
</script>


<template>
  <div class="bg-white shadow-lg rounded-lg p-4 w-full ">
    <img
      src="/public/img/miff.webp"
      alt="Miffy Plushes"
      class="rounded-lg"
    />
<div class="flex flex-col justify-start mt-4">
  <div class="flex justify-between items-center">
    <div>
      <h2 class="text-xl font-bold font-poppins">Miffy plushes</h2>
      <p class="text-sm text-gray-600 font-poppins">Enter the gentle world of Miffy!</p>
    </div>
    <button
      class="bg-pink-300 hover:bg-pink-400 text-white font-bold font-poppins py-2 px-4 rounded-full transition duration-300 ease-in-out"
    >
      Shop now
    </button>
  </div>
</div>
  </div>
</template>


