<template>
  <div>
    Vote
    <VoteOptions :options="optionsDefault">
      <template #header>
        <h3>Custom header</h3>
      </template>
      <template v-slot:item="{ optionItem }">
        <li>
          <strong>Option:</strong>
          {{ optionItem.text }}
        </li>
      </template>
    </VoteOptions>
  </div>
</template>

<script>
import VoteOptions from "@/components/VoteOptions.vue";
export default {
  components: {
    VoteOptions
  },
  data: () => ({
    optionsDefault: [
      {
        id: 0,
        text: "Yes"
      },
      {
        id: 1,
        text: "No"
      }
    ]
  })
};
</script>

<style>
</style>
