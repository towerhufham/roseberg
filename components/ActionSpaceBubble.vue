<template>
  <div v-bind:class="activeClasses" class="flex flex-col items-center border-solid border-3 rounded-xl shadow-lg p-1 hover:bg-yellow-50">
    <h2 class="text-xl font-sans">{{ action.name }}</h2>
    <hr class="w-20 m-2 border-yellow-500" />
    <div class="text-center font-sans">
      <span v-for="cost in action.cost" :key="cost.resource" class="text-xl">
          {{ formatResourceCost(cost) }}
      </span>
      <span v-if="action.cost.length > 0" class="text-xl text-yellow-400">
        <svg class="inline" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="currentColor" d="M4 15V9h8V4.16L19.84 12L12 19.84V15z"/>
        </svg>
      </span>
      <span v-for="gain in action.gain" :key="gain.resource" class="text-xl">
          {{ formatResourceGain(gain) }}
      </span>
      <span v-if="action.randomGain" class="text-xl">
          {{ formatRandomGain(action.randomGain) }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { getEmoji, isGenerator } from "../game"
  import type { ActionSpace, ResourceCost, ResourceGain } from "../game"

  const props = defineProps<{action: ActionSpace}>()

  const formatResourceCost = (rc: ResourceCost) => {
    return `-${rc.amount}${getEmoji(rc.resource)}`
  }
  const formatResourceGain = (rg: ResourceGain) => {
    return `+${rg.amount}${getEmoji(rg.resource)}`
  }
  const formatRandomGain = (rgs: ResourceGain[]) => {
    let str = ""
    for (const rg of rgs) {
      str += `/${rg.amount >= 0 ? "+" : ""}${rg.amount}${getEmoji(rg.resource)}`
    }
    return str.substring(1)
  }
  const activeClasses = computed(() => {
    const active = props.action.active
    const generator = isGenerator(props.action)
    return {
      "bg-green-200": active && generator,
      "bg-yellow-100": active && !generator,
      "cursor-pointer": active,
      "bg-slate-300": !active,
      "border-green-500": generator,
      "border-yellow-500": !generator
    }
  })
</script>