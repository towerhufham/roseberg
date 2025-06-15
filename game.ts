import { defineStore } from "pinia"
import { ref } from "vue"
import { inPlaceShuffle, randInt } from "./utils"
import { ALL_ACTIONDEFS } from "./actions"

export const ALL_RESOURCES = ["Points", "Time", "Builds", "Wood", "Grain", "Stone", "Fish", "Mushroom", "Rose"] as const
export type Resource = typeof ALL_RESOURCES[number]
export type ResourcePool = {[key in Resource]: number}

export const getEmoji = (resource: Resource) => {
  const table: {[key in Resource]: string} = {
    Points: "⚜️",
    Time: "⌛",
    Builds: "🔨",
    Wood: "🪵",
    Grain: "🌾",
    Stone: "🪨",
    Fish: "🐟",
    Mushroom: "🍄",
    Rose: "🌹",
  }
  return table[resource]
}

export type ActionSpaceDefinition = {
  name: string,
  starting?: boolean,
  cost: ResourceCost[],
  gain: ResourceGain[],
  randomGain?: ResourceGain[]
}

export type ActionSpace = ActionSpaceDefinition & {
  active: boolean
}

//these two are identical types for now, but could change
export type ResourceCost = {
  resource: Resource,
  amount: number
}
export type ResourceGain = {
  resource: Resource,
  amount: number
}

export const isGenerator = (as: ActionSpace) => {
  return (as.cost.length === 0)
}

export const sortActionSpaces = (spaces: ActionSpace[]) => {
  return [...spaces].sort((a, b) => {
    //if same type, sort by name
    if (isGenerator(a) === isGenerator(b)) {
        return a.name.localeCompare(b.name)
    }
    //a is generator, b is not
    if (isGenerator(a)) {
        return -1
    }
    //b is generator, a is not
    return 1
  })
}

export const useStore = defineStore("game", () => {
  const inventory: Ref<ResourcePool> = ref({
    Points: 0,
    Time: 10,
    Builds: 0,
    Wood: 0,
    Grain: 0,
    Stone: 0,
    Fish: 0,
    Mushroom: 0,
    Rose: 0,
  })

  const actionsTaken: Ref<ActionSpace[]> = ref([])
  const builtSpaces: Ref<ActionSpace[]> = ref(
    ALL_ACTIONDEFS.filter(actionDef => actionDef.starting)
      .map(actionDef => {return {...actionDef, active: true}})
  )
  const blueprintSpaces: Ref<ActionSpace[]> = ref(
    ALL_ACTIONDEFS.filter(actionDef => !actionDef.starting)
      .map(actionDef => {return {...actionDef, active: true}})
  )
  
  const changeResource = (resource: Resource, n: number) => {
    inventory.value[resource] += n
  }
  const takeAction = (as: ActionSpace) => {
    //make sure we can pay for it, it hasn't been taken, & have time
    if (inventory.value["Time"] <= 0 || !as.active) {
      return false
    }
    for (const c of as.cost) {
      if (inventory.value[c.resource] < c.amount) {
        return false
      }
    }
    //actually take the action now
    for (const c of as.cost) {
      changeResource(c.resource, -c.amount)
    }
    for (const g of as.gain) {
      changeResource(g.resource, g.amount)
    }
    //if there are random gains, get one
    if (as.randomGain) {
      if (as.randomGain.length > 0) {
        const index = randInt(0, as.randomGain.length-1)
        const rg = as.randomGain[index]
        changeResource(rg.resource, rg.amount)
      }
    }
    //record action
    as.active = false
    return true
  }
  const buildAction = (as: ActionSpace) => {
    blueprintSpaces.value = blueprintSpaces.value.filter(s => s !== as)
    builtSpaces.value.push(as)
  }

  return { 
    inventory, actionsTaken, builtSpaces, blueprintSpaces,
    changeResource, takeAction, buildAction
  }
})