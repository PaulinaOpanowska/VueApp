<template>
  <div>
    Settings
    <BaseButton button-class="btnClass" :is-loading="isLoading" @click="ChangeLoading">AppButton</BaseButton>
  </div>
</template>

<script>
export default {
  data: () => ({
    textValue: "test",
    isLoading: false
  }),
  methods: {
    ChangeLoading() {
      this.isLoading = !this.isLoading;
    }
  }
};
</script>

<style>
</style>
