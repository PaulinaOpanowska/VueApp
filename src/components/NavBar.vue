<template>
  <div id="nav"
class="nav">
    <router-link to="/"
class="brand">
VoteApp
</router-link>
    <nav>
      <router-link :to="{ name: 'score' }">
Score
</router-link>|
      <router-link :to="{ name: 'vote' }">
Vote
</router-link>|
      <router-link :to="{ name: 'settings' }">
Settings
</router-link>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>

