<template>
  <div class="container-color">
    <div class="color-palettes">
      <div class="color-palette" v-for="color in colors" :key="color.id">
        <div
          class="color-palette__header"
          :style="{
            'background-color': color.hex,
            color: color.textcolor,
          }"
          v-clipboard:copy="`${color.hex}`"
          v-clipboard:success="onCopy"
          v-clipboard:error="onError"
        >
          <div class="color-palette__header__name">
            <div class="label">Name</div>
            <div class="value">{{ color.name }}</div>
          </div>
          <div class="color-palette__header__hex">
            <div class="label">HEX</div>
            <div class="value">
              <span> {{ color.hex }} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <transition name="fade">
      <div
        class="alerts"
        :class="{
          success: alertType === 'success',
          error: alertType === 'error',
        }"
        v-if="alerts"
      >
        {{ message }}
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    colors: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      alerts: false,
      alertType: null,
      message: "",
    };
  },
  methods: {
    onCopy(e) {
      this.alerts = true;
      this.message = e.text + " " + "copied !";
      this.alertType = "success";
      setTimeout(() => {
        this.alerts = false;
      }, 3000);
    },
    onError() {
      this.alerts = true;
      this.message = "Failed to copy texts";
      this.alertType = "error";
      setTimeout(() => {
        this.alerts = false;
      }, 3000);
    },
  },
};
</script>

<style scoped lang="scss" src="./_ColorPalette.scss"></style>
