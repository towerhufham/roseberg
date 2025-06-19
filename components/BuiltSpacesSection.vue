<template>
  <section class="flex-grow">
    <div class="items-start justify-start flex flex-wrap gap-5 p-3">
      <button @click="refresh" class="border-2 border-green-400 bg-green-50 rounded-lg shadow-md p-1 cursor-pointer hover:bg-white text-xl">
        ⌛
      </button>
      <ActionSpaceBubble v-for="action in sortActionSpaces(store.builtSpaces)" v-bind:action="action" :key="action.name" @click="store.takeAction(action)" />
    </div>
  </section>
</template>

<script setup lang="ts">
  import { useStore, sortActionSpaces } from "../game"
  const store = useStore()
  const refresh = () => {
    if (store.inventory.Time > 0) {
      store.inventory.Time--
      for (const as of store.builtSpaces) {
        as.active = true
      }
    }
  }
</script>