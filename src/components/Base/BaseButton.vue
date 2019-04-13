<template>
  <div>
    <button v-bind="$attrs"
class="button" :class="buttonClass" v-on="$listeners">
      <slot />
      <span v-if="isLoading">-loading...</span>
    </button>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    // eslint-disable-next-line vue/require-default-prop
    buttonClass: {
      type: String
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.button {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  height: 52px;
  padding: 0 40px;
  background: grey;
  color: white;
  border: none;
  border-radius: 6px;
  text-align: center;
  font-weight: 600;
  white-space: nowrap;
  transition: all 0.2s linear;
}
.button:hover {
  -webkit-transform: scale(1.02);
  transform: scale(1.02);
  box-shadow: 0 7px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
