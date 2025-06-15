<template>
  <div class="items-start flex flex-wrap gap-5 p-3 bg-blue-300">
    <button @click="tryStartBuilding" class="border-2 border-green-400 bg-green-50 rounded-lg shadow-md p-1 hover:bg-white text-xl">
      {{ state.isBuilding ? "Building..." : "Build🔨" }}
    </button>
    <ActionSpaceBubble v-for="action in sortActionSpaces(store.blueprintSpaces)" :key="action.name" v-bind:action="action"  @click="handleBuild(action)" />
  </div>
</template>

<script setup lang="ts">
  import { useStore, sortActionSpaces } from "../game"
  import type { ActionSpace } from "../game"

  const store = useStore()
  const state = reactive({isBuilding: false})

  const tryStartBuilding = () => {
    if (!state.isBuilding) {
      if (store.inventory.Builds > 0) {
        state.isBuilding = true
      } else {
        alert("You need a 🔨 to build.")
      }
    } else {
      state.isBuilding = false
    }
  }
  const handleBuild = (as: ActionSpace) => {
    if (state.isBuilding) {
      store.buildAction(as)
      state.isBuilding = false
      store.inventory.Builds--
    }
  }
</script>