<template>
  <div class="bg-gradient-to-b from-green-600 to-green-800 min-h-full w-2/12 p-2 overflow-y-scroll">
    <div class="text-white">
      <h2 class="font-bold text-2xl text-center">How To Play</h2>
      <h3>Resources</h3>
      <p>
        Your resources are listed on the top row. Three resources are particularly important: 
        <b>Points, Time, and Builds.</b>
      </p>
      <p>
        <b>&bull; {{getEmoji("Points")}}Points</b> are your score at the end of the game.
      </p>
      <p>
        <b>&bull; {{getEmoji("Time")}}Time</b> represents how many more turns you have, roughly.
      </p>
      <p>
        <b>&bull; {{getEmoji("Builds")}}Builds</b> can be spent to add new actions to your board.
      </p>
      <p>
        All other resources are used by actions.
      </p>
      <h3>Actions</h3>
      <p>
        Actions trade in some number of resources for another.
      </p>
      <p>
        Green actions are generators, which provide resources without any cost. Make sure to use them every round!
      </p>
      <p>
        If an action lists multiple sets of resources separated by slashes, you will receive one of the sets at random.
      </p>
      <p>
        New actions can be built from the bottom "blueprint" section by spending a <b>{{getEmoji("Builds")}}Build</b> and clicking the "build" button.
      </p>
      <p>
        Actions turn grey after being used. You can spend one <b>{{getEmoji("Time")}}Time</b> by clicking the hourglass button to refresh all your actions,
      </p>
      <h3>Space</h3>
      <p>Letsa go to mariofalaxy sdui</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { getEmoji } from '~/game';
</script>

<style scoped>
  @reference "tailwindcss";
  h3 {
    @apply font-bold text-xl text-center mt-3;
  }
  p {
    @apply mb-2;
  }
</style>