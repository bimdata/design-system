<template>
  <span class="bimdata-tooltip">{{ message }}</span>
</template>

<script>
export default {
  name: "BaseTooltip",
  props: {
    message: {
      type: String,
      default: null
    },
  }
}
</script>

<style lang="scss">
  // import BIMDATA VARIABLES
  @import "../../assets/scss/_BIMDataVariables.scss";

  // import BIMDATA MIXINS
  @import "../../assets/scss/mixins/_font-size.scss";
  @import "../../assets/scss/mixins/_pseudo.scss";

  // import BIMDATA STYLE COMPONENT
  @import "./_keyframes.scss";
  @import "./_BIMDataTooltip.scss";
</style>