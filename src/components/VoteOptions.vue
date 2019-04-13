<template>
  <div class="option-list">
    <slot name="header">
      <h2>Default Header</h2>
    </slot>

    <ul>
      <slot v-for="optionItem in options"
name="item" :option-item="optionItem">
        <li :key="optionItem.id">
{{ optionItem.text }}
</li>
      </slot>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array
    }
  }
};
</script>