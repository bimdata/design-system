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
  props: {
    message: {
      type: String,
    },
  },
  data() {
    return {
      alertType: null,
    };
  },
};
</script>

<style scoped lang="scss" src="./_Alerts.scss"></style>
