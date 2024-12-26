<template>
  <div class="bimdata-infobox">
    <div class="bimdata-infobox__stripe"
      :style="{ backgroundColor: `var(--color-${color})` }"
    >
      <!-- left stripe -->
    </div>
    <div class="bimdata-infobox__icon">
      <BIMDataIcon :name="icon" :customSize="18" :color="color" fill />
    </div>
    <div class="bimdata-infobox__text">
      <slot>{{ text }}</slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: ""
  },
  icon: {
    type: String,
    default: "information"
  },
  color: {
    type: String,
    validator:
      v => [
        "granite-light",
        "high",
        "neutral",
        "primary",
        "secondary",
        "success",
        "warning",
      ].includes(v),
    default: "neutral"
  },
});
</script>

<style scoped>
.bimdata-infobox {
  position: relative;
  padding: var(--spacing-unit);
  border-radius: 3px;
  background-color: var(--color-silver-light);
  color: var(--color-granite-light);
  overflow: hidden;

  display: flex;
  align-items: start;
  gap: var(--spacing-unit);

  .bimdata-infobox__stripe {
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
  }

  .bimdata-infobox__icon {
    width: 18px;
    height: 18px;
    line-height: 18px;
    margin-top: calc((1em * 1.25 - 18px) / 2);
  }

  .bimdata-infobox__text {
    line-height: 1.25;
  }
}
</style>
