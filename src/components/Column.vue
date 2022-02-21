<template>
  <div class="column" :class="{ 'fixed-width': width }" :style="style">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface Styles {
  width?: string
}

export default defineComponent({
  props: {
    width: { type: String, default: null }
  },
  computed: {
    style() {
      const result: Styles = { }
      if (this.width !== null) {
        result['width'] = this.width
      }
      return result;
    }
  }
})
</script>
