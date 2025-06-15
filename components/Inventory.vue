<template>
  <div class="bg-yellow-200 flex flex-wrap gap-1 p-3 font-sans">
    <h1 class="text-4xl bg-yellow-50 p-1 rounded-xl pr-4">
      {{ getEmoji("Points") }}<span class="text-2xl">x</span>{{ store.inventory.Points }}
    </h1>
    <h1 v-for="r in visibleResources" :key="r" class="text-4xl p-1">
      {{ getEmoji(r) }}<span class="text-2xl">x</span>{{ store.inventory[r] }}
    </h1>
  </div>
</template>

<script setup lang="ts">
  import { useStore, getEmoji, ALL_RESOURCES } from "../game"

  const store = useStore()
  const visibleResources = computed(() => {
    //show only resources that we have at least one of; but always show time; and points is handled elsewhere
    return ALL_RESOURCES.filter(r => (store.inventory[r] > 0 || r === "Time") && r !== "Points")
  })
</script>