<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    variant?: 'default' | 'dark' | 'outlined'
    size?: 'small' | 'medium' | 'large'
    url?: string
    text?: string
    icon?: string | object | undefined
  }>(),
  {
    variant: 'default',
    size: 'medium'
  }
)
const variantClass = {
  default: 'border-indigo-100 bg-indigo-50',
  dark: 'border border-indigo-500 bg-indigo-500 text-white',
  outlined: 'border-indigo-200 bg-red'
}
const sizeClass = {
  small: 'px-4 py-2.5 text-sm',
  medium: 'px-6 py-3 text-base',
  large: 'px-8 py-4 text-base'
}
</script>

<template>
  <RouterLink
    class="inline-flex items-center gap-2 text-indigo-500 border-2 font-bold rounded-lg transition duration-300 ease-in-out"
    :class="[variantClass[props.variant], sizeClass[props.size]]"
    :to="`${url}`"
  >
    <component
      v-if="props.icon"
      :is="props.icon"
      :class="props.variant === 'dark' ? 'stroke-white' : 'stroke-indigo-500'"
      class="size-5"
    />
    {{ text }}
  </RouterLink>
</template>
