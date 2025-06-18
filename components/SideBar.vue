<template>
  <div class="bg-gradient-to-b from-green-600 to-green-800 h-full w-2/12 p-2 text-white overflow-y-scroll">
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
      All other resources are used by actions to exchange some kind for another.
    </p>
    <h3>Actions</h3>
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