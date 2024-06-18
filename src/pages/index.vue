<script setup lang="ts">
import { defineProps } from 'vue'
import Scribble from '@/components/icons/Scribble.vue'
import Star from '@/components/icons/Star.vue'
import CardMiffy from '@/components/CardMiffy.vue'
import CardKitty from '@/components/CardKitty.vue'
import CardNin from '@/components/CardNin.vue'
import CardIkea from '@/components/CardIkea.vue'
import Line from '@/components/icons/Line.vue'
import { ref } from 'vue'

const faqs = ref([
  { question: "Are those plushies real?", answer: "No, this is a personal project and everything is fake. You can't buy them.", open: false },
  { question: "Can you really ship them?", answer: "No. Nothing won't be sold nor shipped. This website is only for display.", open: false }
]);

function toggleFAQ(index: number) {
  faqs.value[index].open = !faqs.value[index].open;
}
</script>

<template>
  <div class="bg-paasul-pink1 min-h-screen flex items-center justify-center p-8 grid grid-cols-12">
    <div class="container mx-auto gap-4 items-center col-span-6">
      <div class="col-span-6">
        <h1 class="font-kaisei text-5xl mb-4 col-start-1 col-end-6 col-span-6">Find the cutest plushies right here!</h1>
        <Scribble class="mb-6" />
        <p class="font-poppins text-gray-500 text-lg mb-6">
          Introducing our favorite cuddly plushes for you to discover on our website. You’ll find
          Nintje, Sanrio, Nintendo, and more! <br> Explore our delightful collection.
        </p>
        <button
          class="bg-white text-gray-500 font-poppins font-bold py-2 px-8 rounded-full hover:bg-pink-100 transition duration-300 ease-in-out mb-6">Shop
          now</button>
      </div>
    </div>
    <div class="col-span-12 col-start-7">
      <div class="col-start-7 col-end-12">
        <img src="/public/img/imagehead.jpg" alt="miffy plushies" class="shadow-xl rounded-lg w-full h-auto" />
      </div>
    </div>
  </div>

  <div class="bg-paasul-pink2 grid grid-cols-12">
    <h2 class="font-kaisei text-4xl text-center py-8 col-span-12 mb-16 mt-16">Welcome to paasul’s shop</h2>
    <p class="col-span-12 col-start-2 col-end-6 font-poppins text-gray-600">Hello, and welcome to Paasul’s Shop, your
      ultimate destination for the cutest and cuddliest plush companions.
      Dive into our enchanting collection featuring everyone’s favorite characters from Sanrio, Miffy, and Nintendo.
      Whether you're a collector or seeking the perfect gift, you're sure to find a plush pal to cherish!</p>

    <p class="col-span-12 col-start-8 col-end-12 font-poppins text-gray-600 ">Enter the gentle world of Miffy, the
      adorable bunny who has captured hearts worldwide with her innocent adventures. Our range of Miffy plush toys comes
      in various sizes and designs, ideal for storytelling or decorating a nursery. Soft, lovable, and made to the
      highest safety standards, Miffy is ready to be a little one's new best friend.</p>
    <p class="col-span-12 col-start-8 col-end-12 font-poppins text-gray-600 mt-11 ">From the charming Hello Kitty to the
      mischievous Gudetama, our Sanrio collection is all about bringing smiles with a touch of kawaii. These plushies
      are made with high-quality materials and capture the essence of each character's spirit. Perfect for fans of all
      ages, they’re not just toys, but keepsakes.</p>
    <img src="/public/img/shop.jpg" alt="miffy plushies"
      class="col-span-12 col-start-2 col-end-6 mb-20 w-full h-auto" />

    <div class="col-span-12 col-start-2 col-end-12 flex flex-row items-start space-x-4">
      <div class="flex flex-col space-y-4">
        <h2 class="font-kaisei text-4xl text-left py-8">Why shop with us?</h2>
        <p class="font-poppins text-gray-600">At Paasul’s Shop, we're passionate about plushies. We believe in quality,
          charm, and creating lasting memories. <br> Our plush toys are:</p>
        <ul class="flex flex-col space-y-2">
          <li class="flex items-center space-x-2">
            <Star />
            <p class="font-poppins text-gray-600"><b>Ethically Sourced:</b> High-quality materials that are durable and
              safe.</p>
          </li>
          <li class="flex items-center space-x-2">
            <Star />
            <p class="font-poppins text-gray-600"><b>Affordably Priced:</b> Get the best value for your money.</p>
          </li>
          <li class="flex items-center space-x-2">
            <Star />
            <p class="font-poppins text-gray-600"><b>Lovingly Packaged:</b> Each order is packed and shipped with care.
            </p>
          </li>
        </ul>
      </div>
      <img src="/public/img/cinnaquestion.png" alt="Cinna Plushies" class="h-96 object-cover">
    </div>
  </div>


  <div class="bg-white grid grid-cols-12">
    <h2 class="font-kaisei text-4xl text-center py-8 col-span-12 mb-5 mt-16">Cuddly companions for everyone</h2>
    <p class="col-span-12 font-poppins text-gray-600 text-center mb-24">Bring the new joy home !</p>
   </div>

   <div class="bg-paasul-pink3 grid grid-cols-12">
<CardMiffy class=" col-span-4 col-start-2 mt-20 mb-20"/>
<CardKitty class=" col-span-4 col-start-8 mt-44 mb-20"/>
<CardNin class=" col-span-4 col-start-2 mt-8 mb-20"/>
<CardIkea class=" col-span-4 col-start-8 mt-32 mb-20"/>
   </div>

<div class="bg-paasul-pink2 grid grid-cols-12 gap-4">
    <div class="col-span-12 col-start-2 col-end-8">
      <h2 class="font-kaisei text-4xl text-left py-8 mt-16">Frequently asked questions</h2>
      <Line />
      <p class="text-left mt-9 mb-9 font-poppins text-gray-600">Get all your questions answered!</p>
      <div v-for="(faq, index) in faqs" :key="index" class="mb-4">
        <button @click="toggleFAQ(index)" class="w-full text-left flex justify-between items-center p-4 bg-blue-100 rounded-lg shadow">
          <span class="font-poppins text-lg text-gray-700">{{ faq.question }}</span>
          <svg v-if="!faq.open" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-pink-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-pink-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
          </svg>
        </button>
        <div v-if="faq.open" class="mt-2 pl-4 pr-4 pb-4 text-gray-600 text-sm font-poppins bg-blue-100/50 rounded-lg">
          {{ faq.answer }}
        </div>
      </div>
    </div>
    <div class="col-start-8 col-end-12">
      <img src="/public/img/bon-ton-toys_bt24182519-removebg-preview.png" alt="faq" class="w-full h-auto mt-9 mb-9" />
    </div>
  </div>


</template>

<style scoped>
.scribble {}
</style>
