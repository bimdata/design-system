<template>
  <transition name="fade">
    <div
      class="alerts"
      :class="{
        success: alertType === 'success',
        error: alertType === 'error',
      }"
    >
      {{ message }}
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      alertType: null,
    };
  },
  props: {
    message: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
// import BIMDATA COMPONENT VARIABLES
@import "../../../../assets/scss/_BIMDataVariables.scss";

@import "./_Alerts.scss";
</style>
