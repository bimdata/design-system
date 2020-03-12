<template>
  <div class="bimdata-card__brand">
    <div class="bimdata-card__brand--left">
      <slot name="left"></slot>
      <span v-if="text">{{text}}</span>
    </div>
    <slot name="right"></slot>
  </div>
</template>

<script>
import BIMDataBurgerMenu from "../BIMDataBurgerMenu/BIMDataBurgerMenu.vue"
export default {
  components: {
    BIMDataBurgerMenu
  },
  props: {
    text: {
      type: String
    },
    burger: {
      type: Boolean
    }
  }
}
</script>