<script setup lang="ts">
import { defineProps } from 'vue'
import IconShare from '@/components/icons/IconShare.vue'
import IconLove from '@/components/icons/IconLove.vue'
import IconArea from '@/components/icons/IconArea.vue'
import IconBath from '@/components/icons/IconBath.vue'
import IconImage from '@/components/icons/IconImage.vue'
import IconCheck from '@/components/icons/IconCheck.vue'
import IconDocument from '@/components/icons/IconDocument.vue'
import IconChevronLeft from '@/components/icons/IconChevronLeft.vue'  
import IconSearch from '@/components/icons/IconSearch.vue'
import IconBed from '@/components/icons/IconBed.vue'
import IconRepair from '@/components/icons/IconRepair.vue'
</script>
<template>
    <div class="p-8 lg:px-32">
        <div class="flex items-center gap-1">
            <IconChevronLeft />
            <h3 class="text-lg font-bold text-indigo-500">Back to map</h3>
        </div>

        <h1 class="text-2xl font-bold pb-2">Beverly Springfield</h1>
        <h2 class="text-base font-normal pb-8">2821 Lake Sevilla, Palm Harbor, TX</h2>

       <div class="flex justify-end items-center gap-4">
  <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2 px-6 py-3 rounded-lg bg-[#f6f8ff] border-[1.5px] border-indigo-100">
   <IconShare class="stroke-indigo-500" />
    <p class="flex-grow-0 flex-shrink-0 text-base font-bold text-center text-indigo-500">Share</p>
  </div>
  <div
    class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2 px-6 py-3 rounded-lg bg-[#f6f8ff] border-[1.5px] border-indigo-100"
  >
    <IconLove class="stroke-indigo-500" />
    <p class="flex-grow-0 flex-shrink-0 text-base font-bold text-center text-indigo-500">
      Favorite
    </p>
  </div>
  <div
    class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2 px-6 py-3 rounded-lg bg-[#f6f8ff] border-[1.5px] border-indigo-100"
  >
    <IconSearch class="stroke-indigo-500" />
    <p class="flex-grow-0 flex-shrink-0 text-base font-bold text-center text-indigo-500">
      Browse nearby listings
    </p>
  </div>
</div>

        <div class="relative pb-8 ">
            <div class="grid grid-cols-2 gap-3 lg:grid lg:grid-cols-3 lg:gap-4">

                <img src="/public/img/house-1.jpg" alt="house1"
                    class="w-full object-cover rounded-xl col-span-2 lg:row-start-1 lg:row-span-2" />
                <Button class="absolute bottom-2/4 right-3  text-sm font-bold bg-white" variant="default"
                    text="View all photos" size="small" url="#" :icon="IconImage" />
                <img src="/public/img/house-2.jpg" alt="house2"
                    class="w-full object-cover rounded-xl lg:col-span-1 lg:flex lg:flex-col lg:gap-4 lg:row-start-1" />
                <img src="/public/img/house-3.jpg" alt="house3"
                    class="w-full object-cover rounded-xl lg:col-span-1 lg:flex lg:flex-col lg:gap-4 lg:row-start-2" />
            </div>

        </div>



<div class="flex flex-col justify-start items-start relative gap-12">
  <div class="flex-grow-0 flex-shrink-0 w-[784px] h-[115px]">
    <div
      class="w-[784px] h-[115px] absolute left-[-0.75px] top-[-0.75px] rounded-lg bg-white border-[1.5px] border-indigo-100"
    ></div>
    <div class="w-[737px] h-[68px]">
      <div class="w-[131px] h-[68px]">
        <div class="w-[131px] h-[67px] absolute left-[293.5px] top-[23.5px] bg-white"></div>
        <div class="flex flex-col justify-start items-start absolute left-[294px] top-6 gap-4">
          <p class="flex-grow-0 flex-shrink-0 text-base text-left text-gray-500">Square Area</p>
          <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2">
            <IconArea class="stroke-gray-500" />
            <p class="flex-grow-0 flex-shrink-0 text-lg font-bold text-left text-gray-900">
              6x7.5 m²
            </p>
          </div>
        </div>
      </div>
      <div class="w-[115px] h-[68px]">
        <div class="w-[115px] h-[67px] absolute left-[23.5px] top-[23.5px] bg-white"></div>
        <div class="flex flex-col justify-start items-start absolute left-6 top-6 gap-4">
          <p class="flex-grow-0 flex-shrink-0 text-base text-left text-gray-500">Bedrooms</p>
          <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2">
            <IconBed class="stroke-gray-500" />
            <p class="flex-grow-0 flex-shrink-0 text-lg font-bold text-left text-gray-900">4</p>
          </div>
        </div>
      </div>
      <div class="w-[115px] h-[68px]">
        <div class="w-[115px] h-[67px] absolute left-[162.5px] top-[23.5px] bg-white"></div>
        <div class="flex flex-col justify-start items-start absolute left-[163px] top-6 gap-4">
          <p class="flex-grow-0 flex-shrink-0 text-base text-left text-gray-500">Bathrooms</p>
          <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2">
            <IconBath class="stroke-gray-500" />
            <p class="flex-grow-0 flex-shrink-0 text-lg font-bold text-left text-gray-900">2</p>
          </div>
        </div>
      </div>
      <div class="w-[131px] h-[68px]">
        <div class="w-[131px] h-[67px] absolute left-[629.5px] top-[23.5px] bg-white"></div>
        <div class="flex flex-col justify-start items-start absolute left-[630px] top-6 gap-4">
          <p class="flex-grow-0 flex-shrink-0 text-base text-left text-gray-500">Status</p>
          <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2">
            <IconCheck class="stroke-gray-500" />
            <p class="flex-grow-0 flex-shrink-0 text-lg font-bold text-left text-gray-900">
              Active
            </p>
          </div>
        </div>
      </div>
      <div class="w-[140px] h-[67px]">
        <div class="w-[131px] h-[67px] absolute left-[456.5px] top-[23.5px] bg-white"></div>
        <div
          class="flex flex-col justify-start items-start h-[64.13px] absolute left-[457px] top-6 gap-4"
        >
          <p class="flex-grow-0 flex-shrink-0 text-base text-left text-gray-500">Repair Quality</p>
          <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2">
            <IconRepair class="stroke-gray-500" />
            <p class="flex-grow-0 flex-shrink-0 text-lg font-bold text-left text-gray-900">
              Modern Loft
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-8">
    <div class="flex-grow-0 flex-shrink-0 w-[782px] h-[76px]">
      <p
        class="w-[782px] absolute left-0 top-[52px] opacity-70 text-base text-left text-gray-900"
      ></p>
      <p class="absolute left-0 top-0 text-2xl font-bold text-left text-gray-900">
        About this home
      </p>
    </div>
  </div>
</div>
<div class="w-[376px] h-[191px]">
  <div class="w-[376px] h-[191px] absolute left-[815.25px] top-[720.25px] rounded-lg bg-white border-[1.5px] border-indigo-100">
</div>
  <div class="flex flex-col justify-start items-start absolute left-[840px] top-[745px] gap-6">
    <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-1">
      <p class="flex-grow-0 flex-shrink-0 opacity-50 text-sm text-left text-gray-900">Rent price</p>
      <div class="flex justify-start items-end flex-grow-0 flex-shrink-0 relative gap-0.5">
        <p class="flex-grow-0 flex-shrink-0 text-2xl font-bold text-left text-indigo-500">$2,700</p>
        <p
          class="flex-grow-0 flex-shrink-0 w-[51px] h-8 opacity-50 text-sm text-left text-gray-900"
        >
          /month
        </p>
      </div>
    </div>
    <div
      class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[328px] relative overflow-hidden gap-2 px-8 py-4 rounded-lg bg-indigo-500"
    >
      <IconDocument class="stroke-white" />
      <p class="flex-grow-0 flex-shrink-0 text-base font-bold text-center text-white">Apply now</p>
    </div>
  </div>
</div>


        <h2 class="text-2xl font-bold pb-8">Similar listings</h2>

        <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            <Card v-for="house in houses" v-bind="house" :key="house.id" />
        </div>
    </div>
</template>
